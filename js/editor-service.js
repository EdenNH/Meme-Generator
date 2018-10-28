'use strict'

//notice we did not add "delete lines" because everything can be deleted live from the editor

var gStartTextX = 50;

function setTextAlign(value) {
    gCurrMemeData.textalign = value;
    gCtx.textAlign = value;
    if (value === 'center') { gStartTextX = canvas.width / 2 }
    else if (value === 'right') { gStartTextX = canvas.width - 50 }
    else if (value === 'left') { gStartTextX = 50 }
}

var gFontSize = '20px';

function makeShadow () {
    gCtx.shadowOffsetX = 8;
    gCtx.shadowOffsetX = 8;
    gCtx.shadowBlur = 4;
    gCtx.shadowColor = "rgba(0,0,0,0.6)"
}


function cancelShadow () {
    gCtx.shadowOffsetX = 0;
    gCtx.shadowOffsetX = 0;
    gCtx.shadowBlur = 0;
}