const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "African/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Bot Made By Ademola❤️🔐
  " 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349159896402";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_45_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5LFxuICAgICAgICA2NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgNixcbiAgICAgICAgMjM5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDksXG4gICAgICAgIDE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MixcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc0LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk4LFxuICAgICAgICA4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDU2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAwLFxuICAgICAgICA4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM1LFxuICAgICAgICA0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhodWNORDZHRjJGV2JVTTVKODlXLzZUVitwUGtickt2TytOWE5MOElsNXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVRREVBN0VLVGx1aVlqdXUzNGJxR2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDA1ZTZhM2QtZWU1My00MjE0LTk0YmItOGQ4NzI5ZTg3ZTUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMSxcbiAgICAgIDgxLFxuICAgICAgMjQxLFxuICAgICAgMTE0LFxuICAgICAgMjQ5LFxuICAgICAgMjUxLFxuICAgICAgMTA3LFxuICAgICAgMTg0LFxuICAgICAgMjI5LFxuICAgICAgNTksXG4gICAgICA1MCxcbiAgICAgIDE0LFxuICAgICAgOTgsXG4gICAgICAyMzcsXG4gICAgICAxMixcbiAgICAgIDEyMixcbiAgICAgIDQ4LFxuICAgICAgMzEsXG4gICAgICAxNzUsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMTEzLFxuICAgICAgMTIwLFxuICAgICAgMTAzLFxuICAgICAgNTQsXG4gICAgICAxMjAsXG4gICAgICAxMDIsXG4gICAgICAyNSxcbiAgICAgIDE5NCxcbiAgICAgIDE0MSxcbiAgICAgIDE5MixcbiAgICAgIDIyOCxcbiAgICAgIDg5LFxuICAgICAgMCxcbiAgICAgIDkwLFxuICAgICAgNzQsXG4gICAgICA2MSxcbiAgICAgIDE1NCxcbiAgICAgIDYyLFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUZQMThFRDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwOTU3NDEwNDk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIl9FU1NFTlRJQUxWTE9HX1wiLFxuICAgIFwibGlkXCI6IFwiNjE0NjUyNzcwMDU5OTA6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJdks4YlFFRUphWnE3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldxK2xkU3djNzVHNUd3S2lFd2QzNFk4cDE3QlN0RXVoVUM5bkxzSk1lWEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTkFYeUxRWEJmMGI2dm1EQzBsVzhOc3NHVEo3a2ZMbUFlTUZzV3kwRHAvVXRnUEhreUdiSWZUQ2pGcWZ1VXZrVUVoRE9UZ3A5UVhERFY5SXFjemxsQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNWovSVZ3RG9CcUorcStPZmV5WFVxMHh6Qkxhc3NwM2NpL2dtbGVrbnh4OGpBRUcyMllrYlhHY2NNMmJDWUFlZXhLblRrSmRLbmdIU3B1RTFPL1UxaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA5NTc0MTA0OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0Njk1MzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCaFdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJoVy5qc29uIjogIntcImtleURhdGFcIjpcImR2OHN1TG5QNDZva3drUUEyYVVxdXlhSm5TWDFvRi9jYlNnNW1rTWJMU1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE4NDY1NDYwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ade💚",
  packname: process.env.PACK_NAME || "Ade💗",
  botname : process.env.BOT_NAME  || "ADEMOLA💚🔐",
  ownername:process.env.OWNER_NAME|| "Essentialvlog💙",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Ademola💝🔐"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
