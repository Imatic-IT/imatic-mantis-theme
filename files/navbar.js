//tady si vylovim vsechny prvky z danych class, jinej DOM identifikator nemam. nez seznam class names a jejich poradi. 
var gettitle= document.getElementsByClassName('navbar-brand');
var getbugid= document.getElementsByClassName('bug-id');
//tady si je pojmenuju. to proto, ze pokud muzes pridat do templejtu stranky aby byla ID u spravnych tagu, vynechaji se tyto prvni 4 radky a zbytek bude dal fungovat elegantneji.
gettitle[0].id="mantis-title";
getbugid[1].id="bug-index";
// no a ted kdyz uz mam jednoznacny ID tak tady prepisu titulek na "titulek + cislo + javascript" na onclick na nej. 
var modtitle=document.getElementById('mantis-title');
var bug2clip=document.getElementById('bug-index');
modtitle.outerHTML=modtitle.outerHTML + '<span id="copy2clip" class="navbar-brand">['+bug2clip.innerText+']</span>';
copy2clip.onclick=function() {
  navigator.clipboard.writeText(bug2clip.innerText);
}
