// aby existovaly prazdne promenne
var modtitle="";
var bug2clip="";

// az se nahraji vsechny class navbar-brand pridej id 'mantis-title' k prvni z nich
document.getElementsByClassName('navbar-brand').onload = function(){
  document.getElementsByClassName('navbar-brand')[0].id='mantis-title';
  var modtitle=document.getElementById('mantis-title');
  // a zkus zmenu nadpisu
  newtitle();
}
// az se nahraji vsechny class bug-id pridej id 'bug-index' k druhe z nich
document.getElementsByClassName('bug-id').onload=function(){
  document.getElementsByClassName('bug-id')[0].id='bug-index';
  var bug2clip=document.getElementById('bug-index');
  //a zkus zmenu nadpisu
  newtitle();
}
// pokud uz ID prvku mantis-title a zaroven bug-id ma hodnotu...
function newtitle(){
  // ...vyrob nove html do nadpisu i s javascriptem pro clipboard
  if (modtitle.length > 0 && bug2clip.length > 0) {
    modtitle.outerHTML=modtitle.outerHTML + '<span id="copy2clip" class="navbar-brand">['+bug2clip.innerText+']</span>';
    copy2clip.onclick=function() {navigator.clipboard.writeText(bug2clip.innerText);}
  }
  // debug
  else {
    document.getElementsByClassName('navbar-brand')[0].innerText="nothing there";
  }
}
