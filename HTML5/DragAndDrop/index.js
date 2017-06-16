/**
 * Created by Svend on 16-9-10.
 */

var box1Div, msgDiv, img1, box2Div;

window.onload = function () {
    box1Div = document.getElementById("box1");
    box2Div = document.getElementById("box2");

    msgDiv = document.getElementById("msgDiv");
    img1 = document.getElementById("img1");

    // box1Div.ondragenter = function (e) {
    //     showObj(e);
    // }
    box1Div.ondragover = function (e) {
        e.preventDefault();
    };
    box2Div.ondragover = function (e) {
        e.preventDefault();
    };
    img1.ondragstart = function (e) {
        e.dataTransfer.setData("imgId", "img1");
    };
    box1Div.ondrop = function (e) {
        dropImgHandler(e);
    };
    box2Div.ondrop = function (e) {
        dropImgHandler(e);
    };
};

function dropImgHandler(e) {
    showObj(e.dataTransfer);
    e.preventDefault();
    var img = document.getElementById(e.dataTransfer.getData("imgId"));
    e.target.appendChild(img);
}

function showObj(obj) {
    var s = "";
    for (var k in obj) {
        s += k + ":" + obj[k] + "<br>";
    }
    msgDiv.innerHTML = s;
}