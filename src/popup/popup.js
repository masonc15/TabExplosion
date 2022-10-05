

const selectElement = document.getElementById("dateOptions");

// Get Current State from Local Storage
chrome.storage.local.get(["date"], value => {
	selectElement.value = value.date;
});

selectElement.addEventListener("change", event => {
	chrome.storage.local.set({ date: event.target.value }, () => {});
	chrome.extension.getBackgroundPage().console.log(chrome.storage.date);
});

function closeTabs() {
	closeAllTabs(true, false);
}
