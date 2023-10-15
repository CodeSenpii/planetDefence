class Planet {
    constructor(game){
        this.game = game;
        this.spriteWidth = 100;
        this.spriteHeight = 100;
        this.x = game.width * 0.5;
        this.y = game.height * 0.5;
        this.radius = 80;
        this.image = document.getElementById('planet');
        this.image.src = 'assets/planet.png';
    }
    draw(context){
        context.beginPath();
        
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.drawImage(this.image, this.x - this.spriteWidth, this.y - this.spriteHeight )
        context.stroke();
    }
}

class Game {
    constructor(canvas){
        this.width = canvas.width;
        this.height = canvas.height;

        this.planet = new Planet(this);
        this.mouse = {
            x:0,
            y:0
        }

        window.addEventListener('mouseover', (e) => {
            this.mouse.x = e.offsetX;
            this.mouse.y = e.offsetY;
        })
        
        
    }
    
    render(context){
        this.planet.draw(context);
        context.beginPath();
        context.moveTo(this.planet.x, this.planet.y);
        context.lineTo(this.mouse.x, this.mouse.y);
        context.stroke();
    }

    
}


window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 800;
    ctx.strokeStyle = 'red';
    ctx.linewidth = 2;

    const game = new Game(canvas);

    function animate(){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        game.render(ctx);
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
    

})