// blue, red, green, yellow, purple
const colors = ['rgb(82, 136, 216)','rgb(216, 82, 82)','rgb(82, 216, 95)','rgb(212, 216, 82)','rgb(186, 82, 216)'];

let numberP = 1;
let numberP2 = 2;
let currentIndex = 0;


function colorRandom (){
    return colors[Math.floor(Math.random() * colors.length)];
};

$('.rondSecret').css('backgroundColor', colorRandom);


function changeColor (proposition, index){
    if ($(proposition).eq(index).css('backgroundColor') == 'rgb(82, 136, 216)'){ //blue
        $(proposition).eq(index).css('backgroundColor', 'rgb(36, 64, 106)') //blue foncé
    }else if ($(proposition).eq(index).css('backgroundColor') == 'rgb(216, 82, 82)'){ //red
        $(proposition).eq(index).css('backgroundColor', 'rgb(118, 34, 34)') //red foncé
    }else if ($(proposition).eq(index).css('backgroundColor') == 'rgb(82, 216, 95)'){ //green
        $(proposition).eq(index).css('backgroundColor', 'rgb(25, 118, 34)') //green foncé
    }else if ($(proposition).eq(index).css('backgroundColor') == 'rgb(212, 216, 82)'){ //yellow
        $(proposition).eq(index).css('backgroundColor', 'rgb(126, 129, 31)') //yellow foncé
    }else if ($(proposition).eq(index).css('backgroundColor') == 'rgb(186, 82, 216)'){ //purple
        $(proposition).eq(index).css('backgroundColor', 'rgb(111, 32, 133)') //purple foncé
    }
}

// console.log($('#proposition1>div'));

function verification (codeSecret, proposition, rondPetit, indexPrincipal, index1, index2, index3, propositionNext){
    if ($(codeSecret).eq(indexPrincipal).css('backgroundColor') == $(proposition).eq(indexPrincipal).css('backgroundColor')){

        $(rondPetit).eq(indexPrincipal).css('backgroundColor', 'green')
        $(propositionNext).eq(indexPrincipal).css('backgroundColor' ,$(proposition).eq(indexPrincipal).css('backgroundColor'))

    } else if ( $(proposition).eq(indexPrincipal).css('backgroundColor') == $(codeSecret).eq(index1).css('backgroundColor') ||
                $(proposition).eq(indexPrincipal).css('backgroundColor') == $(codeSecret).eq(index2).css('backgroundColor') ||
                $(proposition).eq(indexPrincipal).css('backgroundColor') == $(codeSecret).eq(index3).css('backgroundColor')){

        $(rondPetit).eq(indexPrincipal).css('backgroundColor', 'orange')

    } else if ( $(proposition).eq(indexPrincipal).css('backgroundColor') != $(codeSecret).eq(indexPrincipal).css('backgroundColor') &&
                $(proposition).eq(indexPrincipal).css('backgroundColor') != $(codeSecret).eq(index1).css('backgroundColor') &&
                $(proposition).eq(indexPrincipal).css('backgroundColor') != $(codeSecret).eq(index2).css('backgroundColor') &&
                $(proposition).eq(indexPrincipal).css('backgroundColor') != $(codeSecret).eq(index3).css('backgroundColor')){

        $(rondPetit).eq(indexPrincipal).css('backgroundColor', 'black')
    }
}
// quand je rajoute les parenthèses à la funtion colorRandom, il me met la même couleur
// $('.rondSecret').css('backgroundColor', colorRandom());

// console.log(colorRandom()); // Fonctionne
// console.log($('.rondSecret').eq(0).css('backgroundColor'));
// console.log($('.rondSecret').eq(1).css('backgroundColor'));
// console.log($('.rondSecret').eq(2).css('backgroundColor'));
// console.log($('.rondSecret').eq(3).css('backgroundColor'));

// console.log($('#playerName'));


// le if ne marche pas, a voir comment appliquer le text dans un input
$('#buttonGameStart').click(function(){
    if ($('#playerName').val() === ""){
        $('#resultat').css('font-size', '20px')
        $('#resultat').text('Entre ton nom dans "Player Name"')
    } else {
        $('#proposition'+ numberP +'>div').css('backgroundColor','rgb(187, 187, 187)');
        $('#proposition'+ numberP).css('backgroundColor','rgb(241, 241, 241)');
        $('#resultat').text('Game Start !')
    }
})

