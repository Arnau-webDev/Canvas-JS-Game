
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

console.log(ctx);

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

const x = canvas.width / 2;
const y = canvas.height / 2;

const player = new Player(x, y, 20, "blue");

// const projectile = new Projectile(canvas.width / 2, canvas.height / 2, 5, "red", { x: 1, y: 1 });
// const projectile2 = new Projectile(canvas.width / 2, canvas.height / 2, 5, "green", { x: -1, y: -1 });

const projectiles = [];

function animate() {
    requestAnimationFrame(animate); // Same as setInterval
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.draw();

    projectiles.forEach(projectile => {
        projectile.update();
    })
}

animate();

window.addEventListener("click", (e) => {
    const angle = Math.atan2(e.clientY - canvas.height / 2, e.clientX - canvas.width / 2);
    console.log(angle);
    const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
    }

    projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, 5, "red", velocity));
})

