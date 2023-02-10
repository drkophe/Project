
// essai optimisation lolo

// permet de généré alétoirement des couleurs ... 

const colors = ["red", "blue", "green", "yellow", "purple"];
function colorsRandom (){
    return colors[Math.floor(Math.random() * colors.length)];
};

$('.rondSecret').css('backgroundColor', colorsRandom);

// ... sur les 4 ronds hauts

// const circleName = ['rond1', 'rond2', 'rond3', 'rond4'];
// circleName.forEach(function(element){
//     console.log(element);
//     document.getElementById(element).style.background = colorsRandom();
// })

// let rondPetits = document.querySelector('#essai1>div:last-child');
// console.log(rondPetits);
// console.log(typeof rondPetits);
// console.log(rondPetits.length);
// console.log(rondPetits[1]);
// console.log(rondPetits[1]);

const rondPetitElements = document.querySelectorAll('#essai1 .rondPetit');
console.log(rondPetitElements);
const rondPetitArray = Array.from(rondPetitElements);
console.log(rondPetitArray);

// let rondPetitsTab = [];
// for (i=0 ; i < rondPetits.length ; i++){
//     rondPetitsTab.push(rondPetits.item(i));
// }
// console.log(rondPetitsTab);



// Permet de changer les couleurs de toute les id click

// /!\ Au premier clique sur un rond bleu, le rond reste bleu .. a débugger plustard /!\ \\

const clickName = ['click1', 'click2', 'click3', 'click4'];

// let click = 

// clickName.forEach(function(element){
//     console.log(element);
//     document.getElementById(element).addEventListener('click', function (event){
//         console.log(event.target.id)
//         console.log(event.target)
//         if (event.target.style.backgroundColor == 'blue'){
//             event.target.style.backgroundColor = 'red';
//         }else if (event.target.style.backgroundColor == 'red'){
//             event.target.style.backgroundColor = 'green';
//         }else if (event.target.style.backgroundColor == 'green'){
//             event.target.style.backgroundColor = 'yellow';
//         }else if (event.target.style.backgroundColor == 'yellow'){
//             event.target.style.backgroundColor = 'purple';
//         }else {
//             event.target.style.backgroundColor = 'blue'
//         }
//     });
// })





/////////////////////////////////////////

// console.log(Math.floor(Math.random()));

// let r = Math.floor(Math.random()*256); 
// let g = Math.floor(Math.random()*256);
// let b = Math.floor(Math.random()*256);

// console.log(r);
// console.log(g);
// console.log(b);

// console.log('rgb(' + r + ',' + g + ',' + b + ')')

// function colorFunction (){
//     return colors[i++];
// };

// let colorRandomRGB = 'rgb(' + r + ',' + g + ',' + b + ')';

// console.log(colorRandomRGB);

let currentIndex = 0;

$('.rond').click(function(){
    currentIndex = $(this).data('currentIndex') || 0;
    $(this).css('backgroundColor', colors[currentIndex]);
    console.log(colors[currentIndex]);
    currentIndex++;
    if (currentIndex >= colors.length){
        currentIndex =0;
    }
    $(this).data('currentIndex', currentIndex);

})

console.log($('.rond'));

// let rond = $('.rond').items(1);




// console.log(rond);
///////////////////////////////////







////////////////////////////////////////
//// TRUC A FAIRE ///////////////

// const rond = [];
// $('.rond').

// rond.forEach(function(element, index){
//     $('.rond').click(function(){
//         console.log(element);
//         console.log(index);
//         // if ($('.rond').css('backgroundColor', 'blue')){
//         //     $('.rond').css('backgroundColor', 'red');
//         // }else if (event.target.style.backgroundColor == 'red'){
//         //     event.target.style.backgroundColor = 'green';
//         // }else if (event.target.style.backgroundColor == 'green'){
//         //     event.target.style.backgroundColor = 'yellow';
//         // }else if (event.target.style.backgroundColor == 'yellow'){
//         //     event.target.style.backgroundColor = 'purple';
//         // }else {
//         //     event.target.style.backgroundColor = 'blue'
//         // }
//     })
// })

// $('.rondSecret').css('backgroundColor', colorsRandom);

/////////////////////////////////////

// configuration des reaction bouton "play" et "reset"

function verification (element1, element2, element3){
    if (element1 == element3[0]){
        element2 = 'green';
    }else if (element1 == element3[1] || element1 == element3[2] || element1 == element3[3]){
        element2 = 'orange';
    }else {
        element2 = 'red';
    }
};




let play = document.getElementById('play');
let reset = document.getElementById('reset');

play.addEventListener('click', function (){
    verification(rond1);
})







