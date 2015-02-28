export default (ctx, gx1, gy1, gx2, gy2, colorStops, fx=0, fy=0, fw=ctx.canvas.width, fh=ctx.canvas.height) => {
  
  let gradiant;
  
  ctx.save();
  
  gradiant = ctx.createLinearGradient(gx1, gy1, gx2, gy2);

  colorStops.forEach((colorStop) => gradiant.addColorStop(colorStop.position, colorStop.color));

  ctx.fillStyle = gradiant;
  ctx.fillRect(fx, fy, fw, fh);
  ctx.restore();
}