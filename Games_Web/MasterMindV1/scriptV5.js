
// essai optimisation lolo



const colors = ["red", "blue", "green", "yellow", "purple"];

// Génère aléatoirement des couleurs de la const "colors" dans le code Secret 

function colorsRandom (){
    return colors[Math.floor(Math.random() * colors.length)];
};

$('.rondSecret').css('backgroundColor', colorsRandom);

console.log($('.rondSecret'));
console.log($('.rondSecret').eq(1).css('backgroundColor'));
console.log($('.rondSecret').css('backgroundColor'));

// let rondPetits = document.querySelector('#essai1>div:last-child');
// console.log(rondPetits);
// console.log(typeof rondPetits);
// console.log(rondPetits.length);
// console.log(rondPetits[1]);
// console.log(rondPetits[1]);

// const rondPetitElements = document.querySelectorAll('#essai1 .rondPetit');
// console.log(rondPetitElements);
// const rondPetitArray = Array.from(rondPetitElements);
// console.log(rondPetitArray);

let currentIndex = 0;
console.log($('.rond'));

$('.rond').click(function(){
    currentIndex = $(this).data('currentIndex') || 0;
    $(this).css('backgroundColor', colors[currentIndex]);
    console.log(colors[currentIndex]);
    currentIndex++;
    if (currentIndex >= colors.length){
        currentIndex =0;
    }
    $(this).data('currentIndex', currentIndex);

    console.log($(this).eq(0).css('backgroundColor'));
    
    
})




// $('#indicateur1>div').eq(0).click(function(){
//     $('#indicateur1>div').eq(0).css('backgroundColor', 'black')
// })

$('.rondPetit').css('backgroundColor','black');

console.log($('#indicateur1>.rondPetit').eq(0).css('backgroundColor'));
console.log($('#indicateur1>.rondPetit'));

// configuration des reaction bouton "play" et "reset"

// function verification (element1, element2, element3){
//     if (element1 == element3[0]){
//         element2 = 'green';
//     }else if (element1 == element3[1] || element1 == element3[2] || element1 == element3[3]){
//         element2 = 'orange';
//     }else {
//         element2 = 'red';
//     }
// };

console.log($('#proposition1>div'));

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
    if ($('.rondSecret').eq(0).css('backgroundColor') == $('#proposition1>div').eq(0).css('backgroundColor') &&
        $('.rondSecret').eq(1).css('backgroundColor') == $('#proposition1>div').eq(1).css('backgroundColor') &&
        $('.rondSecret').eq(2).css('backgroundColor') == $('#proposition1>div').eq(2).css('backgroundColor') &&
        $('.rondSecret').eq(3).css('backgroundColor') == $('#proposition1>div').eq(3).css('backgroundColor')){

            $('#result').text('Win')
            // les 4 lignes du dessous sont pas obliger pour la condition de victoire c'est un petit plus pour colorier les petit Rond de droite en vert
            verification ('.rondSecret','#proposition1>div','#indicateur1>div', 0, 1, 2, 3);
            verification ('.rondSecret','#proposition1>div','#indicateur1>div', 1, 0, 2, 3);
            verification ('.rondSecret','#proposition1>div','#indicateur1>div', 2, 1, 0, 3);
            verification ('.rondSecret','#proposition1>div','#indicateur1>div', 3, 1, 2, 0);
    } else {
            $('#result').text('Try Again')

            verification ('.rondSecret','#proposition1>div','#indicateur1>div', 0, 1, 2, 3);
            verification ('.rondSecret','#proposition1>div','#indicateur1>div', 1, 0, 2, 3);
            verification ('.rondSecret','#proposition1>div','#indicateur1>div', 2, 1, 0, 3);
            verification ('.rondSecret','#proposition1>div','#indicateur1>div', 3, 1, 2, 0);
    }
    

    // verification(rond1);
//     if ($('.rondSecret').eq(0).css('backgroundColor') == $('#proposition1>div').eq(0).css('backgroundColor') &&
//         $('.rondSecret').eq(1).css('backgroundColor') == $('#proposition1>div').eq(1).css('backgroundColor') &&
//         $('.rondSecret').eq(2).css('backgroundColor') == $('#proposition1>div').eq(2).css('backgroundColor') &&
//         $('.rondSecret').eq(3).css('backgroundColor') == $('#proposition1>div').eq(3).css('backgroundColor')){
            
