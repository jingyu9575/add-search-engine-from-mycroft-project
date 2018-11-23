browser.runtime.onMessage.addListener(message => {
	if (message && message.type === 'install') {
		void browser.tabs.create({
			url: '/install.html#' + encodeURIComponent(message.url),
			active: true,
		})
	}
})
