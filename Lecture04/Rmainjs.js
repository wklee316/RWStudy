var canvas = document.getElementById("game");
var context = canvas.getContext('2d');

class player{
    constructor(x,y,r,c){
        this.posX = x;
        this.posY = y;
        this.raidus = r;
        this.color = c;
    }

    draw()
    {
        context.beginPath();
        context.arc(this.posX, this.posY, this.raidus, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
    }

}

class bullet{
    constructor(x,y,w,h,c){
        this.posX = x;
        this.posY = y;
        this.width = w;
        this.height = h;
        this.color = c;
    }

    draw()
    {
        
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.posX - this.width/2, this.posY - this.height/2, this.width, this.height);
    }
}

canvas.addEventListener("click", function(event){
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    var Rbullet = new bullet(x,y,20,20,'black');
    Rbullet.draw();
});



var Rplayer = new player(200,150,30,'yellow');

Rplayer.draw();


