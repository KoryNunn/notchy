# Notchy

A simple number binning module. Emulates the flap on a wheel-of-fortune-like wheel

like this: http://www.wikihow.com/Build-a-Wheel-of-Fortune-Wheel

# Usage

Install

    npm install notchy

Signature:

    var notchy = new Notchy(array of notches, minimum value to jump out of current notch);

Then in code:

    var Notchy = require('notchy');

    var notchy = new Notchy([0,10,20], 7);

    // Set the initial notch:
    notchy.notch(0);

    // Get the current notch:
    notchy.notch(); // -> 0

    // Set the notch to a value closer to the next notch, but not high enough for the notch to change:
    notchy.notch(7);

    // Get the current notch:
    notchy.notch(); // -> 0

    // Set the notch to a value closer to the next notch, AND high enough for the notch to change:
    notchy.notch(9);

    // Get the current notch:
    notchy.notch(); // -> 10