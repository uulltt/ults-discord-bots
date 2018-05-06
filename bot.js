
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.substring(0, 5) === '!list' || message.content.substring(0, 5) === '!todo') {
		var args = message.content.substring(5).split('\n'); //we split by line breaks
		if (args.length == 1){ //if there's no line breaks
			args = message.content.substring(5).split(','); //we split by commas
		}
		for(var i = 0; i < args.length; i++){ //go through each of the arguments
			if (args[i].length > 0 && (args[i].length < 3 || args[i].substring(0,3) != '```')) //if the first character isn't an accent mark and the length of the argument is greater than 0
             message.channel.send('•' + args[i]); //send the list element
         }
    	
  	}
	if (message.content.substring(0, 5) === '!simp'){
		var arg = message.content.substring(6);
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-simp/z-0/dbl-2/x-' + encodeURI(arg)
      }
   }
})
  .then(console.log)
  .catch(console.error);
	}
	
	if (message.content.substring(0, 5) === '!test'){
		//var arg = message.content.substring(6);
		message.channel.send({
  files: ['https://cdn.discordapp.com/icons/222078108977594368/6e1019b3179d71046e463a75915e7244.png?size=2048']
})
  .then(console.log)
  .catch(console.error);
	}
});

client.login(process.env.BOT_TOKEN);
