class Ground {

    constructor(x,y,w,h) {

        var opt = {
            isStatic : true
        }


        this.body = Bodies.rectangle(x,y,w,h,opt)
        this.width = w
        this.height = h
        World.add(world,this.body)
        


    }

    display() {
        fill("yellow")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }

}

