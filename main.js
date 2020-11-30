//import {config} from './config.js'
import {getBibleVerse} from './bibleVerse.js'
import Discord from 'discord.js'
//const Discord = require("discord.js");


const client  = new Discord.Client();

//const token = config.botToken;
const prefix = "#";

client.once("ready", () => {
    console.log("zBibleVerse is now online!")
})

client.on("message",  message => {
    if(!message.content.startsWith(prefix) || message.author.bot){
        return;
    }
    const args = message.content.slice(prefix.length).split("+");
    args.forEach(element => {
        let results = "" + element.toUpperCase() + "\n";
        getBibleVerse(element).then((data) => {
            (data || []).forEach(c => {
               results+=c.verse + " | " + c.text + "\n"
            })
            
            message.channel.send(results)
        }).catch(err => {
            message.channel.send("Oops! zBibleVerse could not handle your request");
        })
        
    })
    //console.log(args.shift().toLowerCase())
})


//client.login(token);
client.login(process.env.BOT_TOKEN);
