export default (ctx, fx=0, fy=0, fw=ctx.canvas.width, fh=ctx.canvas.height) => {
  
  let gradient;
  
  ctx.save();
  
  let fillNrestore = (ctx, gradient, fx, fy, fw, fh) => {
     ctx.fillStyle = gradiant;
     ctx.fillRect(fx, fy, fw, fh);
     ctx.restore();
  }
  
  return {
     linear (gx1, gy1, gx2, gy2, colorStops) {
       gradient = ctx.createLinearGradient(gx1, gy1, gx2, gy2);
       colorStops.forEach((colorStop) => gradiant.addColorStop(colorStop.position, colorStop.color));
       fillNrestore(ctx, gradient, fx, fy, fw, fh);
     },
     radial (x0, y0, r0, x1, y1, r1, colorStops) {
       gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
       colorStops.forEach((colorStop) => gradiant.addColorStop(colorStop.position, colorStop.color));
       fillNrestore(ctx, gradient, fx, fy, fw, fh);
     }
  }
  
}