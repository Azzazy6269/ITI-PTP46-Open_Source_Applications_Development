//prevent right click menu for whole the page
document.addEventListener("contextmenu",function(event){
    event.preventDefault();
});
//textbox with buttons
let body = document.body;

let div = document.createElement("div");
let textbox = document.createElement("textarea");
let button = document.createElement("button");

button.textContent = "start clock";

div.appendChild(textbox);
div.appendChild(button);
body.appendChild(div);

button.style.color = "white";
button.style.backgroundColor = "red";
textbox.style.backgroundColor = "grey";
textbox.style.color = "white";
div.style.display ="flex";
div.style.padding ="25px";
div.style.width="100%";
textbox.addEventListener("click",function(event){
    let click = event.button;
    switch(click){
    case 0:
        click ="left";
        break;
    case 1:
        click ="middle";
        break;
    case 2:
        click = "right";
        break;
    }
    event.stopPropagation();
    alert(`${click} click on the textbox`); 
});

textbox.addEventListener("keydown", function (event) {
    event.stopPropagation();
    if (event.key >= '0' && event.key <= '9') {
        alert("numbers can't be written");
        event.preventDefault();
    } else {
        alert(`${event.key} was pressed`);
    }
});

let clockdiv =null;
let timer =null;
button.addEventListener("click",function(event){
    event.stopPropagation();
    clockdiv = document.createElement("div");
    body.appendChild(clockdiv);
    alert(`Clock started`);
    timer = setInterval(function(){
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        clockdiv.textContent = `hours: ${hours} , minutes: ${minutes} , seconds: ${seconds}`;
    },1000)
});

window.addEventListener("keydown",function(event){
    event.stopPropagation();
    if(event.key.toLowerCase()=='w'){
        clearInterval(timer);
        timer = null;
        clockdiv.remove();

        this.alert("clock was removed");
    }
});

//gallery with buttons
let gallerydiv = document.createElement("div");
let galleryimg = document.createElement("img");
let galleryPrev = document.createElement("button");
let galleryNext = document.createElement("button");
galleryNext.textContent = "next";
galleryPrev.textContent = "previous";
document.body.appendChild(gallerydiv);
gallerydiv.appendChild(galleryPrev);
gallerydiv.appendChild(galleryimg);
gallerydiv.appendChild(galleryNext);
galleryimg.src="images/orange.png";
galleryimg.style.width ="500px";
gallerydiv.style.display = "flex";
gallerydiv.style.padding ="25px";
galleryPrev.style.width="60px";
galleryNext.style.width="60px";
galleryNext.style.alignContent ="center";
galleryPrev.style.alignContent ="center";
let imgIndex =0;
let imgArr = [
    "images/orange.png",
    "images/grapes.png",
    "images/gauva.png",
    "images/dish.png",
]
galleryPrev.addEventListener("click",function(){
    imgIndex--;
    if(imgIndex<0)
        imgIndex=imgArr.length-1;
    galleryimg.src=imgArr[imgIndex];
    galleryimg.style.width ="500px";
});
galleryNext.addEventListener("click",function(){
    imgIndex++;
    if(imgIndex>imgArr.length-1)
        imgIndex=0;
    galleryimg.src=imgArr[imgIndex];
    galleryimg.style.width ="500px";

});




//gallery in row
let gallerydiv2 = document.createElement("div");
document.body.appendChild(gallerydiv2);
gallerydiv2.style.display = "flex";
gallerydiv2.style.padding ="25px";
gallerydiv2.style.margin ="25px";
gallerydiv2.style.alignContent ="center";
gallerydiv2.style.backgroundColor ="black";
gallerydiv2.style.borderRadius="1000px";
let imgIndex2 =0;
let imgArr2 = [
    "images/orange.png",
    "images/grapes.png",
    "images/gauva.png",
    "images/dish.png",
]
let img=[];
for(let i=0;i<imgArr2.length;i++){
    img[i] =document.createElement("img");
    img[i].src=imgArr2[i];
    gallerydiv2.append(img[i]);
    img[i].style.width ="20%";
    img[i].style.paddingRight="5%";
    img[i].style.opacity="0.7";
}
img[0].addEventListener("mouseenter",function(){
    img[0].style.opacity="1";
});
img[0].addEventListener("mouseleave",function(){
    img[0].style.opacity="0.7";
});
img[1].addEventListener("mouseenter",function(){
    img[1].style.opacity="1";
});
img[1].addEventListener("mouseleave",function(){
    img[1].style.opacity="0.7";
});
img[2].addEventListener("mouseenter",function(){
    img[2].style.opacity="1";
});
img[2].addEventListener("mouseleave",function(){
    img[2].style.opacity="0.7";
});
img[3].addEventListener("mouseenter",function(){
    img[3].style.opacity="1";
});
img[3].addEventListener("mouseleave",function(){
    img[3].style.opacity="0.7";
});





