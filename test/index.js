var test = require('grape'),
    Notchy = require('../');

test('Set initial notch', function(t){
    t.plan(1);

    var notchy = new Notchy([0,10,20], 0);

    notchy.notch(0);

    t.equal(notchy.notch(), 0, 'initial value is correctly set');
});

test('Set initial notch to non-exact notch value', function(t){
    t.plan(1);

    var notchy = new Notchy([0,10,20], 0);

    notchy.notch(4);

    t.equal(notchy.notch(), 0, 'initial value is correctly set');
});

test('set past notch, below notchyness', function(t){
    t.plan(1);

    var notchy = new Notchy([0,10,20], 7);

    notchy.notch(0);

    notchy.notch(7);

    t.equal(notchy.notch(), 0, 'value is still in notch 0');
});

test('set past notch, above notchyness, and back, below notchyness', function(t){
    t.plan(1);

    var notchy = new Notchy([0,10,20], 7);

    notchy.notch(0);

    notchy.notch(10);

    notchy.notch(4);

    t.equal(notchy.notch(), 10, 'value is still in notch 10');
});

test('extreme notchyness', function(t){
    t.plan(1);

    var notchy = new Notchy([0,10,20], 15);

    notchy.notch(0);

    notchy.notch(13);

    t.equal(notchy.notch(), 0, 'value is still in notch 0');
});

test('set past notch, below notchyness', function(t){
    t.plan(1);

    var notchy = new Notchy([0,10,20], 15);

    notchy.notch(0);

    notchy.notch(17);

    t.equal(notchy.notch(), 20, 'value has jumped to notch 20');
});