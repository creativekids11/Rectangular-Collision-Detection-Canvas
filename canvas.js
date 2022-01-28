var canvas=document.querySelector("canvas")
var c=canvas.getContext("2d")

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

mouse={
    x: undefined,
    y: undefined
}

colorArray=[
    '#2E333D',
    '#07AED7',
    '#F58167',
    '#FB404D',
    '#F3F5F1'
]

window.addEventListener('mousemove',function(event) {
    mouse.x=event.x
    mouse.y=event.y
})

addEventListener('resize',function() {
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
})

function randomInt(start,end) {
    return Math.floor(Math.random()*end+start)
}

function Sqr(x,y,w,h,color) {
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.color=color;

    this.show=function() {
        c.fillStyle=color
        c.fillRect(this.x,this.y,this.w,this.h)
    }
}

var sq1;
var sq2;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    sq1X=innerWidth/2-50;
    sq1Y=innerHeight/2-50;

    sq1=new Sqr(innerWidth/2-50,innerHeight/2-50,100,100,"#49acfc")
    sq1.show()
    sq2=new Sqr(mouse.x,mouse.y,100,100,"#eb4334")
    sq2.show()

    if (
        mouse.x+100>=sq1X && mouse.x<=sq1X+100 && mouse.y+100>=sq1Y && mouse.y<=sq1Y+100
        ) {
        console.log("collides")
        sq1=new Sqr(innerWidth/2-50,innerHeight/2-50,100,100,"#eb4334")
        sq1.show()
    } else {
        sq1=new Sqr(innerWidth/2-50,innerHeight/2-50,100,100,"#49acfc")
        sq1.show()
    }
}

animate();
