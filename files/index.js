document.addEventListener('DOMContentLoaded', function () {
    const widgetToolbox = document.querySelector(".widget-toolbox");
    if (!widgetToolbox) {
        return;
    }

    const editButton = document.querySelector("#imaticEditBugButton");
    if (editButton) {
        widgetToolbox.insertBefore(editButton, widgetToolbox.firstChild);
    }

    const slackButton = document.querySelector("#notifyToSlack");
    if (slackButton) {
        const pullRight = widgetToolbox.querySelector(".pull-right");
        if (pullRight) {
            widgetToolbox.insertBefore(slackButton, pullRight);
        } else {
            widgetToolbox.appendChild(slackButton);
        }
    }
});