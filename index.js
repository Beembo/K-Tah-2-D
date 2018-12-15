class Character {
  constructor(x, y, color, radius, speed) {
    Object.assign(this, { x, y, radius, color, speed });
  }

  draw() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2);
  }
  move(target) {
    this.x += (target.x - this.x) * this.speed;
    this.y += (target.y - this.y) * this.speed;
  }
}

let lifeBar = document.querySelector("#life");

function randomSpeed() {
  let speed = Math.random() * 0.04 + 0.005;
}

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return [red, green, blue];
}

const player = new Character(30, 30, "blue", 10, 0.05);
const enemies = [
  new Character(
    Math.random(),
    Math.random(),
    randomColor(),
    15,
    Math.random() * 0.03
  ),
  new Character(
    Math.random(),
    Math.random(),
    randomColor(),
    17,
    Math.random() * 0.04
  ),
  new Character(
    Math.random(),
    Math.random(),
    randomColor(),
    30,
    Math.random() * 0.06
  ),
  new Character(
    Math.random(),
    Math.random(),
    randomColor(),
    12,
    Math.random() * 0.02
  ),
  new Character(Math.random(), Math.random(), "gold", 50, Math.random() * 0.1)
];

let scarecrow;
let img;

function preload() {
  // load image
  img = loadImage("https://i.ibb.co/qMhSHrL/chaser-background.jpg");
}

function setup() {
  const canvas = createCanvas(600, 600);
  canvas.parent(document.querySelector("#game"));
  noStroke();

  backgroundMusic.play();
}

function draw() {
  background(254);
  image(img, 0, 0);
  tint(255, 220);
  player.draw();
  player.move({ x: mouseX, y: mouseY }, 0.05);
  enemies.forEach(enemy => enemy.draw());
  enemies.forEach(enemy => enemy.move(scarecrow || player));
  if (scarecrow) {
    scarecrow.draw();
    scarecrow.ttl--;
    if (scarecrow.ttl < 0) {
      scarecrow = undefined;
    }
  }
  adjustEnemies();
  if (lifeBar.value <= 0) {
    // TODO: Message game over
    noLoop();
    gameOverSequence();
  }
}

function adjustEnemies() {
  const characters = [player, ...enemies];
  for (let i = 0; i < characters.length; i++) {
    for (let j = i + 1; j < characters.length; j++) {
      pushOff(characters[i], characters[j]);
    }
  }
}

function pushOff(c1, c2) {
  let [dx, dy] = [c2.x - c1.x, c2.y - c1.y];
  const distance = Math.hypot(dx, dy);
  let overlap = c1.radius + c2.radius - distance;
  if (overlap > 0) {
    if (c1 === player) {
      lifeBar.value -= 0.5;
    }
    const adjustX = overlap / 2 * (dx / distance);
    const adjustY = overlap / 2 * (dy / distance);
    c1.x -= adjustX;
    c1.y -= adjustY;
    c2.x += adjustX;
    c2.y += adjustY;
  }
}

function mouseClicked() {
  if (!scarecrow) {
    scarecrow = new Character(player.x, player.y, "white", 10, 0);
    scarecrow.ttl = frameRate() * 5;
  }
}

function gameOverSequence() {
  background("rgba(200,200,0,0.1)");
  textAlign(CENTER);
  textFont("Chalkduster");
  textSize(40);
  fill("white");
  text("YOU'VE LOST MY FRIEND!", width / 2, height / 2);
  textFont("Chalkduster");
  textSize(20);
  text("Perhaps, I overestimated you...", 300, 250);
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
  video.play();
}
