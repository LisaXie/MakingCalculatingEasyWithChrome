///<reference path="typings/jquery/jquery.d.ts" />

$(function(){
  $('#paste').click(function(){pasteSelection();});
});

function pasteSelection() {
  chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
    function(response){
      var text = document.getElementById('calcBar'); 
      text.innerHTML = response.data;
    });
  });
}