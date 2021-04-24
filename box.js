class Box {
    constructor(x,y,width,height) {
        options = {
            isStatic = true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
    }
    show(){
        rectMode(CENTER);
        fill(255,0,0);
        rect(x,y,width,height);
    }
}