window.onload = function(){
alert("connected");
var wraped_text = document.querySelectorAll(".advantage-card__text");
var hovered_title = document.querySelectorAll(".advantage-card__title");
for(var i = 0; i<hovered_title.length; i++){
    hovered_title[i].addEventListener("mouseover", function(){
        for(var j = 0; j<wraped_text.length; j++){
            var a = wraped_text[j];
            a.toggleClass("invisible")
            
        }
    });


}



}
