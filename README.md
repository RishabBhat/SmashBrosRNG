# SmashBrosRNG
Super Smash Bros Ultimate random character generator

-Why this is more accurate than other random character generators:

-Echo fighters are combined to minimize duplicates (ex. Simon and Richter combined so there isn't 2x chance of getting them) 

-Mii fighter is added 

-Math.random javascript function is used for RNG instead of Super Smash Bros Ultimate PRNG (Pseudorandom Number Generator) which picks a seed when a lobby is created and does not refresh unless you exit the menu. 

-Smash Bros PRNG chooses more character seeds directly and inversely based on amt. of hours played per character: the less you play a character the more likely it is that you will receive it in "random" selection 
