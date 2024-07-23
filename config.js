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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_23_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDc3LFxuICAgICAgICA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY3LFxuICAgICAgICA2MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMixcbiAgICAgICAgMTk5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU4LFxuICAgICAgICA5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDczLFxuICAgICAgICAxODMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgODksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMixcbiAgICAgICAgMTExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMzLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM3LFxuICAgICAgICA3MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDeVlESDFieDFWNFVKVWJtTVdMdCsxY1ExcTNMOVVLR3duSjE2OW01eG93PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTcxNjkxMTI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwRTNFMDRDRDc0MjlFNjRENEQ3QjJFQkEwMUU0MTZDRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2MDA2MDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjU3MTY5MTEyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTYyQzA1NUFBMTdDQTQ3N0NCNjRDM0U5ODEzQUU1RDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNjAwNjA0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNvTkU1MUpwUk1PYjJvWm5qQWhPSkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTkxOGRlYjMtN2NjYy00ODI3LWE1NzMtNGQ5NTJkMWM3Y2E2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMwLFxuICAgICAgNTgsXG4gICAgICAxNzksXG4gICAgICAxODMsXG4gICAgICAxMCxcbiAgICAgIDQsXG4gICAgICAyLFxuICAgICAgMjIsXG4gICAgICAzNixcbiAgICAgIDE3NSxcbiAgICAgIDgsXG4gICAgICA3NCxcbiAgICAgIDQzLFxuICAgICAgMTgzLFxuICAgICAgMTg1LFxuICAgICAgODksXG4gICAgICAyMDcsXG4gICAgICA2MSxcbiAgICAgIDIsXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDEyMixcbiAgICAgIDIwNyxcbiAgICAgIDc0LFxuICAgICAgNTgsXG4gICAgICAxMDUsXG4gICAgICA0MyxcbiAgICAgIDMwLFxuICAgICAgMjIzLFxuICAgICAgMTEzLFxuICAgICAgOTIsXG4gICAgICAyMDQsXG4gICAgICAxNDYsXG4gICAgICAxNDQsXG4gICAgICAxMjIsXG4gICAgICAxODYsXG4gICAgICAyMzEsXG4gICAgICAyMDIsXG4gICAgICAyNDksXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJdkIzK29HRU5LVTlyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjBDZExnMlg2ZGpzcENOSTZnQkZWRTBBTmQyY2hYUmVycEpFazlxVDd0UkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVWZsWW0rMVc3cVpsRlZDVlJac2JYTXgxeGxLbU9zOVJLcVBpWHU3dm9teDMvSnAxRWdVaS9DRndKRG1qb3NOY0RDbitBc2U3Z1h3a2NCZTQ1VThxQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYXlxUFlhSy9Zbkhxb2VkdDFpWmpHc3pRdGVLdytSeXU2TUZkdGllSldUZEE0NmRQMU1nSTd5NHZUMHRGdDVUUEJ0NzlDYmhSTU9BSUZMZm1raVozQ0E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU3MTY5MTEyODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzU5MTQ2NDI3ODQzMjQ6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn6W58J+MuVRpZHnwn6aL8J+RhVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1NzE2OTExMjg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2MDA1OTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDNDJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUM0Mi5qc29uIjogIntcImtleURhdGFcIjpcIlg3eW8xVEM4bmZ0UlAvdldvZXU4OUVjOFcrS20yUTNocm5xWXE1Q0x4R3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgzNDQ3NTY1OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNjAwNjAwMTc4XCJ9Igp9"


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ade💚",
  packname: process.env.PACK_NAME || "Ade💗",
  botname : process.env.BOT_NAME  || "Hardeaymorlar💚",
  ownername:process.env.OWNER_NAME|| "TIDY💙",


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
