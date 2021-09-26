console.log("IM BACKGROUND");


// 생명주기
// CREATE
chrome.runtime.onInstalled.addListener(async () => {
    //의존성 주입

    
    // let url = chrome.runtime.getURL("youtube.com");

    // console.log(`Created tab ${tab.id}`);
})
// UPDATE
// chrome.runtime.onUpdated.addListener((tabId, changeInfo, tab) => {
//     if(changeInfo.status == "complete")
//     console.log(tabId);
// })


chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if(current_tab_info.url == "https://www.youtube.com/channel/UCP3UpZV0vtxL89De9_GnIXA/featured"){
            console.log("THIS PAGE");
            chrome.tabs.insertCSS(null,{file: "./page.css"});
            chrome.tabs.executeScript(null, {file: "./page.js"},()=>{console.log("INJECTED")});
        }
        console.log(current_tab_info.url);
    })
})