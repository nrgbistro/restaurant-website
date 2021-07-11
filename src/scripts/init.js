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
	const newTab = document.createElement("h1");
	newTab.classList.add("tab");
	newTab.id = name;
	newTab.textContent = name;
	return newTab;
}

module.exports = {
	createDefaultPage,
};