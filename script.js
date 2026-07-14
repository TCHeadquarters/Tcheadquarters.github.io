/* ==========================================
   TC Headquarters
   Version 1.0 - Homecoming
   Build 001
========================================== */

window.onload = function () {

    // Greeting
    const greeting = document.getElementById("greeting");
    const today = document.getElementById("today");

    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {
        greeting.textContent = "☀️ Good Morning, Ashley!";
    } else if (hour < 17) {
        greeting.textContent = "🌤️ Good Afternoon, Ashley!";
    } else if (hour < 21) {
        greeting.textContent = "🌙 Good Evening, Ashley!";
    } else {
        greeting.textContent = "🏡 Welcome Home, Ashley!";
    }

    today.textContent = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });

    // Spotlight
    const family = [
        "Ashley 💜",
        "Michael ❤️",
        "Alec ⭐",
        "Jace 🦖",
        "Mama 🌸",
        "Yeh Yeh 🇭🇰"
    ];

    document.getElementById("spotlight").textContent =
        family[Math.floor(Math.random() * family.length)];

    // Daily Mission
    const missions = [
        "🍽️ Eat one meal together.",
        "🎲 Play a game together.",
        "📖 Read together for 15 minutes.",
        "🚶 Take a family walk.",
        "😂 Make someone laugh.",
        "📸 Take a family picture."
    ];

    document.getElementById("mission").textContent =
        missions[Math.floor(Math.random() * missions.length)];

    // Daily Spark
    const sparks = [
        "💜 Tell someone why you appreciate them.",
        "🇭🇰 Learn one Cantonese word.",
        "🥤 Drink a glass of water.",
        "🌟 Do one unexpected act of kindness.",
        "🤗 Give someone a hug."
    ];

    document.getElementById("dailySpark").textContent =
        sparks[Math.floor(Math.random() * sparks.length)];

    // Ribbit
    setupRibbit();

    // Aster
    setupAster();

};

const ribbitMessages = [

"🐸 Ribbit believes in Team Cheung!",

"🐸 Every adventure starts at home.",

"🐸 Someone deserves a hug today.",

"🐸 Pizza Night is getting closer!",

"🐸 You're making wonderful memories.",

"🐸 High fives earn invisible XP!",

"🐸 I checked the pond. Still wet.",

"🐸 Today feels lucky."

];

function setupRibbit(){

const frog =
document.getElementById("frog");

const message =
document.getElementById("ribbitMessage");

frog.addEventListener("click",function(){

frog.style.transform="scale(1.25)";

setTimeout(function(){

frog.style.transform="scale(1)";

},200);

const random =
Math.floor(Math.random()*ribbitMessages.length);

message.textContent =
ribbitMessages[random];

});

}

const funIdeas=[

"🐧 Everyone walks like penguins!",

"🤣 Tell your worst joke.",

"🎵 Dance for 30 seconds!",

"🦘 Hop across the room!",

"📸 Take the silliest selfie!",

"⭐ Give someone a compliment."

];

function randomFun(){

const random=
Math.floor(Math.random()*funIdeas.length);

document.getElementById("challenge").textContent=
funIdeas[random];

document.getElementById("frog").textContent="🤩🐸";

document.getElementById("ribbitMessage").textContent=
"🐸 THAT sounds awesome!";

}

function openSection(section){

if(section==="Team Wins"){

alert("🏆 Team Wins\n\nComing in Version 1.1!");

}

else{

alert("🚧 "+section+"\n\nComing Soon!");

}

}

const asterQuotes=[

"⭐ Hi Ashley! Need a brainstorm?",

"⭐ Family first.",

"⭐ You're doing an amazing job.",

"⭐ Small steps build big dreams.",

"⭐ Ribbit says hello!",

"⭐ I'm here whenever you need ideas."

];

function setupAster(){

const star=
document.getElementById("asterButton");

const windowBox=
document.getElementById("asterWindow");

const close=
document.getElementById("closeAster");

star.addEventListener("click",function(){

windowBox.style.display="block";

const quote=
asterQuotes[Math.floor(Math.random()*asterQuotes.length)];

windowBox.querySelector("p").textContent=quote;

});

close.addEventListener("click",function(){

windowBox.style.display="none";

});

}