//             $('#result').text('Win')

//     } else {

//         $('#result').text('Try Again')


//         if($('#proposition1>div').eq(0).css('backgroundColor') == $('.rondSecret').eq(1).css('backgroundColor') ||
//         $('#proposition1>div').eq(0).css('backgroundColor') == $('.rondSecret').eq(2).css('backgroundColor') ||
//         $('#proposition1>div').eq(0).css('backgroundColor') == $('.rondSecret').eq(3).css('backgroundColor')){

//             $('#indicateur1>div').eq(0).css('backgroundColor', 'orange')

//         }if($('#proposition1>div').eq(1).css('backgroundColor') == $('.rondSecret').eq(0).css('backgroundColor') ||
//         $('#proposition1>div').eq(1).css('backgroundColor') == $('.rondSecret').eq(2).css('backgroundColor') ||
//         $('#proposition1>div').eq(1).css('backgroundColor') == $('.rondSecret').eq(3).css('backgroundColor')){

//             $('#indicateur1>div').eq(1).css('backgroundColor', 'orange')

//         }if($('#proposition1>div').eq(2).css('backgroundColor') == $('.rondSecret').eq(1).css('backgroundColor') ||
//         $('#proposition1>div').eq(2).css('backgroundColor') == $('.rondSecret').eq(0).css('backgroundColor') ||
//         $('#proposition1>div').eq(2).css('backgroundColor') == $('.rondSecret').eq(3).css('backgroundColor')){

//             $('#indicateur1>div').eq(2).css('backgroundColor', 'orange')
    
//         }if($('#proposition1>div').eq(3).css('backgroundColor') == $('.rondSecret').eq(1).css('backgroundColor') ||
//         $('#proposition1>div').eq(3).css('backgroundColor') == $('.rondSecret').eq(2).css('backgroundColor') ||
//         $('#proposition1>div').eq(3).css('backgroundColor') == $('.rondSecret').eq(0).css('backgroundColor')){

//             $('#indicateur1>div').eq(3).css('backgroundColor', 'orange')
            
//         } 
// ///////////////////////////////


//         if($('.rondSecret').eq(0).css('backgroundColor') == $('#proposition1>div').eq(0).css('backgroundColor')){

//             $('#indicateur1>div').eq(0).css('backgroundColor', 'green')
    
//         }if($('.rondSecret').eq(1).css('backgroundColor') == $('#proposition1>div').eq(1).css('backgroundColor')){
    
//             $('#indicateur1>div').eq(1).css('backgroundColor', 'green')
    
//         }if($('.rondSecret').eq(2).css('backgroundColor') == $('#proposition1>div').eq(2).css('backgroundColor')){
    
//             $('#indicateur1>div').eq(2).css('backgroundColor', 'green')
    
//         }if($('.rondSecret').eq(3).css('backgroundColor') == $('#proposition1>div').eq(3).css('backgroundColor')){
    
//             $('#indicateur1>div').eq(3).css('backgroundColor', 'green')
    
//         }
// ////////////////////////////


//         if($('.rondSecret').eq(0).css('backgroundColor') != $('#proposition1>div').eq(0).css('backgroundColor')){

//             $('#indicateur1>div').eq(0).css('backgroundColor', 'black')

//         }if($('.rondSecret').eq(1).css('backgroundColor') != $('#proposition1>div').eq(1).css('backgroundColor')){

//             $('#indicateur1>div').eq(1).css('backgroundColor', 'black')

//         }if($('.rondSecret').eq(2).css('backgroundColor') != $('#proposition1>div').eq(2).css('backgroundColor')){

//             $('#indicateur1>div').eq(2).css('backgroundColor', 'black')

//         }if($('.rondSecret').eq(3).css('backgroundColor') != $('#proposition1>div').eq(3).css('backgroundColor')){

//             $('#indicateur1>div').eq(3).css('backgroundColor', 'black')

//         }




//     }   

    // $('#result').text('Fail')
})







