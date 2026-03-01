document.addEventListener('DOMContentLoaded', function () {
    const newButton = document.querySelector("#imaticEditBugButton");
    const widgetToolbox = document.querySelector(".widget-toolbox");

    if (newButton && widgetToolbox) {
        widgetToolbox.insertBefore(newButton, widgetToolbox.firstChild);
    }

    const nav = document.querySelector("ul.nav.ace-nav");
    if (nav) {
        const liToRemove = nav.querySelector("li.hidden-sm.hidden-xs");
        if (liToRemove) {
            nav.removeChild(liToRemove);
        }
    }
});