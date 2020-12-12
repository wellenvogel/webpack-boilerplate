import css from '../style/style.css';
import other from '../style/style.less'
import HandleBars from 'handlebars';
import template from '../templates/start1.hb'
console.log("Hello");

let template2='<div class="secondRow">{{text}}</div>';

window.onload=()=>{
    let compiled2=HandleBars.compile(template2);
    let e=document.getElementById("main");
    if (e) e.innerHTML=template({string1:'HandleBars App'})+compiled2({text:"SecondRow with dangerous  <span/>"});
}