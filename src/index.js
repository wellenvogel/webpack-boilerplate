import css from '../style/style.css';
import other from '../style/style.less'
import HandleBars from 'handlebars';
console.log("Hello");

let template='<div class="main1"><span class="text">{{string1}}</span></div>';

window.onload=()=>{
    let compiledTemplate=HandleBars.compile(template);
    let e=document.getElementById("main");
    if (e) e.innerHTML=compiledTemplate({string1:'HandleBars App'});
}