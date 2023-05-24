// ==UserScript==
// @name         Default to Latest tab instead of For You
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fix YouTube annoyance of defaulting to the new "for you" tab instead of "latest".
// @author       Roger Skeie
// @match        https://www.youtube.com/@*/videos
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    clickLatestTab();
})();

function clickLatestTab() {
    if (document.querySelector('.yt-chip-cloud-chip-renderer[title="Latest"]')) {
        document.querySelector('.yt-chip-cloud-chip-renderer[title="Latest"]').parentElement.click();
    } else {
        setTimeout(clickLatestTab, 100);
    }
}

