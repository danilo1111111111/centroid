const canvas = document.getElementById('centroidCanvas');
const ctx = canvas.getContext('2d');
let points = [];

function generatePoints() {
    points = [];
    for (let i = 0; i < 10; i++) {
        points.push({
            x: Math.random() * (canvas.width - 40) + 20,
            y: Math.random() * (canvas.height - 40) + 20
        });
    }
    draw();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!points.length) return;
    let cx = 0, cy = 0;
    points.forEach(p => { cx += p.x; cy += p.y; });
    cx /= points.length;
    cy /= points.length;

    points.forEach(p => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(cx, cy);
        ctx.strokeStyle = '#0078d7';
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, 2 * Math.PI);
        ctx.fillStyle = '#ff5722';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.stroke();
    });

    ctx.beginPath();
    ctx.arc(cx, cy, 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#00e676';
    ctx.fill();
    ctx.strokeStyle = '#222';
    ctx.lineWidth = 3;
    ctx.stroke();
}

generatePoints();
