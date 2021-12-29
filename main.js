{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /** Connect to Moralis server */\
const serverUrl = "https://eaig3jkay6t0.usemoralis.com:2053/server";\
const appId = "EbxQk5MPw4KjX3V2ebN6awiJxLw6ExIBQSUbY2Cy";\
Moralis.start(\{ serverUrl, appId \});\
\
/** Add from here down */\
async function login() \{\
  let user = Moralis.User.current();\
  if (!user) \{\
   try \{\
      user = await Moralis.authenticate(\{ signingMessage: "Hello World!" \})\
      console.log(user)\
      console.log(user.get('ethAddress'))\
   \} catch(error) \{\
     console.log(error)\
   \}\
  \}\
\}\
\
async function logOut() \{\
  await Moralis.User.logOut();\
  console.log("logged out");\
\}\
\
document.getElementById("btn-login").onclick = login;\
document.getElementById("btn-logout").onclick = logOut;\
\
/** Useful Resources  */\
\
// https://docs.moralis.io/moralis-server/users/crypto-login\
// https://docs.moralis.io/moralis-server/getting-started/quick-start#user\
// https://docs.moralis.io/moralis-server/users/crypto-login#metamask\
\
/** Moralis Forum */\
\
// https://forum.moralis.io/\
}