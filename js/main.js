'use strict'

//controller for eventhandlers and comm with the DOM

const CENTER = ''
var gCanvas;
var gCtx;
var gCurrMemeData = {
    txt1: '',
    txt2: '',
    txt3: '',
    textcolor: 'white',
    textalign: 'center',
    textsize: 50,
    textfont: 'Impact',
    elImage: ''
};

function init() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    gCtx.fillStyle = 'lightgray';
    gCtx.strokeStyle = 'white';
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
    createImages()
    renderImages();
}

function renderImages() {
    var strHtml = `<ul>`
    gImages.forEach(function (img) {
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

function setColor(color) {
    gCtx.strokeStyle = color;
    gCurrMemeData.textcolor = color;
    updateCanvas();
}

function clearCanvas() {
    gCtx = null;
    gCtx = gCanvas.getContext('2d');
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    gCtx.fillStyle = 'lightgray';
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
    gPosRec = null;
}

function saveCanvas(elLink) {
    elLink.href = canvas.toDataURL()
    elLink.download = 'my-canvas.jpg'
}

function firstMemeText(txt) {
    gCurrMemeData.txt1 = txt
    updateCanvas()
}

function secondMemeText(txt) {
    gCurrMemeData.txt2 = txt
    updateCanvas()
}

function extraMemeText(txt) {
    gCurrMemeData.txt3 = txt
    updateCanvas()
}

function changeFontSize(sign) {
    if (sign === 'minus') { gCurrMemeData.textsize += -4 }
    else if (sign === 'plus') { gCurrMemeData.textsize += 4 }
    updateCanvas();
}

function searchImagesByDesc(txt) {
  gSuitableImages = filterImages(txt);
  if (!txt) {renderImages()}
  if (gSuitableImages.length >= 1) {updateGallery();}
}

function onTextShadowToggle() {
    if (!gCurrMemeData.shadowOn) {
        gCurrMemeData.shadowOn = true;
        makeShadow();
        updateCanvas();
    }
    else {
        gCurrMemeData.shadowOn = false;
        cancelShadow();
        updateCanvas();
    }
}

function onChooseAlign(value) {
    var allBtns = document.querySelectorAll('.txt-align')
    for (let i = 0; i < allBtns.length; i++) {
        allBtns[i].classList.remove('active')
    }
    var elBtn = document.querySelector(`.${value}`)
    elBtn.classList.add('active')
    elBtn.classList.add('active')
    setTextAlign(value);
    updateCanvas();
}

function showGallery() {
    var editor = document.querySelector('.editor-with-canvas')
    editor.style.display = 'none';
    var gallery = document.querySelector('.images-library')
    gallery.style.display = 'block';
}

function setFontFamily(font) {
    gCurrMemeData.textfont = font;
    updateCanvas()
}

function onChooseKeyword (keyword) {
    //debugger
searchImagesByDesc(keyword);
}


function moveTextRightOrLeft(sign) {
    if (sign === 'left') { gStartTextX += -10}
    else if (sign === 'right') {gStartTextX += +10}
    updateCanvas()
}

function moveTextUpOrDown(sign) {
    if (sign === 'down') {gStartTxt1Y += +10, gStartTxt2Y += +10, gStartTxt3Y += +10}
    else if (sign === 'up') {gStartTxt1Y += -10, gStartTxt2Y += -10, gStartTxt3Y += -10}
    updateCanvas();
}

var gStartTxt1Y = 60;
var gStartTxt2Y = 210;
var gStartTxt3Y = 370; 

function updateCanvas() {
    gCtx.drawImage(gCurrMemeData.elImage, 0, 0, canvas.width, canvas.height);
    gCtx.fillStyle = gCurrMemeData.textcolor;
    var textProperties = gCurrMemeData.textsize + 'px ' + gCurrMemeData.textfont;
    gCtx.font = textProperties;
    gCtx.fillText(gCurrMemeData.txt1, gStartTextX, gStartTxt1Y);
    gCtx.fillText(gCurrMemeData.txt2, gStartTextX, gStartTxt3Y);
    gCtx.fillText(gCurrMemeData.txt3, gStartTextX, gStartTxt2Y);
}
