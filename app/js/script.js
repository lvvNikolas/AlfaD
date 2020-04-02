window.onload = function(){

this.servisecAnim();
//this.advantagesAnim();
}
// services animation 
function servisecAnim(){
var a = document.querySelectorAll(".card-item");
var b = document.querySelectorAll(".services-img-container__img-content");
var defaultpos = [29, 26, 23, 20];
for (var i = 0; i < a.length; i++) {    
    a[i].addEventListener('mouseenter', ((j) => {         
    return function() {
    var newPosition = defaultpos[j] + 20;
    b[j].style.bottom =String(newPosition) + '%';
    }
  })(i))
  a[i].addEventListener('mouseleave', ((j) => {         
    return function() {
    b[j].style.bottom =String(defaultpos[j]) + '%';
    }
  })(i))
}
}
 // advantages animaton
// function advantagesAnim(){  
//     var advCard = document.querySelectorAll(".advantage-card");
//     var advCardText = document.querySelectorAll(".advantage-card__text");
//     for(var i = 0; i < advCard.length; i++){
//         advCardText[i] = 
//         advCard[i].addEventListener('click', ((j) => {         
//             return function() {
//            
//         }
//        
//         })(i))          
//        }  
// }
