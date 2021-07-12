import "../stylesheets/index.css";
import backgroundImage from "../images/background-image.png";
import logo256 from "../images/logo-256.png";

function createDefaultPage() {
	const container = document.querySelector("div#content");
	// Add the image to our existing div.
	container.style.backgroundImage = `url(${backgroundImage}`;
	container.appendChild(navBar());


	console.log("finished creating page");
}

function navBar() {
	const navBar = document.createElement("div");
	navBar.id = "navBar";

	const navBarLogo = new Image();
	navBarLogo.src = logo256;
	navBarLogo.id = "navBarLogo";
	navBar.appendChild(navBarLogo);

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

createDefaultPage();