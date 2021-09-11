# SmashBrosRNG
Super Smash Bros Ultimate random character generator
- Echo fighters are combined to minimize duplicates (ex. simon and richter combined so there isn't 2x chance of getting them) <br>
      - Mii fighter is added <br>
      - Math.random javscript function is used for RNG instead of Super Smash Bros Ultimate PRNG (Pseudo Random Number Generator) which picks a seed when a lobby is created and does not refresh unless you exit the menu. <br>
      - Smash Bros PRNG chooses more character seeds directly and inversley based on amt. of hours played per character: the less you play a character the more chance you have of recieving it in "random" selection <br>
