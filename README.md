# Jojo's Bizarre Adventure

IE K'Tah the Second 

_(Disclaimer: not at all affliated with the creators of the long-running series "Jojo's Bizarre Adventure" but merely making a tribute game to it)_

Links:

https://codepen.io/dave-zhang/pen/JeaZQK

https://beembo.github.io/K-Tah-2-D/

A Small Game for CMSI 185.

This is a 2-D game based _somewhat_ off of the LMU [K'Tah](https://github.com/lmucs/ktah) senior project. I worked alone on this project albeit taking much inspiration from [_Skeleton Attack!_](https://mlouis2.github.io/chaser/) by Maddie Louis in terms of organizing files and looking up online resources. 

You are Jotaro, the _dashing_, circular, and blue rogue who must avoid the _dashing_ likewise circular minions of DIO. You will be able to deploy your STAND to hold off the minions for five seconds only. Do not let the enemies take you down or it is GAME OVER. Stay alive as long as you can. You may be able to reset the environment, but these enemies will never be the same each time. Be cautious, as even though you may immediately redeploy your STAND after 5 seconds, there is one particularily large, but quick foe always closing in on you...

Features:
  - Player Ellipse (Controlled by mouse movement)
  - Five Randomly-Generated Enemy Ellipses (Follows the player at different speeds and different colors with each Restart)
  - Health Meter (Max value at 100% which decreases when the player touches the enemy until 0%)
  - Decoy Model (Dummy model which distract enemies for 5 seconds
  - Background Sounds (Gameplay music and Game-Over sound effect)

Controls:
  - Movement: Player sprite moves towards the cursor
  - Mouse Click:
    - Deploys a decoy
  - "Rewind" Button:
    - Resets the game
