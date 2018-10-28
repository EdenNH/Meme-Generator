'use strict'

//model - CRUDL for gImages

var gImages = [];
var gSuitableImages = [];

function createImg (src, desc) {
   var imageObj =  createImageObj (src,desc );
   gImages.push(imageObj);
}

function createImageObj (src, desc) {
    var id = makeId();
    return {id , src , desc}
}

function getImgidxById(imgId) {
    var imgIdx = gImages.findIndex(function (img) {
        return imgId === img.id;
    })
    return imgIdx;

};

function onclickImg(img) {
    var editor = document.querySelector('.editor-with-canvas')
    editor.style.display = 'flex';
    var gallery = document.querySelector('.images-library')
    gallery.style.display = 'none';
    gCurrMemeData.elImage = img;
    var canvas = document.getElementById("canvas");
    gCtx = canvas.getContext("2d");
    gCtx.drawImage(img, 0, 0, canvas.width, canvas.height)

}

function drawImage() {
    var img = new Image()
    img.src = 'img/1.jpg'
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
}

function filterImages(txt) {
   var gSuitableImages = gImages.filter(function (img) {
        // return txt.toLowerCase() === img.desc.toLowerCase()
        return img.desc.toLowerCase().includes(txt.toLowerCase())

    });
    return gSuitableImages
}

function updateGallery() {
    var strHtml = `<ul>`
    gSuitableImages.forEach(function (img) {
        strHtml += `   
     <div class="wrap"> <div class="crop"> <li> <img class="img" src="${img.src}" 
    onclick="onclickImg(this, '${img.id}')"></li> </div> </div> 
     ` ;
    })
    strHtml += ` 
    </div> </ul> `

    var elImages = document.querySelector('.images-cards')
    elImages.innerHTML = strHtml;
}

function createImages () {
    createImg('img/1.jpg', 'Dancing with no fucks given')
    createImg('img/3.jpg', 'Cute dogs')
    createImg('img/4.jpg', 'Baby and dog sleeping')
    createImg('img/5.jpg', 'punch baby')
    createImg('img/6.jpg', 'sleeping keyboard cat')
    createImg('img/7.jpg', 'Toy story Woodie')
    createImg('img/8.jpg', 'smug top hat')
    createImg('img/9.jpg', 'hehehe mean baby')
    createImg('img/10.jpg', 'putin president politics')
    createImg('img/11.jpg', 'star trek captain piccard')
    createImg('img/12.jpg', 'haim hecht חיים הכט what would you do? מה אתה היית עושה?')
    createImg('img/13.jpg', 'precise man moustach')
    createImg('img/14.jpg', 'leonardo dicaprio leo cheers happy')
    createImg('img/15.jpg', 'aliens man')
    createImg('img/16.jpg', 'dr evil austin powers')
    createImg('img/17.jpg', 'Dancing baby in Africa')
    createImg('img/18.jpg', 'Trump finger')
    createImg('img/19.jpg', 'yelling crazy eyes dude')
    createImg('img/20.jpg', 'surprised caught baby')
    createImg('img/21.jpg', 'stretching dog')
    createImg('img/22.jpg', 'Obama laughing how cute')
    createImg('img/23.jpg', 'boxers men')
    createImg('img/24.jpg', 'Oprah: you get a car!')
}

