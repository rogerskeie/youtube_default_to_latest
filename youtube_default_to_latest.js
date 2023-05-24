// ==UserScript==
// @name         Default to Latest tab instead of For You
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fix YouTube annoyance of defaulting to the new "for you" tab instead of "latest".
// @author       Roger Skeie
// @match        https://www.youtube.com/@*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    clickLatestTab();
    videosTabListener();
})();

function clickLatestTab() {
    const latestTabElement = document.querySelector('.yt-chip-cloud-chip-renderer[title="Latest"]');

    if (latestTabElement) {
        latestTabElement.parentElement.click();
    } else {
        setTimeout(clickLatestTab, 100);
    }
}

function videosTabListener() {
    const xpath = "//div[contains(concat(' ',normalize-space(@class),' '),' ytd-c4-tabbed-header-renderer ')][text()='Videos']";
    const videosTabElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (videosTabElement) {
        videosTabElement.addEventListener('click', clickLatestTab);
    } else {
        setTimeout(videosTabListener, 100);
    }
}

