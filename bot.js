
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
	 client.user.setUsername("NagaevskyTron 60");
});


function wordWrap(str, maxWidth) {
    var newLineStr = "\n"; done = false; res = '';
    do {                    
        found = false;
        // Inserts new line at first whitespace of the line
        for (i = maxWidth - 1; i >= 0; i--) {
            if (testWhite(str.charAt(i))) {
                res = res + [str.slice(0, i), newLineStr].join('');
                str = str.slice(i + 1);
                found = true;
                break;
            }
        }
        // Inserts new line at maxWidth position, the word is too long to wrap
        if (!found) {
            res += [str.slice(0, maxWidth), newLineStr].join('');
            str = str.slice(maxWidth);
        }

        if (str.length < maxWidth)
            done = true;
    } while (!done);

    return res + str;
}

function testWhite(x) {
    var white = new RegExp(/^\s$/);
    return white.test(x.charAt(0));
}
 
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
	if (new RegExp(/!simp\W/gm).test(message.content.substring(0,6))){
		var arg = message.content.substring(6) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-simp/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
		
})
	}
	message.delete();
}
	if (new RegExp(/!simp[0-9][0-9]\W/gm).test(message.content.substring(0,8))){
		var arg = message.content.substring(8) + '\u200B';
		var style = message.content.charAt(5);
		var size = message.content.charAt(6);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-simp/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
		
})
	}
	message.delete();
}

if (new RegExp(/!kiki\W/gm).test(message.content.substring(0,6))){
		var arg = message.content.substring(6) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-kiki/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
		
})
	}
	message.delete();
}
	if (new RegExp(/!kiki[0-9][0-9]\W/gm).test(message.content.substring(0,8))){
		var arg = message.content.substring(8) + '\u200B';
		var style = message.content.charAt(5);
		var size = message.content.charAt(6);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-kiki/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
		
})
	}
	message.delete();
}

if (new RegExp(/!bios\W/gm).test(message.content.substring(0,6))){
		var arg = message.content.substring(6) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-bios/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
		
})
	}
	message.delete();
}
	if (new RegExp(/!bios[0-9][0-9]\W/gm).test(message.content.substring(0,8))){
		var arg = message.content.substring(8) + '\u200B';
		var style = message.content.charAt(5);
		var size = message.content.charAt(6);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-bios/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
		
})
	}
	message.delete();
}

if (new RegExp(/!gain\W/gm).test(message.content.substring(0,6))){
		var arg = message.content.substring(6) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-gain/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
		
})
	}
	message.delete();
}
	if (new RegExp(/!gain[0-9][0-9]\W/gm).test(message.content.substring(0,8))){
		var arg = message.content.substring(8) + '\u200B';
		var style = message.content.charAt(5);
		var size = message.content.charAt(6);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-gain/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
		
})
	}
	message.delete();
}

if (new RegExp(/!pubu\W/gm).test(message.content.substring(0,6))){
		var arg = message.content.substring(6) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,34}\W/gm);
		for(var i = 0; i < args.length; i++){
		if (args[i].length > 0)	
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-pubu/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
  
	}
	message.delete();
}

if (new RegExp(/!pubu[0-9][0-9]\W/gm).test(message.content.substring(0,8))){
		var arg = message.content.substring(8) + '\u200B';
		var style = message.content.charAt(5);
		var size = message.content.charAt(6);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-pubu/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
		
})
 
	}
	message.delete();
}

if (new RegExp(/!njgd\W/gm).test(message.content.substring(0,6))){
		var arg = message.content.substring(6) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,34}\W/gm);
		for(var i = 0; i < args.length; i++){
		if (args[i].length > 0)	
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-niga/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!njgd[0-9][0-9]\W/gm).test(message.content.substring(0,8))){
		var arg = message.content.substring(8) + '\u200B';
		var style = message.content.charAt(5);
		var size = message.content.charAt(6);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-niga/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
		
})
	}
	message.delete();
}

if (new RegExp(/!ssf2\W/gm).test(message.content.substring(0,6))){
		var arg = message.content.substring(6) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,34}\W/gm);
		for(var i = 0; i < args.length; i++){
		if (args[i].length > 0)	
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-ssf2/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!ssf2[0-9][0-9]\W/gm).test(message.content.substring(0,8))){
		var arg = message.content.substring(8) + '\u200B';
		var style = message.content.charAt(5);
		var size = message.content.charAt(6);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-ssf2/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
		
})
	}
	message.delete();
}

if (new RegExp(/!sfz3\W/gm).test(message.content.substring(0,6)) || new RegExp(/!sfa3\W/gm).test(message.content.substring(0,6))){
		var arg = message.content.substring(6) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,34}\W/gm);
		for(var i = 0; i < args.length; i++){
		if (args[i].length > 0)	
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-sfz3/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!sfz3[0-9][0-9]\W/gm).test(message.content.substring(0,8)) || new RegExp(/!sfa3[0-9][0-9]\W/gm).test(message.content.substring(0,8))){
		var arg = message.content.substring(8) + '\u200B';
		var style = message.content.charAt(5);
		var size = message.content.charAt(6);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-sfz3/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
		
})
	}
	message.delete();
}

