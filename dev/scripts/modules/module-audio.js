import GreenAudioPlayer from "./audio-player";

class global {
	constructor() {
		this.audioJs();
	}
	//Audio Player
	audioJs() {
		GreenAudioPlayer.init({
			selector: ".ot-audio", // inits Green Audio Player on each audio container that has class "player"
			stopOthersOnPlay: true,
		});
	}
}
export default global;
new global();
