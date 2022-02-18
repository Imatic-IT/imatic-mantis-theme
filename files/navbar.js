  document.addEventListener("DOMContentLoaded", newnavbar());
  function newnavbar(){
    //pridej id 'mantis-title' k prvni z classes navbar-brand at se s nim da neco delat.
    let navbarid=document.getElementsByClassName('navbar-brand')[0];
    navbarid.id="mantis-title";
    let modtitle=document.getElementById('mantis-title');
    // a 'bug-index' k druhe z classes bug-id
    let bugid=document.getElementsByClassName('bug-id')[1];
    bugid.id='bug-index';
    let bug2clip=document.getElementById('bug-index');
    // dalsi podle classname
    let recents=document.getElementsByClassName('nav-recent hidden-xs')[0];
    recents.firstChild.remove();
    //tydle maji ID takze podstatne jednodussi, rovnou je priradim.
    let searchbox=document.getElementById('nav-search');
    let breadcrumbs=document.getElementById('breadcrumbs');
    //...vyrob nove html do nadpisu
    modtitle.outerHTML+='<div class="navbar-header navbar-brand"><span id="copy2clip" class="smaller-75">['+bug2clip.innerText+']</span></div>'+
        '<div class="navbar-brand" style="width: 160px; padding-top: 0px; padding-bottom: 0px; line-height: 7px;"><span style="font-size: 12px;">'+recents.innerHTML+'</span></div>'+
        '<div class="navbar-header navbar-brand" style="width: 80px;"><span class="smaller-75">'+searchbox.innerHTML+'</span></div>';
    //znicit element breadcrumbs z puvodni pozice
    document.getElementById('breadcrumbs').remove();
    //registrovat udalost klik na nadpis a vyrobit funkci = javascript copy bug-index text to clipboard
    copy2clip.onclick=function() {navigator.clipboard.writeText(bug2clip.innerText);}
  }