if (new RegExp(/!kof2k\W/gm).test(message.content.substring(0,7))){
		var arg = message.content.substring(7) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
		if (args[i].length > 0)	
			message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-KoF2k/z-6/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!kof2k[0-9][0-9]\W/gm).test(message.content.substring(0,9))){
		var arg = message.content.substring(9) + '\u200B';
		var style = message.content.charAt(6);
		var size = message.content.charAt(7);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
		if (args[i].length > 0)	
			message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-KoF2k/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!kof97\W/gm).test(message.content.substring(0,7))){
		var arg = message.content.substring(7) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
			if (args[i].length > 0)
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-kof97/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!kof97[0-9][0-9]\W/gm).test(message.content.substring(0,9))){
		var arg = message.content.substring(9) + '\u200B';
		var style = message.content.charAt(6);
		var size = message.content.charAt(7);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
		if (args[i].length > 0)	
			message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-kof97/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!pabom\W/gm).test(message.content.substring(0,7))){
		var arg = message.content.substring(7) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
			if (args[i].length > 0)
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-pabom/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!pabom[0-9][0-9]\W/gm).test(message.content.substring(0,9))){
		var arg = message.content.substring(9) + '\u200B';
		var style = message.content.charAt(6);
		var size = message.content.charAt(7);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
		if (args[i].length > 0)	
			message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-pabom/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!namco2\W/gm).test(message.content.substring(0,8))){
		var arg = message.content.substring(8) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
			if (args[i].length > 0)
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-namco2/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!namco2[0-9][0-9]\W/gm).test(message.content.substring(0,10))){
		var arg = message.content.substring(10) + '\u200B';
		var style = message.content.charAt(7);
		var size = message.content.charAt(8);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
		if (args[i].length > 0)	
			message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-namco2/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!kof2k1\W/gm).test(message.content.substring(0,8))){
		var arg = message.content.substring(8) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
			if (args[i].length > 0)
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-KoF2k1/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!kof2k1[0-9][0-9]\W/gm).test(message.content.substring(0,10))){
		var arg = message.content.substring(10) + '\u200B';
		var style = message.content.charAt(7);
		var size = message.content.charAt(8);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
		if (args[i].length > 0)	
			message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-KoF2k1/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!kof2k2\W/gm).test(message.content.substring(0,8))){
		var arg = message.content.substring(8) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
			if (args[i].length > 0)
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-KoF2k2/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!kof2k2[0-9][0-9]\W/gm).test(message.content.substring(0,10))){
		var arg = message.content.substring(10) + '\u200B';
		var style = message.content.charAt(7);
		var size = message.content.charAt(8);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
		if (args[i].length > 0)	
			message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-KoF2k2/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!kof2k3\W/gm).test(message.content.substring(0,8))){
		var arg = message.content.substring(8) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
			if (args[i].length > 0)
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-KoF2k3/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!kof2k3[0-9][0-9]\W/gm).test(message.content.substring(0,10))){
		var arg = message.content.substring(10) + '\u200B';
		var style = message.content.charAt(7);
		var size = message.content.charAt(8);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
		if (args[i].length > 0)	
			message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-KoF2k3/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!arcade\W/gm).test(message.content.substring(0,8))){
		var arg = message.content.substring(8) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
			if (args[i].length > 0)
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-arcade/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!arcade[0-9][0-9]\W/gm).test(message.content.substring(0,10))){
		var arg = message.content.substring(10) + '\u200B';
		var style = message.content.charAt(7);
		var size = message.content.charAt(8);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
		if (args[i].length > 0)	
			message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-arcade/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!fz\W/gm).test(message.content.substring(0,4))){
		var arg = message.content.substring(4) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-fz/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!fz[0-9][0-9]\W/gm).test(message.content.substring(0,6))){
		var arg = message.content.substring(6) + '\u200B';
		var style = message.content.charAt(3);
		var size = message.content.charAt(4);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-fz/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!mt\W/gm).test(message.content.substring(0,4))){
		var arg = message.content.substring(4) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-mt/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!mt[0-9][0-9]\W/gm).test(message.content.substring(0,6))){
		var arg = message.content.substring(6) + '\u200B';
		var style = message.content.charAt(3);
		var size = message.content.charAt(4);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-mt/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!sf2\W/gm).test(message.content.substring(0,5))){
		var arg = message.content.substring(5) + '\u200B';
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-sf2/z-0/dbl-2/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}

if (new RegExp(/!sf2[0-9][0-9]\W/gm).test(message.content.substring(0,7))){
		var arg = message.content.substring(7) + '\u200B';
		var style = message.content.charAt(4);
		var size = message.content.charAt(5);
		//var args = arg.split('\n');
		//if (args.length < 2)
			var args = arg.match(/.{1,24}\W/gm);
		for(var i = 0; i < args.length; i++){
	if (args[i].length > 0)		
		message.channel.send({
			embed: {
    image: {
         url: 'https://nfggames.com/system/arcade/arcade.php/y-sf2/z-' + style + '/dbl-' + size + '/x-' + encodeURI(args[i]  + '\u200B')
      }
   }
})
	}
	message.delete();
}



if (message.content.substring(0, 5) === '!help' || message.content.substring(0, 9) === '!commands'){
		message.channel.send('font commands\n!any game name followed by two digits - that game with the first digit determining font style and second digit determining font size\n'+
		'!arcade - classic arcade\n!bios - BioShipPaladin\n!fz - fantasy zone\n!gain - gain ground\n!kiki - kiki kaikai\n!kof97 - king of fighters 97\n!kof2k - king of fighters 2000\n!kof2k1 - king of fighters 2001\n'+
		'!kof2k2 - king of fighters 2002\n!kof2k3 - king of fighters 2003\n!mt - major title\n!namco2 - namco classic gradient\n!njgd - ninja gaiden\n!pabom - panic bomber\n'+
		'!pubu - puzzle bobble\n!sf2 - street fighter 2\n!ssf2 - super street fighter 2\n!sfz3 or !sfa3 - street fighter zero\alpha 3\n!simp - the simpsons\n'+
		'\nother commands\n!list or !todo - splits discord message into a to-do list');
}	

});




client.login(process.env.BOT_TOKEN);
