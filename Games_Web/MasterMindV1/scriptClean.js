
// essai optimisation lolo



const colors = ["red", "blue", "green", "yellow", "purple"];

// Génère aléatoirement des couleurs de la const "colors" dans le code Secret 

function colorsRandom (){
    return colors[Math.floor(Math.random() * colors.length)];
};

$('.rondSecret').css('backgroundColor', colorsRandom);

// console.log($('.rondSecret'));
// console.log($('.rondSecret').eq(1).css('backgroundColor'));
// console.log($('.rondSecret').css('backgroundColor'));

let currentIndex = 0;
console.log($('.rond').css('backgroundColor'));

$('.rond').click(function(){
    if ($(this).css('backgroundColor') == 'rgb(23, 23, 23)' || 
        $(this).css('backgroundColor') == 'rgb(39, 39, 168)' || 
        $(this).css('backgroundColor') == 'rgb(35, 94, 35)' || 
        $(this).css('backgroundColor') == 'rgb(140, 49, 49)' || 
        $(this).css('backgroundColor') == 'rgb(184, 184, 63)' || 
        $(this).css('backgroundColor') == 'rgb(70, 27, 70)'){
        $('#result').text('Mauvaise ligne')
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


let propositionNumber = 1;
$('#proposition'+ propositionNumber +'>div').css('backgroundColor','grey');

// initialiser les petit rond en noir //
$('.rondPetit').css('backgroundColor','black');

// console.log($('#indicateur1>.rondPetit').eq(0).css('backgroundColor'));
// console.log($('#indicateur1>.rondPetit'));

// configuration des reaction bouton "play" et "reset"

function changeColor (proposition, index){
    if ($(proposition).eq(index).css('backgroundColor') == 'rgb(0, 0, 255)'){
        $(proposition).eq(index).css('backgroundColor', 'rgb(39, 39, 168)')
    }else if ($(proposition).eq(index).css('backgroundColor') == 'rgb(0, 128, 0)'){
        $(proposition).eq(index).css('backgroundColor', 'rgb(35, 94, 35)')
    }else if ($(proposition).eq(index).css('backgroundColor') == 'rgb(255, 0, 0)'){
        $(proposition).eq(index).css('backgroundColor', 'rgb(140, 49, 49)')
    }else if ($(proposition).eq(index).css('backgroundColor') == 'rgb(255, 255, 0)'){
        $(proposition).eq(index).css('backgroundColor', 'rgb(184, 184, 63)')
    }else if ($(proposition).eq(index).css('backgroundColor') == 'rgb(128, 0, 128)'){
        $(proposition).eq(index).css('backgroundColor', 'rgb(70, 27, 70)')
    }
}

// console.log($('#proposition1>div'));

function verification (codeSecret, proposition, rondPetit, indexPrincipal, index1, index2, index3){
    if ($(codeSecret).eq(indexPrincipal).css('backgroundColor') == $(proposition).eq(indexPrincipal).css('backgroundColor')){

        $(rondPetit).eq(indexPrincipal).css('backgroundColor', 'green')

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

let play = document.getElementById('play');
let reset = document.getElementById('reset');



play.addEventListener('click', function (){
    if ($('#proposition'+ propositionNumber +'>div').eq(0).css('backgroundColor') == 'rgb(128, 128, 128)' ||
        $('#proposition'+ propositionNumber +'>div').eq(1).css('backgroundColor') == 'rgb(128, 128, 128)' ||
        $('#proposition'+ propositionNumber +'>div').eq(2).css('backgroundColor') == 'rgb(128, 128, 128)' ||
        $('#proposition'+ propositionNumber +'>div').eq(3).css('backgroundColor') == 'rgb(128, 128, 128)'){

            $('#result').text('Ajoute une couleur à tout les cercles')

    } else {
        if ($('.rondSecret').eq(0).css('backgroundColor') == $('#proposition'+ propositionNumber +'>div').eq(0).css('backgroundColor') &&
            $('.rondSecret').eq(1).css('backgroundColor') == $('#proposition'+ propositionNumber +'>div').eq(1).css('backgroundColor') &&
            $('.rondSecret').eq(2).css('backgroundColor') == $('#proposition'+ propositionNumber +'>div').eq(2).css('backgroundColor') &&
            $('.rondSecret').eq(3).css('backgroundColor') == $('#proposition'+ propositionNumber +'>div').eq(3).css('backgroundColor')){

            $('#result').text('Win')
            $('#codeSecretCache').css('opacity','0')
            // les 4 lignes du dessous sont pas obliger pour la condition de victoire c'est un petit plus pour colorier les petit Rond de droite en vert
            verification ('.rondSecret','#proposition'+ propositionNumber +'>div','#indicateur'+ propositionNumber +'>div', 0, 1, 2, 3);
            verification ('.rondSecret','#proposition'+ propositionNumber +'>div','#indicateur'+ propositionNumber +'>div', 1, 0, 2, 3);
            verification ('.rondSecret','#proposition'+ propositionNumber +'>div','#indicateur'+ propositionNumber +'>div', 2, 1, 0, 3);
            verification ('.rondSecret','#proposition'+ propositionNumber +'>div','#indicateur'+ propositionNumber +'>div', 3, 1, 2, 0);
        } else {
            $('#result').text('Try Again')

            verification ('.rondSecret','#proposition'+ propositionNumber +'>div','#indicateur'+ propositionNumber +'>div', 0, 1, 2, 3);
            verification ('.rondSecret','#proposition'+ propositionNumber +'>div','#indicateur'+ propositionNumber +'>div', 1, 0, 2, 3);
            verification ('.rondSecret','#proposition'+ propositionNumber +'>div','#indicateur'+ propositionNumber +'>div', 2, 1, 0, 3);
            verification ('.rondSecret','#proposition'+ propositionNumber +'>div','#indicateur'+ propositionNumber +'>div', 3, 1, 2, 0);
            changeColor('#proposition'+ propositionNumber +'>div',0);
            changeColor('#proposition'+ propositionNumber +'>div',1);
            changeColor('#proposition'+ propositionNumber +'>div',2);
            changeColor('#proposition'+ propositionNumber +'>div',3);
            propositionNumber++

            $('#proposition'+ propositionNumber +'>div').css('backgroundColor','grey');

        }

        if (propositionNumber > 6){
            $('#result').text('You Loose')
        }
    }
});

$('#reset').click(function(){
    propositionNumber = 1;
    $('.rondSecret').css('backgroundColor', colorsRandom);
    $('.rond').css('backgroundColor','rgb(23, 23, 23)');
    $('.rondPetit').css('backgroundColor','black');
    $('#result').text('Resultat')
    $('#codeSecretCache').css('opacity','100')
    $('#proposition'+ propositionNumber +'>div').css('backgroundColor','grey');
    
});






