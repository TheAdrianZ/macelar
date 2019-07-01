const Discord = require('discord.js');
const fs = require ('fs');
const client = new Discord.Client(); 
const prefix = "+"



client.on('message', message => {
    var prefix = '+';
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
       message.channel.send('**Check Your DM! :mailbox_with_mail: **');
       if(!message.channel.guild) return message.reply('** This Command Works Only In Servers. **');
      if(!message.member.hasPermission('SEND_MESSAGES')) return      message.channel.send('**Sadly You Dont Have The** `SEND_MESSAGES` **Permission.**' );
  
  
  
  
  message.author.sendMessage(`
  **__[❖═════════════════════════════❖]__**
        َ     __Macelar's Family Bot__
         __Bot made by Friday Bots / Owner: Huawei#6969__
  **__[❖═════General Commands═════❖]__**
  **🔰-| +id |** To Know Informations About Your Account
  **🔰-| +srvbots |** To Know All The Bots That Are In Your Server
  **🔰-| +avatar |** To Know Your / Someone's Profile Picture
  **🔰-| +image |** To Know The Server's Picture
  **🔰-| +count |** To Know How Much Members Are In Your Server
  **🔰-| +ping |** To Know The Bot's Ping
  **🔰-| +say |** To Let The Bot Reply What You Say
  **🔰-| +embed |** To Let The Bot Reply What You Say In A Cool Way
  **__[❖═════Staff Commands═════❖]__**
  **🔰-| +kick |** To Kick Someone From The Server
  **🔰-| +ban |** To Ban Someone From The Server
  **🔰-| +mutechannel|** To Mute A Channel
  **🔰-| +unmutechannel |** To Unmute A Channel
  **🔰-| +hchannel |** To Hide A Channel
  **🔰-| +schannel |** To Show A Hidden Channel
  **🔰-| +dc |** To Delete All Rooms
  **🔰-| +dr |** To Delete All Roles
  **🔰-| +clear |** To Clear Messages
  **🔰-| +bc |** To Send A Message To All Members
  **🔰-| +server |** To See The Server's Informations
  **__[❖═════Other Commands═════❖]__**
  **🔰-| +invite |** To Invite The Bot To Your Server
  **🔰-| +inv |** To Invite The Bot To Your Server
  **🔰-| +support |** To Join The Support Server

  **__Macelar's Family Bot__**`);
  
    }
  });



                        client.on('guildCreate', guild => {
                            client.channels.get("5595088713692872715").send(`**FridayScript Joined A New Server✅ 
                            Server name: __${guild.name}__
                            Server owner: __${guild.owner}__
                            Server id: __${guild.id}__ 
                            Server Count: __${guild.memberCount}__**`)
                            }); 
                            client.on('guildDelete', guild => {
                              client.channels.get("5595088713692872715").send(`**FridayScript Left A Server ❎ 
                            Server name: __${guild.name}__
                            Server owner: __${guild.owner}__
                            Server id: __${guild.id}__ 
                            Server Count: __${guild.memberCount}__**`)
                            });


                                client.on('message', function(message) {
                                    if (message.channel.type === "dm") {
                                        if (message.author.id === client.user.id) return;
                                        var Dark = new Discord.RichEmbed()
                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .setTitle('I Got A New Message In My DM :love_letter:')
                                        .setThumbnail(`${message.author.avatarURL}`)
                                        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
                                        .setFooter(`From ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
                                    client.channels.get("595088168731279360").send({embed:Dark});
                                    }
                                });
  
  
  
client.on('message', message => {
    var prefix = '+';
    if (message.author.bot) return;
     if (message.content === prefix + "invite") {
       message.channel.send('**Check Your DM! :mailbox_with_mail: **');
       if(!message.channel.guild) return message.reply('** This Command Works Only In Servers. **');
      if(!message.member.hasPermission('SEND_MESSAGES')) return      message.channel.send('**Sadly You Dont Have The** `SEND_MESSAGES` **Permission.**' );
  
  
  
  
  message.author.sendMessage(`**:gear: __Invite Link__ :gear:*bot made by Friday bots* ** | **https://discordapp.com/api/oauth2/authorize?client_id=594962135159668839&permissions=8&scope=bot**`);
  
    }
  });



client.on('message', message => {
    var prefix = '+';
    if (message.author.bot) return;
     if (message.content === prefix + "support") {
       message.channel.send('**Check Your DM! :mailbox_with_mail: **');
       if(!message.channel.guild) return message.reply('** This Command Works Only In Servers. **');
      if(!message.member.hasPermission('SEND_MESSAGES')) return      message.channel.send('**Sadly You Dont Have The** `SEND_MESSAGES` **Permission.**' );
  
  
  
  
  message.author.sendMessage(`**:gear: __Support__ :gear:** | **https://discord.gg/Ru2S9zs**`);
  
    }
  });
  
  
  
        client.on('message', message => {
            if (message.content.startsWith("+id")) {
                         if(!message.channel.guild) return message.reply('** This Command Works Only In Servers **');
         
                        var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
            let embed = new Discord.RichEmbed()
           .setColor("RANDOM")
            .setThumbnail(`${mentionavatar.avatarURL}`)
           .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
           .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
            .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
           .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
              
              
           message.channel.sendEmbed(embed);
           console.log('[id] Send By: ' + message.author.username)
             }
         });
		 
		 
		 
            client.on('message', message => {
                if(!message.channel.guild) return;
           var prefix = "+";
                           if(message.content.startsWith(prefix + 'srvbots')) {
           
               
               if (message.author.bot) return;
               let i = 1;
                   const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
                     const embed = new Discord.RichEmbed()
                     .setAuthor(message.author.tag, message.author.avatarURL)
                     .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
           ${botssize.join('\n')}`)
           .setFooter(client.user.username, client.user.avatarURL)
           .setTimestamp();
           message.channel.send(embed)
           
           }
           
           
           });
		   
		   
		   
           client.on('message', message => {
            if (message.content.startsWith("+bot")) {
            message.channel.send({
                embed: new Discord.RichEmbed()
                    .setAuthor(client.user.username,client.user.avatarURL)
                    .setThumbnail(client.user.avatarURL)
                    .setColor('RANDOM')
                    .setTitle('``Informations Of FridayScript-Studio Bot`` ')
                    .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                    .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
                    .addField('``servers``', [client.guilds.size], true)
                    .addField('``Users``' ,`[ ${client.users.size} ]` , true)
                    .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
                    .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                          .addField('``My Prefix``' , `[ + ]` , true)
                          .addField('``My Language``' , `[ Java Script ]` , true)
                          .setFooter('** Macelar's Family Bot © 2019 | All Rights Reserved **')
            })
        }
        });



         client.on('message', message => {
            if (!message.channel.guild) return;
    if(message.content =='+count')
    var IzRo = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTitle('🌍| Members Info')
    .addBlankField(true)
    .addField('Member Count',`__${message.guild.memberCount}__`)
    message.channel.send(IzRo);
  });
  
  
  
            client.on('message', message => {
                var prefix = "+"
              if (message.author.x5bz) return;
              if (!message.content.startsWith(prefix)) return;
            
              let command = message.content.split(" ")[0];
              command = command.slice(prefix.length);
            
              let args = message.content.split(" ").slice(1);
            
              if (command == "ban") {
                           if(!message.channel.guild) return message.reply('**This Command Works Only In Servers**');
                     
              if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Dont Have**` BAN_MEMBERS `**Permission.**");
              if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**The Bot Dont Have**` BAN_MEMBERS `**Permission.**");
              let user = message.mentions.users.first();
              let reason = message.content.split(" ").slice(2).join(" ");
              if (message.mentions.users.size < 1) return message.reply("**Mention Someone :x:**");
              if(!reason) return message.reply ("**Write The Reason**");
              if (!message.guild.member(user)
              .bannable) return message.reply("**I Can't Ban Someone's Rank Is Higher Than My Rank**");
            
              message.guild.member(user).ban(7, user);
            
              const banembed = new Discord.RichEmbed()
              .setAuthor(`BANNED!`, user.displayAvatarURL)
              .setColor("RANDOM")
              .setTimestamp()
              .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
              .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
              .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
              message.channel.send({
                embed : banembed
              })
            }
            });
            
            client.on('message', message => {
                var prefix = "+"
              if (message.author.x5bz) return;
              if (!message.content.startsWith(prefix)) return;
            
              let command = message.content.split(" ")[0];
              command = command.slice(prefix.length);
            
              let args = message.content.split(" ").slice(1);
            
              if (command == "kick") {
                           if(!message.channel.guild) return message.reply('**This Command Works Only In Servers**');
                     
              if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Dont Have**` KICK_MEMBERS `**Permission.**");
              if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**The Bot Dont Have**` KICK_MEMBERS `**Permission.**");
              let user = message.mentions.users.first();
              let reason = message.content.split(" ").slice(2).join(" ");
              if (message.mentions.users.size < 1) return message.reply("**Mention Someone :x:**");
              if(!reason) return message.reply ("**Write The Reason**");
              if (!message.guild.member(user)
              .kickable) return message.reply("**I Can't Kick Someone's Rank Is Higher Than My Rank**");
            
              message.guild.member(user).kick();
            
              const kickembed = new Discord.RichEmbed()
              .setAuthor(`KICKED!`, user.displayURL)
              .setColor("RANDOM")
              .setTimestamp()
              .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
              .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
              .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
              message.channel.send({
                embed : kickembed
              })
            }
            });
			
			
			
            client.on('message', message => {
                var prefix = "+";
                       if(message.content === prefix + "mutechannel") {
                                           if(!message.channel.guild) return message.reply('** This Command Only Works In Servers **');
                
                   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **You Dont Have Enough Permissions**');
                              message.channel.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false
                
                              }).then(() => {
                                  message.reply("**Room Muted :white_check_mark:**")
                              });
                                }
                    if(message.content === prefix + "unmutechannel") {
                                        if(!message.channel.guild) return message.reply('**This Command Only Works In Servers**');
                
                   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You Dont Have Enough Permissions**');
                              message.channel.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: true
                
                              }).then(() => {
                                  message.reply("**Room Unmuted :white_check_mark:**")
                              });
                    }
                       
                });



           client.on('message', message => {
            if (message.content.startsWith("+avatar")) {
        if(!message.channel.guild) return;
                var mentionned = message.mentions.users.first();
            var client;
              if(mentionned){
                  var client = mentionned; } else {
                  var client = message.author;
              }
                const embed = new Discord.RichEmbed()
                .addField('Requested by:', "<@" + message.author.id + ">")
                .setColor(000000)
                .setImage(`${client.avatarURL}`)
              message.channel.sendEmbed(embed);
            }
        });



        client.on('message', message => {
            var prefix = "+";
            if(message.content.split(' ')[0] == prefix + 'dc') {
            if (!message.channel.guild) return;
            if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.reply("**You Dont Have**` MANAGE_CHANNELS `**Permission.**");
            if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**The Bot Dont Have**` MANAGE_CHANNELS `**Permission.**");
            message.guild.channels.forEach(m => {
            m.delete();
            });
            message.reply("Rooms Deleted :white_check_mark:")
            }
            if(message.content.split(' ')[0] == prefix + 'dr') { 
            if (!message.channel.guild) return;
            if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("**You Dont Have**` MANAGE_ROLES `**Permission.**");
            if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("**The Bot Dont Have**` MANAGE_ROLES `**Permission.**");
            message.guild.roles.forEach(m => {
            m.delete();
            });
            message.reply("Roles Deleted :white_check_mark:")
            }
            });



            client.on('message', message => {  
                var prefix = "+";
                if (message.author.bot) return;
            if (message.content.startsWith(prefix + 'clear')) { 
                if(!message.channel.guild) return message.reply('This Command Works Only In Servers'); 
                    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**You Dont Have**` MANAGE_MESSAGES `**Permission.**');
                    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**You Dont Have**` MANAGE_MESSAGES `**Permission.**');
             let args = message.content.split(" ").slice(1)
                let messagecount = parseInt(args);
                if (args > 99) return message.reply("**The Number Should Be 100-**").then(messages => messages.delete(5000))
                if(!messagecount) args = '100';
                message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
                message.channel.send(`Deleted Messages : \`${args}\``).then(messages => messages.delete(5000));
              }
              });  



            client.on('message', message => {
                var prefix = "+";
                      if(message.content === prefix + "hchannel") {
                      if(!message.channel.guild) return;
                      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Enough Permissions');
                             message.channel.overwritePermissions(message.guild.id, {
                             READ_MESSAGES: false
                 })
                              message.channel.send('Room Hidden :white_check_mark:')
                 }
                });
                
                
                client.on('message', message => {
                var prefix = "+";
                      if(message.content === prefix + "schannel") {
                      if(!message.channel.guild) return;
                      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Enough Permissions');
                             message.channel.overwritePermissions(message.guild.id, {
                             READ_MESSAGES: true
                 })
                              message.channel.send('Rooms Showen :white_check_mark:')
                 }
                });
				
				
				
                  client.on('message', message => {
                     var prefix = '+';
                    if(message.author.bot) return;
                    if(message.channel.type === 'dm') return;
                        if(message.content.startsWith(prefix + 'bc')) {
                         	if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(' **You Dont Have**`ADMINISTRATOR`**Permission.**');
                         let filter = m => m.author.id === message.author.id;
                     
                     let recembed = new Discord.RichEmbed()
                     .setTitle(`${client.user.username}`)
                     .setDescription(`
                     -=-=-=-=-=-=-=-=-=-=
                     🎖 Send Message To A Role Without Embed
                      [__You Should Write The Correct Name Of The Role Without Mention__]

                     🏅 Send Message To A Role With Embed
                      [__You Should Write The Correct Name Of The Role Without Mention__]

                     📭 Send Message To All Members With Embed
                     
                     📧 Send Message To All Members Without Embed
                     
                     🔵 Send Message To Online Members Only Without Embed
                     
                     🔷 Send Message To Online Members Only With Embed

                     🔴 Send Message To Members Who Have The Red Mark Only Without Embed

                     ♦ Send Message To Members Who Have The Red Mark Only With Embed
                     
                     ❌ Cancel
                     -=-=-=-=-=-=-=-=-=-=
                     `)
                     
                     message.channel.sendEmbed(recembed).then(msg => { 
                         msg.react('🎖')
                         .then(() => msg.react('🏅'))
                         .then(() => msg.react('📭'))
                         .then(() =>  msg.react('📧'))
                         .then(() => msg.react('🔵'))
                         .then(() => msg.react('🔷'))
                         .then(() => msg.react('🔴'))
                         .then(() => msg.react('♦'))
                         .then(() => msg.react('❌'))
                    
                     
                                 let embedmsgFilter = (reaction, user) => reaction.emoji.name === '📭' && user.id === message.author.id;
                                 
                                 let dndonlyFilter = (reaction, user) => reaction.emoji.name === '🔴' && user.id === message.author.id;

                                 let embeddndonlyFilter = (reaction, user) => reaction.emoji.name === '♦' && user.id === message.author.id;
                     
                                 let normalmsgFilter = (reaction, user) => reaction.emoji.name === '📧' && user.id === message.author.id;
                     
                                 let cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
                     
                                 let onlyroleFilter = (reaction, user) => reaction.emoji.name === '🎖' && user.id === message.author.id;8
                     
                                 let onlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔵' && user.id === message.author.id;8
                    
                                 let embedonlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔷' && user.id === message.author.id;8
                    
                                 let embedonlyroleFilter = (reaction, user) => reaction.emoji.name === '🏅' && user.id === message.author.id;8
                     
                                 let embedmsg = msg.createReactionCollector(embedmsgFilter, { time: 0 });

                                 let dndonly = msg.createReactionCollector(dndonlyFilter, { time: 0 });

                                 let embeddndonly = msg.createReactionCollector(embeddndonlyFilter, { time: 0 });
                     
                                 let normalmsg = msg.createReactionCollector(normalmsgFilter, { time: 0 });
                         
                                 let onlyrole = msg.createReactionCollector(onlyroleFilter, { time: 0 });
                     
                                 let embedonlyrole = msg.createReactionCollector(embedonlyroleFilter, { time: 0 });
                    
                                 let onlineonly = msg.createReactionCollector(onlineonlyFilter, { time: 0 });
                                     
                                 let embedonlineonly = msg.createReactionCollector(embedonlineonlyFilter, { time: 0 });
                    
                                 let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
                    embeddndonly.on('collect', r => {
                    
                        let msge;
                        message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                        
                               message.channel.awaitMessages(filter, {
                                 max: 1,
                                 time: 90000,
                                 errors: ['time']
                               })
                               .then(collected => {
                                   collected.first().delete();
                                   msge = collected.first().content;
                                   msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                     message.channel.awaitMessages(filter, {
                                       max: 1,
                                       time: 90000,
                                       errors: ['time']
                                     })
                                     .then(collected => {
                                       if(collected.first().content === 'Yes') {
                       message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                       
                       
                       message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {
                        var bc = new Discord.RichEmbed()
                               .setColor('RANDOM')
                               .setTitle(`New Message :mega:`)
                               .addField('🔰Server🔰', message.guild.name)
                               .addField('🚩Sender🚩', message.author.username)
                               .addField('📜Message📜', `${msge}`)
                               .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                               .setFooter(client.user.username, client.user.avatarURL);
                               m.send({ embed: bc })
                               m.send(`${m}`)
                               
                           })
                       }})
                       if(collected.first().content === 'No') {
                       message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                       message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {
                        var bc = new Discord.RichEmbed()
                               .setColor('RANDOM')
                               .setTitle(`New Message :mega:`)
                               .addField('🔰Server🔰', message.guild.name)
                               .addField('🚩Sender🚩', message.author.username)
                               .addField('📜Message📜', `${msge}`)
                               .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                               .setFooter(client.user.username, client.user.avatarURL);
                               m.send({ embed: bc })
                               
                           })
                       }
                                     
                       })
                                   })
                               })
                           })


                     dndonly.on('collect', r => {
                        let msge;
                        message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                     
                            message.channel.awaitMessages(filter, {
                              max: 1,
                              time: 90000,
                              errors: ['time']
                            })
                            .then(collected => {
                                collected.first().delete();
                                msge = collected.first().content;
                                msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                  message.channel.awaitMessages(filter, {
                                    max: 1,
                                    time: 90000,
                                    errors: ['time']
                                  })
                                  .then(collected => {
                    
                                    if(collected.first().content === 'Yes') {
                    message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                                    
                    
                    message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {
                        m.send(`${msge}`) 
                    m.send(`${m}`)       
                            
                        })
                    }
                    if(collected.first().content === 'No') {
                    message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                    message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {
                        m.send(`${msge}`) 
                                    
                        })}
                    })
                    })
                            })
                        })
                    })

                     
                     embedonlineonly.on('collect', r => {
                    
                        let msge;
                        message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                        
                               message.channel.awaitMessages(filter, {
                                 max: 1,
                                 time: 90000,
                                 errors: ['time']
                               })
                               .then(collected => {
                                   collected.first().delete();
                                   msge = collected.first().content;
                                   msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                     message.channel.awaitMessages(filter, {
                                       max: 1,
                                       time: 90000,
                                       errors: ['time']
                                     })
                                     .then(collected => {
                                       if(collected.first().content === 'Yes') {
                       message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                       
                       
                       message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
                        var bc = new Discord.RichEmbed()
                               .setColor('RANDOM')
                               .setTitle(`New Message :mega:`)
                               .addField('🔰Server🔰', message.guild.name)
                               .addField('🚩Sender🚩', message.author.username)
                               .addField('📜Message📜', `${msge}`)
                               .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                               .setFooter(client.user.username, client.user.avatarURL);
                               m.send({ embed: bc })
                               m.send(`${m}`)
                               
                           })
                       }})
                       if(collected.first().content === 'No') {
                       message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                       message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
                        var bc = new Discord.RichEmbed()
                               .setColor('RANDOM')
                               .setTitle(`New Message :mega:`)
                               .addField('🔰Server🔰', message.guild.name)
                               .addField('🚩Sender🚩', message.author.username)
                               .addField('📜Message📜', `${msge}`)
                               .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                               .setFooter(client.user.username, client.user.avatarURL);
                               m.send({ embed: bc })
                               
                           })
                       }
                                     
                       })
                                   })
                               })
                           })
                     
                           
                     onlineonly.on('collect', r => {
                        let msge;
                        message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                     
                            message.channel.awaitMessages(filter, {
                              max: 1,
                              time: 90000,
                              errors: ['time']
                            })
                            .then(collected => {
                                collected.first().delete();
                                msge = collected.first().content;
                                msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                  message.channel.awaitMessages(filter, {
                                    max: 1,
                                    time: 90000,
                                    errors: ['time']
                                  })
                                  .then(collected => {
                    
                                    if(collected.first().content === 'Yes') {
                    message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                                    
                    
                    message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
                        m.send(`${msge}`) 
                    m.send(`${m}`)       
                            
                        })
                    }
                    if(collected.first().content === 'No') {
                    message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                    message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
                        m.send(`${msge}`) 
                                    
                        })}
                    })
                    })
                            })
                        })
                    })
                    
                     embedmsg.on('collect', r => {
                         let msge;
                      message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                      
                             message.channel.awaitMessages(filter, {
                               max: 1,
                               time: 90000,
                               errors: ['time']
                             })
                             .then(collected => {
                                 collected.first().delete();
                                 msge = collected.first().content;
                                 msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                   message.channel.awaitMessages(filter, {
                                     max: 1,
                                     time: 90000,
                                     errors: ['time']
                                   })
                                   .then(collected => {
                                     if(collected.first().content === 'Yes') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                     
                     
                         message.guild.members.forEach(m => {
                             var bc = new Discord.RichEmbed()
                             .setColor('RANDOM')
                             .setTitle(`New Message :mega:`)
                             .addField('🔰Server🔰', message.guild.name)
                             .addField('🚩Sender🚩', message.author.username)
                             .addField('📜Message📜', `${msge}`)
                             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                             .setFooter(client.user.username, client.user.avatarURL);
                             m.send({ embed: bc })
                             m.send(`${m}`)
                             
                         })
                     }})
                     if(collected.first().content === 'No') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                         message.guild.members.forEach(m => {
                             var bc = new Discord.RichEmbed()
                             .setColor('RANDOM')
                             .setTitle(`New Message :mega:`)
                             .addField('🔰Server🔰', message.guild.name)
                             .addField('🚩Sender🚩', message.author.username)
                             .addField('📜Message📜', `${msge}`)
                             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                             .setFooter(client.user.username, client.user.avatarURL);
                             m.send({ embed: bc })
                             
                         })
                     }
                                   
                     })
                                 })
                             })
                         })
                     
                     
                        
                     
                     
                     
                     normalmsg.on('collect', r => {
                         let msge;
                         message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                      
                             message.channel.awaitMessages(filter, {
                               max: 1,
                               time: 90000,
                               errors: ['time']
                             })
                             .then(collected => {
                                 collected.first().delete();
                                 msge = collected.first().content;
                                 msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                   message.channel.awaitMessages(filter, {
                                     max: 1,
                                     time: 90000,
                                     errors: ['time']
                                   })
                                   .then(collected => {
                     
                                     if(collected.first().content === 'Yes') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                                     
                     
                         message.guild.members.forEach(m => {
                     m.send(`${msge}`) 
                     m.send(`${m}`)       
                             
                         })
                     }
                     if(collected.first().content === 'No') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                         message.guild.members.forEach(m => {
                             m.send(`${msge}`) 
                                     
                         })}
                     })
                     })
                             })
                         })
                     })
                     
                     onlyrole.on('collect', r => {
                         let msge;
                         let role;
                         message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                      
                             message.channel.awaitMessages(filter, {
                               max: 1,
                               time: 90000,
                               errors: ['time']
                             })
                     
                             .then(collected => {
                                 collected.first().delete();
                                 msge = collected.first().content;
                                     msg.edit('✅**| Now Please Write The RoleName**').then(msg => {
                                     message.channel.awaitMessages(filter, {
                                         max: 1,
                                         time: 90000,
                                         errors: ['time']
                                       })
                             
                             .then(collected => {
                                 collected.first().delete();
                                 role = collected.first().content;
                                     let rolecheak = message.guild.roles.find('name', `${role}`)
                                 msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                   message.channel.awaitMessages(filter, {
                                     max: 1,
                                     time: 90000,
                                     errors: ['time']
                                   })
                                   .then(collected => {
                     
                                     if(collected.first().content === 'Yes') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                                     
                     
                                 message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                     
                     m.send(`${msge}`) 
                     m.send(`${m}`)       
                             
                         })
                     }
                     if(collected.first().content === 'No') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                             message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                     
                             m.send(`${msge}`) 
                                     
                         })}
                     })
                     })
                             })
                         })
                     })
                     })
                     });
                     
                     
                     
                     embedonlyrole.on('collect', r => {
                         let msge;
                         let role;
                         message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                      
                             message.channel.awaitMessages(filter, {
                               max: 1,
                               time: 90000,
                               errors: ['time']
                             })
                     
                             .then(collected => {
                                 collected.first().delete();
                                 msge = collected.first().content;
                                     msg.edit('✅**| Now Please Write The RoleName**').then(msg => {
                                     message.channel.awaitMessages(filter, {
                                         max: 1,
                                         time: 90000,
                                         errors: ['time']
                                       })
                             
                             .then(collected => {
                                 collected.first().delete();
                                 role = collected.first().content;
                                     let rolecheak = message.guild.roles.find('name', `${role}`)
                                 msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                   message.channel.awaitMessages(filter, {
                                     max: 1,
                                     time: 90000,
                                     errors: ['time']
                                   })
                                   .then(collected => {
                     
                                     if(collected.first().content === 'Yes') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                                     
                     
                                         message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                                             var bc = new Discord.RichEmbed()
                             .setColor('RANDOM')
                             .setTitle(`New Message :mega:`)
                             .addField('🔰Server🔰', message.guild.name)
                             .addField('🚩Sender🚩', message.author.username)
                             .addField('📜Message📜', `${msge}`)
                             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                             .setFooter(client.user.username, client.user.avatarURL);
                             m.send({ embed: bc })
                     m.send(`${m}`)       
                             
                         })
                     }
                     if(collected.first().content === 'No') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                     message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                             var bc = new Discord.RichEmbed()
                             .setColor('RANDOM')
                             .setTitle(`New Message :mega:`)
                             .addField('🔰Server🔰', message.guild.name)
                             .addField('🚩Sender🚩', message.author.username)
                             .addField('📜Message📜', `${msge}`)
                             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                             .setFooter(client.user.username, client.user.avatarURL);
                             m.send({ embed: bc })
                             
                                     
                         })}
                     })
                     })
                             })
                         })
                     })
                     })
                     })
                         cancel.on('collect', r => {
                             let cancelembed = new Discord.RichEmbed()
                             .setTitle('Succefully Canceled :x:')
                          message.channel.sendEmbed(cancelembed)
                             embedmsg.stop();
                             normalmsg.stop();
                             onlyrole.stop();
                             embedonlyrole.stop();
                             embedonlineonly.stop()
                             onlineonly.stop()
                             cancel.stop();
                         })
                     })
                        }});



                            client.on('message' , message => {
                                var prefix = '+'
                                if(message.author.bot) return;
                                if(message.content.startsWith(prefix + "ping")) {
                               message.channel.send('pong').then((msg) => {
                              var PinG = `${Date.now() - msg.createdTimestamp}`
                              var ApL = `${Math.round(client.ping)}`
                                    msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
                               })
                                }  
                               });



                               client.on('message', function(msg) {
                                if(msg.content.startsWith (prefix  + 'server')) {
                                 let embed = new Discord.RichEmbed()
                                 .setColor('RANDOM')
                                 .setThumbnail(msg.guild.iconURL)
                                 .setTitle(`Showing Details Of  **${msg.guild.name}*`)
                                 .addField('🌐** __Region__**',`[** __${msg.guild.region}__ **]`,true)
                                 .addField('🏅** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
                                 .addField('🔴**__MemberCount__**',`[** __${msg.guild.memberCount}__ **]`,true)
                                 .addField('🔵**__Online Members Count__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
                                 .addField('📝**__Text Rooms__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
                                 .addField('🎤**__Voice Rooms__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
                                 .addField('👑**__Owner__**',`**${msg.guild.owner}**`,true)
                                 .addField('🆔**__Server ID__**',`**${msg.guild.id}**`,true)
                                 .addField('📅**__Creation Date__**',msg.guild.createdAt.toLocaleString())
                                 msg.channel.send({embed:embed});
                                }
                                });



         client.on("message", message => {
            var prefix = "+";
            if(message.content.startsWith(prefix + "embed")) {
              
          
          var color = message.content.split(" ")[1];
            var text = message.content.split(" ").slice(2);
              var tt = text.join(" ")
            if(!color) return message.reply("You Should Type A Color !");
              if(!tt) return message.reply("You Should Type Something To Let The Bot Reply it !");
            let embed = new Discord.RichEmbed()
            .setColor(color)
            .setDescription(tt)
            message.channel.send(embed).catch(Julian =>{console.log('`Error`: ' + Julian);
          message.channel.send("`Error`:" + Julian)
              })
            }
            });



client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('SEND_MESSAGES')) return message.channel.send('**You Dont Have** `SEND_MESSAGES`**Permission.**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });
								
								

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus by Huawei")

client.user.setActivity(`Macelar's Family | +help`, {
type: "STREAMING",
url: "https://www.twitch.tv/PewDiePie"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});



                                    client.on("message", message => {
                                        const prefix = "+"
                                                  
                                              if(!message.channel.guild) return;
                                       if(message.author.bot) return;
                                          if(message.content === prefix + "image"){ 
                                              const embed = new Discord.RichEmbed()
                                      
                                          .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
                                      .setAuthor(message.author.username, message.guild.iconrURL)
                                        .setColor(0x164fe3)
                                        .setImage(message.guild.iconURL)
                                        .setURL(message.guild.iconrURL)
                                                        .setTimestamp()
                                    
                                       message.channel.send({embed});
                                          }
                                      });




client.login(process.env.BOT_TOKEN);
