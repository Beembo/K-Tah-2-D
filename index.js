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

const player = new Character(30, 30, "blue", 10, 0.05);
const enemies = [
  new Character(300, 0, "rgba(200, 0, 0, 0.5)", 15, 0.00000000000000000000000001),
  new Character(300, 300, "rgba(240, 0, 250, 0.5)", 17, 0.005),
  new Character(0, 300, "rgba(200, 250, 220, 0.5)", 30, 0.03),
  new Character(20, 400, "rgba(80,70,0,.7)", 12, 0.02)
];

let scarecrow;


function setup() {
  const canvas = createCanvas(600, 600);
  canvas.parent(document.querySelector("#game"));
  noStroke();
  loadImage('https://i.ibb.co/qMhSHrL/chaser-background.jpg', drawBackground);
  backgroundMusic.play();
}

function drawBackground(img) {
  image(img, 0, 0);
}

function draw() {
  background("rgba(252, 253, 254, 0.1)");
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
