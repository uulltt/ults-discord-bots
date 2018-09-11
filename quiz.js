const request = require('request').defaults({
		encoding: null
	});
	const Discord = require('discord.js');
	const clientID = process.env.QUIZLET;
	
	module.exports = (message, content) => {
		if (content.match(/b!quiz\Whttps:\/\/quizlet\.com\/[0-9]+/gm)){
		var quizID = content.match(/\/[0-9]+\//gm)[0].match(/[0-9]+/gm)[0];
		request.get('https://api.quizlet.com/2.0/sets/'+quizID+'?client_id='+clientID+'&whitespace=1', function(err, res, body){
			var quiz = JSON.parse(body.toString());
			testQuestion(message, content, quiz, 0, 1)
		});
		}
		
		
	}
	
	function testQuestion(message, content, quiz, i, len){
		var q = quiz.terms[Math.floor(Math.random() * quiz.terms.length)];
			var question = q.term;
			var answer = q.definition.toLowerCase().replace(/[^ 0-9a-z]/gm, '');
			message.channel.send('\"' + question + '\"');
			const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {
							time: 60000
						});
					collector.on('collect', message2 => {
						if (message2.user === message.user && message2.channel === message.channel) {
							var a = message2.cleanContent.toLowerCase().replace(/[^ 0-9a-z]/gm, '');
							if (a == answer){
								message2.react('✅');
								collector.stop();
							} else {
								message2.react('❎');
								message.channel.send('\"' + q.definition + '\"');
								collector.stop();
							}
						}

					});
	}