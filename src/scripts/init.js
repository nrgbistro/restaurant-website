

function createDefaultPage() {
	const container = document.querySelector("div#content");
	container.appendChild(navBar());

	console.log("finished creating page");
}


function navBar() {
	const navBar = document.createElement("div");
	navBar.id = "navBar";

	const tabList = ["Home", "Menu", "Contact"];

	for (let i = 0; i < tabList.length; i++) {
		navBar.appendChild(createTab(tabList[i]));
	}
	console.log("created nav bar");
	return navBar;
}

function createTab(name) {
	const newTab = document.createElement("div");
	newTab.classList.add("tab");
	newTab.id = name;
	newTab.textContent = name;
	newTab.addEventListener("click", () => {
		console.log(name);
	});
	return newTab;
}

document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
	let link = document.createElement('link'),
		oldLink = document.getElementById('dynamic-favicon');
	link.id = 'dynamic-favicon';
	link.rel = 'shortcut icon';
	link.href = src;
	if (oldLink) {
		document.head.removeChild(oldLink);
	}
	document.head.appendChild(link);
}

module.exports = {
	createDefaultPage,
};