let Ball = function(ballType) {
    this.ballType = ballType || 'regular';
};

let Ball2 = function(ballType = "regular") {
    this.ballType = ballType;
};

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"