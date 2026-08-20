document.addEventListener('DOMContentLoaded', function () {
    const newButton = document.querySelector("#imaticEditBugButton");
    const widgetToolbox = document.querySelector(".widget-toolbox");

    if (newButton && widgetToolbox) {
        widgetToolbox.insertBefore(newButton, widgetToolbox.firstChild);
    }
});