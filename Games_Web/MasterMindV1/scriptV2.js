
// essai optimisation lolo

// permet de généré alétoirement des couleurs ... 

const colors = ["red", "blue", "green", "yellow", "purple"];
function colorsRandom (){
    return colors[Math.floor(Math.random() * colors.length)];
};

// ... sur les 4 ronds hauts

const circleName = ['rond1', 'rond2', 'rond3', 'rond4'];
circleName.forEach(function(element){
    console.log(element);
    document.getElementById(element).style.background = colorsRandom();
})

////////////////////////////  CODE OBSELETE   ////////////////////////////////////

// let circle1 = document.getElementById("rond1");
// let circle2 = document.getElementById("rond2");
// let circle3 = document.getElementById("rond3");
// let circle4 = document.getElementById("rond4");


// const circle = [circle1, circle2, circle3, circle4];

//////// UN TRUC A FAIRE AVEC ////////////////////

// const circle =  [circle1, circle2, circle3, circle4];
// for (i = 0; i < circle.length; i++) {
//     let circle[i] = document.getElementById([i]);
//     [i].style.background = colorsRandom;
// }

///////////////////////////////////////////////////

// circle.forEach(function(val, index, tabeau){
//     console.log(val);
//     val.style.background = colorsRandom();
// })


// circle1.style.backgroundColor = colorsRandom();
// circle2.style.background = colorsRandom();
// circle3.style.background = colorsRandom();
// circle4.style.background = colorsRandom();

////////////////////////////////////////////////////////////////////////////////

// Permet de changer les couleurs de toute les id click

// /!\ Au premier clique sur un rond bleu, le rond reste bleu .. a débugger plustard /!\ \\

const clickName = ['click1', 'click2', 'click3', 'click4'];
clickName.forEach(function(element){
    console.log(element);
    document.getElementById(element).addEventListener('click', function (event){
        console.log(event.target.id)
        console.log(event.target)
        if (event.target.style.backgroundColor == 'blue'){
            event.target.style.backgroundColor = 'red';
        }else if (event.target.style.backgroundColor == 'red'){
            event.target.style.backgroundColor = 'green';
        }else if (event.target.style.backgroundColor == 'green'){
            event.target.style.backgroundColor = 'yellow';
        }else if (event.target.style.backgroundColor == 'yellow'){
            event.target.style.backgroundColor = 'purple';
        }else {
            event.target.style.backgroundColor = 'blue'
        }
    });
})

////////////////////////////  CODE OBSELETE   ////////////////////////////////////

//if (click1.style.background == 'blue'){
    //         click1.style.background = 'red';
    //     }else if (click1.style.background == 'red'){
    //         click1.style.background = 'green';
    //     }else if (click1.style.background == 'green'){
    //         click1.style.background = 'yellow';
    //     }else if (click1.style.background == 'yellow'){
    //         click1.style.background = 'purple';
    //     }else if (click1.style.background == 'purple'){
    //         click1.style.background = 'blue';

////////////////////////////////////////////////////////////////////////////////////

// configuration des reaction bouton "play" et "reset"

let play = document.getElementById('play');
let reset = document.getElementById('reset');

play.addEventListener('click', function (){
    
})







// ancienne version






// const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
// const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
// const randomColor3 = colors[Math.floor(Math.random() * colors.length)];
// const randomColor4 = colors[Math.floor(Math.random() * colors.length)];

// let circle1 = document.getElementById("rond1");
// let circle2 = document.getElementById("rond2");
// let circle3 = document.getElementById("rond3");
// let circle4 = document.getElementById("rond4");
// // circle.classList.add("circle");
// circle1.style.background = randomColor1;
// circle2.style.background = randomColor2;
// circle3.style.background = randomColor3;
// circle4.style.background = randomColor4;

// console.log(randomColor1);
// console.log(randomColor2);
// console.log(randomColor3);
// console.log(randomColor4);


// let click1 = document.getElementById("click1");
// let click2 = document.getElementById("click2");
// let click3 = document.getElementById("click3");
// let click4 = document.getElementById("click4");

// click1.style.background = 'blue';
// click2.style.background = 'blue';
// click3.style.background = 'blue';
// click4.style.background = 'blue';

// click1.addEventListener ('click', function () {
//     if (click1.style.background == 'blue'){
//         click1.style.background = 'red';
//     }else if (click1.style.background == 'red'){
//         click1.style.background = 'green';
//     }else if (click1.style.background == 'green'){
//         click1.style.background = 'yellow';
//     }else if (click1.style.background == 'yellow'){
//         click1.style.background = 'purple';
//     }else if (click1.style.background == 'purple'){
//         click1.style.background = 'blue';
//     }
// })

// // changer tout les click1 en click2
// click2.addEventListener ('click', function () {
//     if (click2.style.background == 'blue'){
//         click2.style.background = 'red';
//     }else if (click2.style.background == 'red'){
//         click2.style.background = 'green';
//     }else if (click2.style.background == 'green'){
//         click2.style.background = 'yellow';
//     }else if (click2.style.background == 'yellow'){
//         click2.style.background = 'purple';
//     }else if (click2.style.background == 'purple'){
//         click2.style.background = 'blue';
//     }
// })

// // changer tout les click1 en click3
// click3.addEventListener ('click', function () {
//     if (click3.style.background == 'blue'){
//         click3.style.background = 'red';
//     }else if (click3.style.background == 'red'){
//         click3.style.background = 'green';
//     }else if (click3.style.background == 'green'){
//         click3.style.background = 'yellow';
//     }else if (click3.style.background == 'yellow'){
//         click3.style.background = 'purple';
//     }else if (click3.style.background == 'purple'){
//         click3.style.background = 'blue';
//     }
// })

// // changer tout les click1 en click4
// click4.addEventListener ('click', function () {
//     if (click4.style.background == 'blue'){
//         click4.style.background = 'red';
//     }else if (click4.style.background == 'red'){
//         click4.style.background = 'green';
//     }else if (click4.style.background == 'green'){
//         click4.style.background = 'yellow';
//     }else if (click4.style.background == 'yellow'){
//         click4.style.background = 'purple';
//     }else if (click4.style.background == 'purple'){
//         click4.style.background = 'blue';
//     }
// })


// /***********        1ER ESSAI DEFAILLANT       ********* */


// // let rond1 = document.getElementById('rond1');
// // let rond2 = document.getElementById('rond2');
// // let rond3 = document.getElementById('rond3');
// // let rond4 = document.getElementById('rond4');

// // click1.style.backgroundColor = 'red';

// // let click1 = document.getElementById('click1');

// // let rondClasse = document.getElementsByClassName('rond');

// // console.log(click1);
// // console.log(rondClasse);

// // click1.addEventListener ('click', function (){
// //     if (click1.style.backgroundColor == 'blue'){
// //         click1.style.backgroundColor = 'red';
// //     }else if (click1.style.backgroundColor == 'red'){
// //         click1.style.backgroundColor = 'blue';
// //     }
// // })

// // function getRandomColor() {
// //     var colors = ["red", "blue", "green", "yellow", "purple"];
// //     var randomColor = colors[Math.floor(Math.random() * colors.length)];
// //     return randomColor;
// // }


