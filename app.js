'use strict'



const switcher = document.querySelector('.btn');


switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Theme";
    }
    else {
        this.textContent = "Theme";
    }

});

function getRandomInt(max)
{
    return Math.floor(Math.random() * max) + 1;
}



const switcherng = document.querySelector('.rngbtn');

switcherng.addEventListener('click', function() {
    var x = getRandomInt(83);
    var fighter;

    fighter = NumToFighter(x);

    if(fighter == "FIX")
    {
    while(fighter == "FIX")
    {
        var x = getRandomInt(83);
        fighter = NumToFighter(x);
    }
}


    document.getElementById("demo").innerHTML = fighter;

});


function NumToFighter(x) 
{
    if(x == 1)
    {
        return "Mario";
    }
    if(x == 2)
    {
        return "Donkey Kong";
    }
    if(x == 3)
    {
        return "Link";
    }
    if(x == 4)
    {
        return "Samus / Dark Samus";
    }
    if(x == 5)
    {
        return "FIX";
    }
    if(x == 6)
    {
        return "Yoshi";
    }
    if(x == 7)
    {
        return "Kirby";
    }
    if(x == 8)
    {
        return "Fox";
    }
    if(x == 9)
    {
        return "Pikachu";
    }
    if(x == 10)
    {
        return "Luigi";
    }
    if(x == 11)
    {
        return "Ness";
    }
    if(x == 12)
    {
        return "Captain Falcon";
    }
    if(x == 13)
    {
        return "Jigglypuff";
    }
    if(x == 14)
    {
        return "Peach / Daisy";
    }
    if(x == 15)
    {
        return "FIX";
    }
    if(x == 16)
    {
        return "Bowser";
    }
    if(x == 17)
    {
        return "Ice Climbers";
    }
    if(x == 18)
    {
        return "Sheik";
    }
    if(x == 19)
    {
        return "Zelda";
    }
    if(x == 20)
    {
        return "Dr. Mario";
    }
    if(x == 21)
    {
        return "Pichu";
    }
    if(x == 22)
    {
        return "Falco";
    }
    if(x == 23)
    {
        return "Kazuya";
    }
    if(x == 24)
    {
        return "Marth / Lucina";
    }
    if(x == 25)
    {
        return "FIX";
    }
    if(x == 26)
    {
        return "Young Link";
    }
    if(x == 27)
    {
        return "Ganondorf";
    }
    if(x == 28)
    {
        return "Mewtwo";
    }
    if(x == 29)
    {
        return "Roy / Chrom";
    }
    if(x == 30)
    {
        return "FIX";
    }
    if(x == 31)
    {
        return "Mr. Game & Watch";
    }
    if(x == 32)
    {
        return "Meta Knight";
    }
    if(x == 33)
    {
        return "Pit / Dark Pit";
    }
    if(x == 34)
    {
        return "FIX";
    }
    if(x == 35)
    {
        return "Zero Suit Samus";
    }
    if(x == 36)
    {
        return "Wario";
    }
    if(x == 37)
    {
        return "Snake";
    }
    if(x == 38)
    {
        return "Ike";
    }
    if(x == 39)
    {
        return "Pokémon Trainer";
    }
    if(x == 40)
    {
        return "Diddy Kong";
    }
    if(x == 41)
    {
        return "Lucas";
    }
    if(x == 42)
    {
        return "Sonic";
    }
    if(x == 43)
    {
        return "King Dedede";
    }
    if(x == 44)
    {
        return "Olimar";
    }
    if(x == 45)
    {
        return "R.O.B";
    }
    if(x == 46)
    {
        return "Toon Link";
    }
    if(x == 47)
    {
        return "Wolf";
    }
    if(x == 48)
    {
        return "Villager";
    }
    if(x == 49)
    {
        return "Mega Man";
    }
    if(x == 50)
    {
        return "Wii Fit Trainer";
    }
    if(x == 51)
    {
        return "Rosalina & Luma";
    }
    if(x == 52)
    {
        return "Little Mac";
    }
    if(x == 53)
    {
        return "Greninja";
    }
    if(x == 54)
    {
        return "Mii fighter";
    }
    if(x == 55)
    {
        return "Palutena";
    }
    if(x == 56)
    {
        return "Pac-Man";
    }
    if(x == 57)
    {
        return "Robin";
    }
    if(x == 58)
    {
        return "Shulk";
    }
    if(x == 59)
    {
        return "Bowser Jr.";
    }
    if(x == 60)
    {
        return "Duck Hunt";
    }
    if(x == 61)
    {
        return "Ryu / Ken";
    }
    if(x == 62)
    {
        return "FIX";
    }
    if(x == 63)
    {
        return "Cloud";
    }
    if(x == 64)
    {
        return "Corrin";
    }
    if(x == 65)
    {
        return "Bayonetta";
    }
    if(x == 66)
    {
        return "Lucario";
    }
    if(x == 67)
    {
        return "Inkling";
    }
    if(x == 68)
    {
        return "Ridley";
    }
    if(x == 69)
    {
        return "FIX";
    }
    if(x == 70)
    {
        return "Richter / Simon";
    }
    if(x == 71)
    {
        return "King K. Rool";
    }
    if(x == 72)
    {
        return "Isabelle";
    }
    if(x == 73)
    {
        return "Incineroar";
    }
    if(x == 74)
    {
        return "Piranha Plant";
    }
    if(x == 75)
    {
        return "Joker";
    }
    if(x == 76)
    {
        return "Hero";
    }
    if(x == 77)
    {
        return "Banjo-Kazooie";
    }
    if(x == 78)
    {
        return "Terry Bogard";
    }
    if(x == 79)
    {
        return "Byleth";
    }
    if(x == 80)
    {
        return "Min Min";
    }
    if(x == 81)
    {
        return "Steve";
    }
    if(x == 82)
    {
        return "Sephiroth";
    }
    if(x == 83)
    {
        return "Pyra / Mythra";
    }
    
    
}