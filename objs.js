function Circle(x, y, r){
    this.body  = Bodies.circle(x, y, r);
    this.r = r;
    Composite.add(world, this.body);
    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        
        translate(pos.x, pos.y);

        ellipseMode(CENTER);

        strokeWeight(1);
        stroke(255);
        fill(127)

        ellipse(0, 0, 2*this.r, 2*this.r);
        pop();
    }

}

function Rectangle(x, y, w, h, c){
    this.body  = Bodies.rectangle(x, y, w, h);
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    Composite.add(world, this.body);

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);

        strokeWeight(1);
        stroke(255);
        fill(c)

        rect(0, 0, this.w, this.h);
        pop();
    }

}



function RectSprite(x, y, w, h, img){
    this.body  = Bodies.rectangle(x, y, w, h);
    this.w = w;
    this.h = h;
    this.img = loadImage(img);
    Composite.add(world, this.body);
    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        // rotate(angle);
        imageMode(CENTER);

        image(this.img, 0, 0, this.w, this.h);
        pop();
    }

}

function CircleSprite(x, y, r, img){
    this.body  = Bodies.circle(x, y, r);
    this.r = r;
    this.img = loadImage(img);
    Composite.add(world, this.body);
    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        
        translate(pos.x, pos.y);

        imageMode(CENTER);

        image(this.img, 0, 0, 2*this.r, 2*this.r);
        pop();
    }

}

function Ground(x, y, w, h, c){
    this.body  = Bodies.rectangle(x, y, w, h, { isStatic: true });
    this.w = w;
    this.h = h;
    Composite.add(world, this.body);
    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);

        strokeWeight(1);
        stroke(255);
        fill(c)

        rect(0, 0, this.w, this.h);
        pop();
    }
}