$(document).ready(function () {
  let navbar = $("#navbar");
  let lastSeen = $(".nav-recent ");
  let lastSeenMessage = $(lastSeen.contents()[0]).text();
  let searchBarFormUrl = $("#nav-search").find("form").attr("action");
  navbar.append('<div class="append-elements"></div>');
  let creteSearchBar = $(
    '<div class="nav-search-cloned"><form class="form-search" method="post" action="' +
      searchBarFormUrl +
      '"><span class="input-icon"><input type="text" name="bug_id" autocomplete="off" class="nav-search-input" placeholder="Problém č."><i class="ace-icon fa fa-search nav-search-icon"></i></span></form></div>'
  );
  let createClipboard = $(
    '<span class="clipboard-issue"><input readonly id="clipboard" class="clipboard-input"> <i  class=" clipboard-icon fa fa-external-link"></i> </span>'
  );
  let parent = $(".append-elements");

  createContent(parent, creteSearchBar);

  let oppenedIssue = getCurrentOpenedIssue();

  if (oppenedIssue) {
    moveElements(parent, createClipboard);

    $("#clipboard").val(oppenedIssue);

    copyToClipboardUrl(oppenedIssue);

    copyToClipboardIssue(oppenedIssue);
  }

  // LAST SEEN
  let lastSeenChildrens = lastSeen.children();

  lastSeenP = '<span class="last-seen"> ' + lastSeenMessage + " </span>";

  parent.append(lastSeenP);
  lastSeenChildrens.each(function (k, i) {
    var child = i.cloneNode(true);

    $(".last-seen").append(child);

    let attrVal = $(".last-seen a:nth-child(" + k + ")").text();

    $(".last-seen a:nth-child(" + k + ")").text(attrVal + ", ");
  });
});

//-------------- FUNCTIONS -----------------

function copyToClipboardUrl(currentVal) {
  var temp = $("#clipboard");
  var url = $(location).attr("href");
  $(".clipboard-icon").click(function () {
    temp.val(url).select();
    document.execCommand("copy");
    temp.val("URL copied!");

    setTimeout(function () {
      temp.val(currentVal);
    }, 500);
  });
}

function copyToClipboardIssue(oppenedIssue) {
  $("#clipboard").on("click", function () {
    let _this = $(this);

    console.log(_this);
    copyToClipboard(_this);

    _this.val("Issue copied");

    setTimeout(function () {
      _this.val(oppenedIssue);
    }, 500);
  });
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
}

function createContent(appendTo, created) {
  created.appendTo(appendTo);
}

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
}
