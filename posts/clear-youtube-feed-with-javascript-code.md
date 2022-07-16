---
title: "Clear YouTube feed with javascript code"
description: "An easy method where you can make your YouTube feed fresh again 🚀"
date: '2022-07-16'
keywords:
- javascript
- javascript vanilla
- youtube
- feed
- clear YouTube feed
---

<iframe width="100%" height="415"
src="https://www.youtube.com/embed/hIqMrPTeGTc"
frameborder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
  
  
The bellow script will take all videos, and it will make them uninteresting. Paste the next code in your console:
```
(()=>{
    markAllVideosAsNotBeingInteresting({
        iterations: 1
    });
})();

async function markAllVideosAsNotBeingInteresting({iterations}) {
    for(let i=0; i<iterations; i++) {
        await markCurrentVideosAsNotBeingInteresting();
        console.log(`Iteration ${i} completed. Waiting 300ms`);
        await sleep(300);
    }
   if(confirm("I'm done! Do you want to reload the page", "Yes")) {
    location.reload();
   }
}

async function markCurrentVideosAsNotBeingInteresting() {
    const videoMenuButtons = document.querySelectorAll("yt-icon.ytd-menu-renderer");

    for(let i=0; i<videoMenuButtons.length; i++) {
        if(!videoMenuButtons[i]) {
            continue
        }
        videoMenuButtons[i].scrollIntoView();
        await sleep(10);

        // Open the video menu
        videoMenuButtons[i].click();


        await sleep(50);

        // Click on "Not interested" button
        var notInterestedButton = document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(5) > tp-yt-paper-item");
        if(!notInterestedButton) {
            continue
        }
        notInterestedButton.click();

        console.log("One video has been marked. Waiting 100ms");
        window.scrollBy(0, 95);
        await sleep(100);
    }
}

// Utils
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
```
