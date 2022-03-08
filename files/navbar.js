$(document).ready(function () {
  let navbar = $("#navbar");
  let issueSearchInput = $("#nav-search");
  let lastSeen = $(".nav-recent ");
  let createEl = '<div class="append-elements"></div>';
  let createClipboard =
    '<span class="clipboard-issue"><input readonly id="clipboard" class="clipboard-input"> <i onclick="copyToClipboard()" class=" clipboard-icon fa fa-clipboard"></i> </span>';

  moveElements(navbar, createEl);
  let parent = $(".append-elements");

  moveElements(parent, issueSearchInput, "search-input");
  moveElements(parent, lastSeen, "last-seen");

  let oppenedIssue = getCurrentOpenedIssue();

  if (oppenedIssue) {
    lastSeen.css({
      left: "390px",
    });
    moveElements(parent, createClipboard);

    $("#clipboard").val(oppenedIssue);
  }
});

//-------------- FUNCTIONS -----------------

// MOVE ELEMENTS
function moveElements(el, appended, addClass = null) {
  el.append(appended);

  if (addClass) {
    appended.addClass(addClass);
  }
}

// GET CURRENT ISSUE
function getCurrentOpenedIssue() {
  var el = $(".bug-header-data");
  var currentRow = el.children(".bug-id").text();
  return currentRow;
}

//COPY TO CLIPBOARD
function copyToClipboard() {
  let thisButton = $(".clipboard-icon");
  var text = document.getElementById("clipboard").value;
  var sampleTextarea = document.createElement("textarea");
  document.body.appendChild(sampleTextarea);
  sampleTextarea.value = text; //save main text in it
  sampleTextarea.select(); //select textarea contenrs
  document.execCommand("copy");
  document.body.removeChild(sampleTextarea);

  thisButton.toggleClass("fa-clipboard").toggleClass("fa-check");

  setTimeout(function () {
    thisButton.toggleClass("fa-clipboard").toggleClass("fa-check");
  }, 1000);
}
