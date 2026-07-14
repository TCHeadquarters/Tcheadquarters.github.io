window.onload = function(){

// =====================
// Welcome Achievement
// =====================

if(!localStorage.getItem("welcomeHome")){

    localStorage.setItem(
        "welcomeHome",
        "Unlocked"
    );

    alert(
    "🏆 Achievement Unlocked!\n\n🏡 Welcome Home"
    );

}


// =====================
// Greeting
// =====================

const greeting =
document.getElementById("greeting");

const today =
document.getElementById("today");


const now = new Date();

const hour = now.getHours();


if(hour < 12){

    greeting.textContent =
    "☀️ Good Morning, Ashley";

}

else if(hour < 17){

    greeting.textContent =
    "🌤️ Good Afternoon, Ashley";

}

else if(hour < 21){

    greeting.textContent =
    "🌙 Good Evening, Ashley";

}

else{

    greeting.textContent =
    "🏡 Welcome Home, Ashley";

}


today.textContent =
now.toLocaleDateString(
"en-US",
{
weekday:"long",
month:"long",
day:"numeric"
}
);


// =====================
// Spotlight
// =====================

const family = [

"Ashley 💜",

"Michael ❤️",

"Alec ⭐",

"Jace 🦖",

"Mama 🌸",

"Yeh Yeh 🇭🇰"

];


document.getElementById(
"spotlight"
).textContent =

family[
Math.floor(Math.random()*family.length)
];


// =====================
// Daily Spark
// =====================

const sparks=[

"💜 Tell someone why you appreciate them.",

"🇭🇰 Learn one new Cantonese word.",

🥤 "Drink some water.",

"📸 Take a family picture.",

"😂 Make someone laugh.",

"🤗 Give someone a hug.",

"🌸 Thank Mama today.",

"🎵 Listen to a song together.",

"⭐ Do something kind."

];


document.getElementById(
"dailySpark"
).textContent =

sparks[
Math.floor(Math.random()*sparks.length)
];


// =====================
// Mission
// =====================

const missions=[

"🍽️ Eat one meal together.",

"🎲 Play a family game.",

"🧹 Complete a chore together.",

"📖 Read together.",

🚶 "Take a walk together.",

"💜 Say something nice to everyone."

];


document.getElementById(
"mission"
).textContent =

missions[
Math.floor(Math.random()*missions.length)
];

};


// =====================
// Ribbit
// =====================

const ribbitMessages=[

"🐸 Welcome home, Team Cheung!",

"🐸 Ribbit believes today is an adventure!",

"🐸 Did someone smile today?",

"🐸 Teamwork makes everything easier!",

"🐸 Pizza Night sounds amazing!",

"🐸 Every memory matters.",

"🐸 Ribbit approves this mission!",

"🐸 High five for Team Cheung!"

];


document.getElementById(
"frog"
).onclick=function(){


const message =

ribbitMessages[
Math.floor(Math.random()*ribbitMessages.length)
];


document.getElementById(
"ribbitMessage"
).textContent =
message;


};


// =====================
// Random Fun
// =====================

const funIdeas=[

"🐧 Penguin walk!",

"🤣 Tell your funniest joke.",

🎵 "Dance party for 30 seconds!",

"📸 Silly family picture!",

"🇭🇰 Learn a Cantonese word!",

"⭐ Give someone a compliment."

];


function randomFun(){

const idea =

funIdeas[
Math.floor(Math.random()*funIdeas.length)
];


document.getElementById(
"challenge"
).textContent =
idea;


}


// =====================
// Page Navigation
// =====================

function openSection(sectionName){

alert(
"🚧 "
+
sectionName
+
" is coming soon!"
);

}


// =====================
// ⭐ Aster
// =====================


const asterButton =
document.getElementById(
"asterButton"
);


const asterWindow =
document.getElementById(
"asterWindow"
);


asterButton.onclick=function(){

asterWindow.style.display="block";

};


document.getElementById(
"closeAster"
).onclick=function(){

asterWindow.style.display="none";

};
