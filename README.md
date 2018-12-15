# Jojo's Bizarre Adventure

I.E. K'Tah the Second (Disclaimer: not at all claiming the title series of "Jojo's Bizarre Adventure")

Links:

https://codepen.io/dave-zhang/pen/JeaZQK

https://beembo.github.io/K-Tah-2-D/

A Small Game for CMSI 185.

This is a 2-D game based _somewhat_ off of the LMU [K'Tah](https://github.com/lmucs/ktah) senior project. I worked alone on this project albeit taking much inspiration from [_Skeleton Attack!_](https://mlouis2.github.io/chaser/) by Maddie Louis in terms of organizing files and looking up online resources. 

You are Jotaro, the dashing blue player who must avoid the minions of DIO. You will be able to deploy your STAND to hold off the minions for five seconds only. Do not let the enemies take you down or it is GAME OVER. Stay alive as long as you can.

Features:
  - Player Ellipse (Controlled by mouse movement)
  - Randomly-Colored Enemy Ellipses (Follows the player at different speeds)
  - Health Meter (Max value at 100% which decreases when the player touches the enemy until 0%)
  - Decoy Model (Dummy model which distract enemies for 5 seconds
  - Background Sounds (Gameplay music and Game-Over sound effect)

Controls:
  - Movement: Player sprite moves towards the cursor
  - Mouse Click:
    - Deploys a decoy
  - "Rewind" Button:
    - Resets the game
