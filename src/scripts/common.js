export function createTab(name) {
	const newTab = createDiv(name, "tab");
	newTab.textContent = name;
	newTab.addEventListener("click", () => {
		console.log(name);
		document.title = `Pond5 | ${name}`;
	});
	return newTab;
}

export function createDiv(ID, CLASS) {
	const newDiv = document.createElement("div");
	if (!CLASS) {
		newDiv.classList.add(CLASS);
	}
	newDiv.id = ID;
	return newDiv;
}