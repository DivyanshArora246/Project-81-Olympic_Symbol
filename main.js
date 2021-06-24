canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "silver";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 10;
ctx.rect(135, 143, 400, 200 , 200 * Math.PI);
ctx.stroke();


canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(220, 200, 40, 5, 5 * Math.PI);
ctx.stroke();

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(265, 250, 40, 5, 5 * Math.PI);
ctx.stroke();

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(310, 200, 40, 5, 5 * Math.PI);
ctx.stroke();

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(355, 250, 40, 5, 5 * Math.PI);
ctx.stroke();

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(400, 200, 40, 5, 5 * Math.PI);
ctx.stroke();