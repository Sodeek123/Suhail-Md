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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_16_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDksXG4gICAgICAgIDU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNixcbiAgICAgICAgMjM1LFxuICAgICAgICAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MixcbiAgICAgICAgODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTExLFxuICAgICAgICA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkyLFxuICAgICAgICA5MixcbiAgICAgICAgMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTczLFxuICAgICAgICA3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzLFxuICAgICAgICA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA2OSxcbiAgICAgICAgMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk0LFxuICAgICAgICA0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaytpVGV3dXZyTWhmOVdJRUUwQ0RlcE9Bc2hQQXVEVm9aVWhHUExZV1Mvaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQXJVOVJXSzNSVDJjX2JLUExuQU15UVwiLFxuICBcInBob25lSWRcIjogXCJmYjU3NGRhZC1iYTM0LTQzMDUtODE3ZC1lYzFkMmM2NzQ1M2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgMjAwLFxuICAgICAgMjgsXG4gICAgICAxNTIsXG4gICAgICAyNTIsXG4gICAgICAxMjMsXG4gICAgICAxNTQsXG4gICAgICA0LFxuICAgICAgMzcsXG4gICAgICA4MSxcbiAgICAgIDIyOCxcbiAgICAgIDE4NixcbiAgICAgIDQ3LFxuICAgICAgNTEsXG4gICAgICAwLFxuICAgICAgMTA5LFxuICAgICAgMjIyLFxuICAgICAgMTkzLFxuICAgICAgNTUsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgMjQ0LFxuICAgICAgMTcyLFxuICAgICAgMjEzLFxuICAgICAgNDYsXG4gICAgICAxNzksXG4gICAgICAyMDgsXG4gICAgICAxMDgsXG4gICAgICAxMjQsXG4gICAgICA4MCxcbiAgICAgIDE3LFxuICAgICAgMjQ0LFxuICAgICAgMTE5LFxuICAgICAgMTQyLFxuICAgICAgMjE4LFxuICAgICAgMTY0LFxuICAgICAgMTQsXG4gICAgICA1NyxcbiAgICAgIDE4OSxcbiAgICAgIDEzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyTTNWOE5SQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyNjI4MjUxMToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVHlwaW5nXCIsXG4gICAgXCJsaWRcIjogXCIxMDM0OTE5ODQ5OTAzNTE6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOM2l4L2NGRVBpcno3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk4zenJsOW5GMzNoNmpMODQycTNmdys1c2U0dUJKbVJWZ3pkajhJcitaam89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU3kvMTd1QnFEQlhMVUZhR0Ywc2Q2WDBrdzB0ZzlnNlZUa2k4YStBV1V3dnJRMiszMUFERlBYbUF3RjhzcnVrNWUzZS9nVSs0MmlLMEkvM2ZZV3pnQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK1ZTSktlVys4WEZtV0szNDFjczBnT1kvd2U4QXd0MFRZZnpleFVQTzJQSFpBb1NlOE9Ua05iTzc5clZ3bjJxK0s1UThPSjVtaThQR2k5eHlTZVhpaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyNjI4MjUxMToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwNjE3NTVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ade💚",
  packname: process.env.PACK_NAME || "Ade💗",
  botname : process.env.BOT_NAME  || "ADEMOLA💚🔐",
  ownername:process.env.OWNER_NAME|| "Ademola💙",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Suhail-md"  ).toUpperCase(),



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