$('#play').click(function(){

    if ($('#proposition'+ numberP +'>div').eq(0).css('backgroundColor') == 'rgb(128, 128, 128)' ||
        $('#proposition'+ numberP +'>div').eq(1).css('backgroundColor') == 'rgb(128, 128, 128)' ||
        $('#proposition'+ numberP +'>div').eq(2).css('backgroundColor') == 'rgb(128, 128, 128)' ||
        $('#proposition'+ numberP +'>div').eq(3).css('backgroundColor') == 'rgb(128, 128, 128)'){

            $('#resultat').text('Ajoute une couleur à tout les cercles')

    } else {
        if ($('.rondSecret').eq(0).css('backgroundColor') == $('#proposition'+ numberP +'>div').eq(0).css('backgroundColor') &&
            $('.rondSecret').eq(1).css('backgroundColor') == $('#proposition'+ numberP +'>div').eq(1).css('backgroundColor') &&
            $('.rondSecret').eq(2).css('backgroundColor') == $('#proposition'+ numberP +'>div').eq(2).css('backgroundColor') &&
            $('.rondSecret').eq(3).css('backgroundColor') == $('#proposition'+ numberP +'>div').eq(3).css('backgroundColor')){

            $('#resultat').text('WIN !')
            $('#resultat').css('fontWeight','bold')
            $('#resultat').css('color','green')
            $('#cacheCodeSecret').css('opacity','0%')
            // les 4 lignes du dessous sont pas obliger pour la condition de victoire c'est un petit plus pour colorier les petit Rond de droite en vert
            verification ('.rondSecret','#proposition'+ numberP +'>div','#information'+ numberP +'>div', 0, 1, 2, 3,'#proposition'+ numberP2 +'>div');
            verification ('.rondSecret','#proposition'+ numberP +'>div','#information'+ numberP +'>div', 1, 0, 2, 3,'#proposition'+ numberP2 +'>div');
            verification ('.rondSecret','#proposition'+ numberP +'>div','#information'+ numberP +'>div', 2, 1, 0, 3,'#proposition'+ numberP2 +'>div');
            verification ('.rondSecret','#proposition'+ numberP +'>div','#information'+ numberP +'>div', 3, 1, 2, 0,'#proposition'+ numberP2 +'>div');
        } else {
            $('#resultat').text('Try Again')

            verification ('.rondSecret','#proposition'+ numberP +'>div','#information'+ numberP +'>div', 0, 1, 2, 3,'#proposition'+ numberP2 +'>div');
            verification ('.rondSecret','#proposition'+ numberP +'>div','#information'+ numberP +'>div', 1, 0, 2, 3,'#proposition'+ numberP2 +'>div');
            verification ('.rondSecret','#proposition'+ numberP +'>div','#information'+ numberP +'>div', 2, 1, 0, 3,'#proposition'+ numberP2 +'>div');
            verification ('.rondSecret','#proposition'+ numberP +'>div','#information'+ numberP +'>div', 3, 1, 2, 0,'#proposition'+ numberP2 +'>div');
            changeColor('#proposition'+ numberP +'>div',0);
            changeColor('#proposition'+ numberP +'>div',1);
            changeColor('#proposition'+ numberP +'>div',2);
            changeColor('#proposition'+ numberP +'>div',3);

            $('#proposition'+ numberP +'>div').css('border','1px solid white');
            $('#proposition'+ numberP).css('backgroundColor','#3D3D3D');

            numberP++;
            numberP2++;

            //fonctionne mais il faut changer l'ordre

            if ($('#proposition'+ numberP +'>div').eq(1).css('backgroundColor') == '#3D3D3D'){
                $('#proposition'+ numberP +'>div').eq(1).css('backgroundColor','rgb(187, 187, 187)');
            }
            $('#proposition'+ numberP).css('backgroundColor','rgb(241, 241, 241)');

        }

        if (numberP > 6){
            $('#resultat').text('You Loose')
            $('#cacheCodeSecret').css('opacity','0%')
        }
    }
    
});


$('#reset').click(function(){
    numberP = 1;
    numberP2 = 2;
    $('.rondSecret').css('backgroundColor', colorRandom);
    $('.rond').css('backgroundColor','#3D3D3D');
    $('.rond').css('border','0');
    $('.proposition').css('backgroundColor','#646464');
    $('.rondPetit').css('backgroundColor','#3D3D3D');
    $('#resultat').text('Game Start !')
    $('#resultat').css('fontWeight','initial')
    $('#resultat').css('color','#3D3D3D')
    $('#cacheCodeSecret').css('opacity','100%')
    $('#proposition'+ numberP +'>div').css('backgroundColor','rgb(187, 187, 187)');
    $('#proposition'+ numberP).css('backgroundColor','rgb(241, 241, 241)');
    
});

// enlever le cache code secret
// $('#cacheCodeSecret').css('opacity','0%');

// console.log($('.rondSecret'));
// console.log($('#cacheCodeSecret'));
// console.log($('#playerName').val());

$('.rond').click(function(){
    if ($(this).css('backgroundColor') == 'rgb(61, 61, 61)' || //gris foncé ou 
        $(this).css('backgroundColor') == 'rgb(36, 64, 106)' || //blue foncé ou
        $(this).css('backgroundColor') == 'rgb(118, 34, 34)' || //rouge foncé ou
        $(this).css('backgroundColor') == 'rgb(25, 118, 34)' || //vert foncé ou
        $(this).css('backgroundColor') == 'rgb(126, 129, 31)' || //jaune foncé ou 
        $(this).css('backgroundColor') == 'rgb(111, 32, 133)'){ //violet foncé
        $('#resultat').text('Mauvaise ligne')
    } else {
        currentIndex = $(this).data('currentIndex') || 0;
    $(this).css('backgroundColor', colors[currentIndex]);
    // console.log(colors[currentIndex]);
    currentIndex++;
    if (currentIndex >= colors.length){
        currentIndex =0;
    }
    $(this).data('currentIndex', currentIndex);

    // console.log($(this).eq(0).css('backgroundColor'));
    
    }
})