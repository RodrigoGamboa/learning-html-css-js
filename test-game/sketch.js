import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';

let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d'); //Lo vamos a utilizar mucho

//Constantes para el tamaño de la pantalla
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;



// ctx.clearRect(0, 0, 800, 600);  //Clear the screen. We have to clear every frame.

//Dibujando un rectángulo
// ctx.fillStyle = 'red';  
// ctx.fillRect(20, 20, 100, 100); //Dibujando un rectángulo

//Creando un nuevo paddle con la clase Paddle, le pasamos el tamaño de la pantalla.
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
//Utilizando el método draw de paddle, tenemos que pasarle ctx.
// paddle.draw(ctx);

//Utilizando un nuevo InputHandler y pasandole un paddle para relacionar el keyboard con
//el movimiento del paddle.
new InputHandler(paddle);

let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);



//Creando un gameLoop. Necesitamos pedirle al navegador (requestAnimationFrame) que se define:
//"You should call this method whenever you're ready to update your animation onscreen".
let lastTime = 0;
//El gameLoop runs everyframe
function gameLoop(timestamp) {
    //timestamp es básicamente el currentTime.
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    //Clear the screen
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    ball.update(deltaTime);
    ball.draw(ctx);


    requestAnimationFrame(gameLoop);
}
//Ejecutamos el gameLoop. E
// gameLoop();  //Esta parte se puede reemplazar colocando de nuevo el requestAnimationFrame.
requestAnimationFrame(gameLoop);
