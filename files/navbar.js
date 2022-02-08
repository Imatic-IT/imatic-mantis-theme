// aby existovaly prazdne promenne
var modtitle="nothing";
var bug2clip="nothing";

document.body.onload = newtitle();

function newtitle(){
  // az se nahraje body pridej id 'mantis-title' k prvni z classes navbar-brand, 'bug-index' k druhe z classes bug-id
  document.getElementsByClassName('navbar-brand')[0].id='mantis-title';
  var modtitle=document.getElementById('mantis-title');
  document.getElementsByClassName('bug-id')[1].id='bug-index';
  var bug2clip=document.getElementById('bug-index');
  //...vyrob nove html do nadpisu 
  modtitle.outerHTML+='<span id="copy2clip" class="navbar-brand">['+bug2clip.innerText+']</span>';
  // klik na nadpis = javascript copy bug-index text to clipboard
  copy2clip.onclick=function() {navigator.clipboard.writeText(bug2clip.innerText);}
}
