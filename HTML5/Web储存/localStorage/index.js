/**
 * Created by Svend on 16-9-11.
 */
var ta, btn;

window.onload = function () {
    ta = document.getElementById("ta");
    if(localStorage.text){
        ta.value = localStorage.text;
    }
    btn = document.getElementById("btn");
    btn.onclick = function () {
        localStorage.text = ta.value;
    };
};