class Box{
    constructor(x,y,w,h){
        var options = {
         restitution: 0.2199999999999999999999999999999999999999999999999999999,
         density: 2,
         friction:1
        }
        this.body= Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.width= w
        this.height = h
    }
    display(){
       push() 
        rectMode(CENTER)
        fill("black")
        translate(this.body.position.x,this.body.position.y)    
        rotate(this.body.angle)
        rect(0,0,this.width, this.height)
        pop()
    }
}