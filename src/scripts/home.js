import {createDiv} from "./common";
import randy from "../images/ra"

export function homePage() {
	const body = document.createElement("div");
	body.id = "body";

	const bodySubcontainerLeft = createDiv("bodySubcontainerRight");
	const textContent = document.createElement("p");
	textContent.textContent = "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz.";
	bodySubcontainerLeft.appendChild(textContent);

	const bodySubcontainerRight = createDiv("bodySubcontainerRight");
	const randy = new Image();
	randy.src =


	console.log("Home Page Built");
	return body;
}