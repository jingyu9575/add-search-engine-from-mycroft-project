for (const element of document.querySelectorAll('[data-i18n]'))
	element.innerText = browser.i18n.getMessage(element.dataset['i18n'])

const link = document.createElement('link')
link.setAttribute('rel', 'search')
link.setAttribute('type', 'application/opensearchdescription+xml')
link.setAttribute('title', 'Install Search Engine ' + Date.now() +
	Math.floor(Math.random() * 1000000))
link.setAttribute('href', decodeURIComponent(location.hash.replace(/^#/, '')))
document.head.appendChild(link)