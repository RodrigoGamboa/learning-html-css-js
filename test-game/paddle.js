export default class Paddle {
    //Le vamos a pasar el GAME_WIDTH y GAME_HEIGHT del sketch.js
    constructor(gameWidth, gameHeight) {
        //Guardamos el ancho del canvas que recibimos solo para utilizarlo en el if del update
        this.gameWidth = gameWidth; 

        //Definimos un tamaño del paddle
        this.width = 150;
        this.height = 30;

        //Definimos una velocidad maxSpeed, que es el factor de incremento que tiene la posición 
        //del paddle.
        //La variable speed va a tomar el valor de maxSpeed dependiendo de que tecla se presione, 
        //y será el incremento que cambie la posición.
        this.maxSpeed = 10;
        this.speed = 0;

        //Definimos la posición x,y como objetos para pdoer hacer referencia a ellos más rápido y 
        //mover el paddle fácilmente. 
        this.position = {
            x: gameWidth/2 - this.width/2,
            y: gameHeight - this.height - 10
        };
    }


    //Definimos métodos para movimiento con el teclado
    moveLeft() {
        this.speed = -this.maxSpeed;
    }
    moveRight() {
        this.speed = this.maxSpeed;
    }
    //Detener
    stop() {
        this.speed = 0;
    }




    //Method for drawing the paddle. It needs the context so we pass it as an argument.
    draw(ctx) {
        //Dibuja el rectángulo en x, y, w, h
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    //Método para actualizar el movimiento del paddle. Recibe un deltaTime que es cuanto tiempo
    //ya pasó desde el último update.
    update(deltaTime) {
        // if(!deltaTime) return; //Si no está preparado el deltaTime. Es para que no falle 
        //el programa. Esto ya no se necesita cuando se quita el gameLoop(); del sketch y se coloca
        //el requestAnimationFrame(gameLoop);
        //Moviendo el paddle 5px solo como prueba
        // this.position.x += 5 / deltaTime;
        
        //Aquí cambiamos la posición del paddle utilizando como increment speed.
        this.position.x += this.speed;
        //Colocamos límites para que la barra no se salga de los bordes.
        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.gameWidth) {
            this.position.x = this.gameWidth - this.width;
        }            
    }

}