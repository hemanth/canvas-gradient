"use strict";

module.exports = function (ctx, gx1, gy1, gx2, gy2, colorStops) {
  var fx = arguments[6] === undefined ? 0 : arguments[6];
  var fy = arguments[7] === undefined ? 0 : arguments[7];
  var fw = arguments[8] === undefined ? ctx.canvas.width : arguments[8];
  var fh = arguments[9] === undefined ? ctx.canvas.height : arguments[9];
  return (function () {
    var gradiant = undefined;

    ctx.save();

    gradiant = ctx.createLinearGradient(gx1, gy1, gx2, gy2);

    colorStops.forEach(function (colorStop) {
      return gradiant.addColorStop(colorStop.position, colorStop.color);
    });

    ctx.fillStyle = gradiant;
    ctx.fillRect(fx, fy, fw, fh);
    ctx.restore();
  })();
};