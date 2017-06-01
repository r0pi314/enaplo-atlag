$(document).ready(function() {
	$('.deadify').click(function() {
		chrome.runtime.sendMessage({ undo: true })
	})
})