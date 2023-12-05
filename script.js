
var maxx = document.body.clientWidth;
var maxy = document.body.clientHeight;
var halfx = maxx / 2;
var halfy = maxy / 2;
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = maxx;
canvas.height = maxy;
var context = canvas.getContext("2d");
var dotCount = 200;
var dots = [];
for (var i = 0; i < dotCount; i++) {
  dots.push(new dot());
}


function render() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, maxx, maxy);
  
    for (var i = 0; i < dotCount; i++) {
      dots[i].draw();
      dots[i].move();
    }
  
    requestAnimationFrame(render);
  }

function dot() {
  
  this.rad_x = 2 * Math.random() * halfx + 1;
  this.rad_y = 1.2 * Math.random() * halfy + 1;
  this.alpha = Math.random() * 360 + 1;
  this.speed = Math.random() * 100 < 50 ? 1 : -1;
  this.speed *= 0.1;
  this.size = Math.random() * 5 + 1;
  this.color = Math.floor(Math.random() * 256);
  
}

dot.prototype.draw = function() {
  
  var dx = halfx + this.rad_x * Math.cos(this.alpha / 180 * Math.PI);
  var dy = halfy + this.rad_y * Math.sin(this.alpha / 180 * Math.PI);
  context.fillStyle = "rgb(" + this.color + "," + this.color + "," + this.color + ")";
  context.fillRect(dx, dy, this.size, this.size);
};


dot.prototype.move = function() {
  
  this.alpha += this.speed;
  if (Math.random() * 100 < 50) {
    this.color += 1;
  } else {
    this.color -= 1;
  }
  
};

render();

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("Login - Username: " + username);
}

function register() {
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
    var lastName = document.getElementById("lastName").value;
    var newUsername = document.getElementById("newUsername").value;
    var newEmail = document.getElementById("newEmail").value;
    var newPassword = document.getElementById("newPassword").value;
    console.log("Signup - First Name: " + firstName);
    console.log("Signup - Middle Name: " + middleName);
    console.log("Signup - Last Name: " + lastName);
    console.log("Signup - Username: " + newUsername);
    console.log("Signup - Email: " + newEmail);
    console.log("Signup - Password: " + newPassword);
}

function showSlide(slideId) {
    var slider = document.querySelector('.slider');

    if (slideId === 'loginSlide') {
        slider.style.transform = 'translateX(0)';
    } else if (slideId === 'signupSlide') {
        slider.style.transform = 'translateX(-50%)';
    }
}
