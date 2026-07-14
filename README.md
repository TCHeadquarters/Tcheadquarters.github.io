<!--
========================================================

                🏡 TC Headquarters
              Version 1.0 - Homecoming
                   Build 001

             Created by Team Cheung

          💜 Creative Director
             Ashley Cheung

       🐸 Chief Happiness Officer
                Ribbit

         ⭐ Chief Ideas Officer
                Aster

             One Team.
             One Home.

      "Home is our favorite adventure."

========================================================
-->

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="style.css">

</head>

<body>

<div class="container">

<header>

<h1>🏡 TC Headquarters</h1>

<h2 id="greeting">
Welcome Home!
</h2>

<p id="today"></p>

<p class="motto">

One Team.
One Home.

</p>

</header>

<section class="xp-card">

<h3>⭐ Team XP</h3>

<div class="xp-bar">

<div class="xp-fill"></div>

</div>

<p>

Level 1 • Next Reward:
🍕 Pizza Night

</p>

</section>

<section class="card"> 

    <h3>❤️ Family Dashboard</h3>

    <p>❤️ Michael — 💼 Working Tonight</p>

    <p>⭐ Alec — ⚽ Soccer Practice Soon</p>

    <p>🦖 Jace — 🦕 Dinosaur of the Day: Stegosaurus</p>

    <p>🌸 Mama — 😊 Spread a Smile Today</p>

    <p>🇭🇰 Yeh Yeh — 📖 Cantonese Word: 你好 (Hello)</p>

</section>

<section class="card"> 

<h3>🌟 Spotlight</h3>

<p id="spotlight"></p>

</section>

<section class="card">

<h3>🎯 Today's Mission</h3>

<p id="mission"></p>

</section>

<section class="card">

<h3>✨ Daily Spark</h3>

<p id="dailySpark"></p>

</section>

<section class="buttons">

<button onclick="openSection('Calendar')">

📅 Calendar

</button>

<button onclick="openSection('Chores')">

✅ Chores

</button>

<button onclick="randomFun()">

🎲 Random Fun

</button>

<button onclick="openSection('Ideas')">

💡 Ideas

</button>

<button onclick="openSection('Team Wins')">

🏆 Team Wins

</button>

<button onclick="openSection('Vault')">

🏠 Vault

</button>

</section>

<section class="pond">

<div id="frog">

😊🐸

</div>

<p id="ribbitMessage">

Welcome Home, Team Cheung!

</p>

</section>

<section class="card">

<h3>🎉 Random Challenge</h3>

<p id="challenge">

Press Random Fun!

</p>

</section>

<footer>

<p>

🏡 Homecoming • Version 1.0

</p>

<p>

Made with ❤️ by Team Cheung

</p>

</footer>

</div>

<!-- ⭐ Aster Button -->

<button id="asterButton">

⭐

</button>

<div id="asterWindow">

<h2>

⭐ Hello!
I'm Aster.

</h2>

<p>

Welcome Home.

How can I help today?

</p>

<button>

🏡 Organize My Day

</button>

<button>

🎲 Family Activity

</button>

<button>

🍕 Dinner Ideas

</button>

<button>

📅 Calendar

</button>

<button>

💡 Brainstorm

</button>

<button>

❤️ Family Time

</button>

<button id="closeAster">

Close

</button>

</div>

<script src="script.js"></script>

</body>

</html>
