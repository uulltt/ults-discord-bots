const MidiPlayer = require('midi-player-js');
const MidiWriter = require('midi-writer-js');
const request = require('request').defaults({
		encoding: null
	});
var Player = new MidiPlayer.Player(function(event) {
    console.log(event);
});	
module.exports = (message, content, herokupg) => {
	
	if (message.attachments.array().length > 0 && message.attachments.array()[0].url.includes('.mid')){
		request.get(message.attachments.array()[0].url, function (err, res, body) {
							Player.loadArrayBuffer(body);
console.log(JSON.stringify(Player.getEvents()).length);							
console.log(JSON.stringify(Player.getEvents()));
							
							});
	}
}