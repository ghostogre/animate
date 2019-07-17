function Arrow() {
  this.x = 0;
  this.y = 0;
  this.rotation = 0; // 角度
  this.color = '#ffff00';
}

// 原型上的方法
Arrow.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y); // 坐标移动到x和y
  context.rotate(this.rotation);
  context.lineWidth = 5;
  context.fillStyle = this.color;
  context.beginPath();
  context.moveTo(-50, -25);
  context.lineTo(0,-25);
  context.lineTo(0,-50);
  context.lineTo(50,0);
  context.lineTo(0,50);
  context.lineTo(0,25);
  context.lineTo(-50,25);
  context.closePath(); // 路径闭合
  context.stroke(); // 描边
  context.fill(); //填充
  context.restore();
}
