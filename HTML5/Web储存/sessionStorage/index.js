/**
 * Created by Svend on 16-9-11.
 */
var ta, btn;

window.onload = function () {
    ta = document.getElementById("ta");
    if(sessionStorage.text){
        ta.value = sessionStorage.text;
    }
    btn = document.getElementById("btn");
    btn.onclick = function () {
        sessionStorage.text = ta.value;
    };
};