chrome.runtime.onInstalled.addListener(function() {
  var context = "link";
  var title = "ArchiveToday link";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab) {
  var sText = info.linkUrl;
  var url = "https://archive.today/?run=1&url=" + encodeURIComponent(sText); 
  window.open(url, '_blank');
};
