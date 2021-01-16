

chrome.runtime.onInstalled.addListener(function() {
    alert("Background is installed!!")
  });

console.log("Handsfree has started in background")
alert("Background running!")

Handsfree.libSrc = '/handsfree/'
handsfree = new Handsfree({
    showDebug: true,
    hands: true
})
Handsfree.disableAll()

// // Use the hand with defaults (and show the webcam with wireframes)
// handsfree = new Handsfree({
//     showDebug: true,
//     hands: true
// })

// // Start webcam and tracking (personally, I always like to ask first)
// handsfree.start()
alert("Handfree has started!")