{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function generatePrompt() \{\
  const site = document.getElementById('site').value;\
  const search = document.getElementById('search').value;\
  const tone = document.getElementById('tone').value;\
  const duration = document.getElementById('duration').value;\
  const audience = document.getElementById('audience').value;\
  const objective = document.getElementById('objective').value;\
  const platform = document.getElementById('platform').value;\
\
  const prompt = `\
Je souhaite un script pour une vid\'e9o destin\'e9e aux r\'e9seaux sociaux.\
- Lien du site : $\{site\}\
- Autorisation de recherche compl\'e9mentaire : $\{search\}\
- Ton souhait\'e9 : $\{tone\}\
- Dur\'e9e de la vid\'e9o : $\{duration\}\
- Public cible : $\{audience\}\
- Objectif de la vid\'e9o : $\{objective\}\
- Plateformes pr\'e9vues : $\{platform\}\
  `;\
\
  document.querySelector('#result p').innerText = prompt;\
\}\
}