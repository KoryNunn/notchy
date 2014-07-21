
function getNotchForValue(notches, value){
    var closestNotch;

    for(var i = 0; i < notches.length; i++){
        var currentNotch = notches[i];
        if(Math.abs(currentNotch - value) < (closestNotch != null ? Math.abs(closestNotch - value) : Infinity)){
            closestNotch = currentNotch;
        }
    }

    return closestNotch;
}


function Notchy(notches, notchyness){
    this._notches = notches;
    this._notchyness = notchyness;
}
Notchy.prototype.notch = function(value){
    if(value == null){
        return this._currentNotch;
    }

    if(isNaN(value)){
        throw "Invalid value. value must not be NaN.";
    }

    var closestNotch = getNotchForValue(this._notches, value);

    if(this._currentNotch == null){
        this._currentNotch = closestNotch;
    }else{
        if(Math.abs(this._currentNotch - value) > this._notchyness){
            this._currentNotch = closestNotch;
        }
    }

    return this._currentNotch;
};

module.exports = Notchy;