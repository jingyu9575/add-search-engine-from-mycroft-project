exportFunction(function (url) {
	browser.runtime.sendMessage({ type: 'install', url })
}, window.external, { defineAs: 'AddSearchProvider' })