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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_15_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUwLFxuICAgICAgICAzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg4LFxuICAgICAgICA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDgzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNixcbiAgICAgICAgMTczLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc1LFxuICAgICAgICA5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDYxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgODEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDczLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQwLFxuICAgICAgICA3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM0LFxuICAgICAgICA1NyxcbiAgICAgICAgODksXG4gICAgICAgIDkzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYWJGT0NXbVdNUFU1QkZobnVuYnBjZVFaekxEV3c3blNUUEhSK3lvdWxZbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV05kQ3kxNWRRUXVob3VTR1dnRVdJQVwiLFxuICBcInBob25lSWRcIjogXCJiNzVjNzYxMC1mNTMwLTQ1N2ItOTg5OC0yNzdhYWU2YTE0YjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgOCxcbiAgICAgIDg1LFxuICAgICAgMjQ4LFxuICAgICAgODUsXG4gICAgICAxMzYsXG4gICAgICAxNjIsXG4gICAgICAxMTQsXG4gICAgICAxNjgsXG4gICAgICAxMTcsXG4gICAgICAxMTIsXG4gICAgICAxNjQsXG4gICAgICAxNTcsXG4gICAgICAxNTgsXG4gICAgICAyMTIsXG4gICAgICA1NSxcbiAgICAgIDIxMSxcbiAgICAgIDE3MCxcbiAgICAgIDIyLFxuICAgICAgOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAxMzksXG4gICAgICAyNTMsXG4gICAgICAxOTAsXG4gICAgICAxMjgsXG4gICAgICA0NyxcbiAgICAgIDE2LFxuICAgICAgMTkzLFxuICAgICAgOTMsXG4gICAgICAyMTYsXG4gICAgICAxNzYsXG4gICAgICAxODAsXG4gICAgICAxNTcsXG4gICAgICAxMDksXG4gICAgICAxNTAsXG4gICAgICAxNTYsXG4gICAgICAxNjksXG4gICAgICAxMjQsXG4gICAgICAyMzEsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzNkhWUzNINFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyMzI2NTA3NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MTEwMDYyNDE4MzUzNDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tPNDBxc0RFT2Y2d0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU1RTRThhNDdDUVk5ZEVmM2lZWmJVd0ZvbTlFdFdacW45MGI4TXdWUS9HQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIS0g1a1cyeExSdzdvR0cwYWlJZEtmZTExVkdKL01ab1ZuN1RLMVJXZHlCT0s4NCtCQlBLZzNMejNkM2xiSmlobEVkeGdnTjAyT1BBUHV4Nzl1c3NCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmOTJXUDVrSVJPZzZhLzlzLzZBV1Z6WEZ5VUFLcEV1Z0J1NHBiN1c5RkI3OFV2WTNKTXFQU1h6ZEsrbWhoTXN3WlhLNWdacmtHUGRJblBsOVl0aHBDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTIzMjY1MDc0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3Mjg5NDBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Hardeaymorlar-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Ademola",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
