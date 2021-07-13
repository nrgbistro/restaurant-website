import "../stylesheets/index.css";
import backgroundImage from "../images/background-image.png";
import logo256 from "../images/logo-256.png";
import {staffPage} from "./staff.js";
import {createDiv, createTab} from "./common";

function createDefaultPage() {
	const container = document.querySelector("div#content");
	container.style.backgroundImage = `url(${backgroundImage}`;
	container.appendChild(navBar());

	const bodyContainer = document.createElement("div");
	bodyContainer.id = "bodyContainer";
	bodyContainer.appendChild(staffPage());
	container.appendChild(bodyContainer);


	console.log("finished creating page");
}

function navBar() {
	const navBar = createDiv("navBar");

	const navBarLogo = new Image();
	navBarLogo.src = logo256;
	navBarLogo.id = "navBarLogo";
	navBar.appendChild(navBarLogo);

	const tabList = ["Home", "Menu", "Staff"];

	for (let i = 0; i < tabList.length; i++) {
		navBar.appendChild(createTab(tabList[i]));
	}
	console.log("created nav bar");
	return navBar;
}

createDefaultPage();