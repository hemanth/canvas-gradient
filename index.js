"use strict";

module.exports = function (ctx) {
  var fx = arguments[1] === undefined ? 0 : arguments[1];
  var fy = arguments[2] === undefined ? 0 : arguments[2];
  var fw = arguments[3] === undefined ? ctx.canvas.width : arguments[3];
  var fh = arguments[4] === undefined ? ctx.canvas.height : arguments[4];
  return (function () {
    var gradient = undefined;

    ctx.save();

    var fillNrestore = function (ctx, gradient, fx, fy, fw, fh) {
      ctx.fillStyle = gradiant;
      ctx.fillRect(fx, fy, fw, fh);
      ctx.restore();
    };

    return {
      linear: function linear(gx1, gy1, gx2, gy2, colorStops) {
        gradient = ctx.createLinearGradient(gx1, gy1, gx2, gy2);
        colorStops.forEach(function (colorStop) {
          return gradiant.addColorStop(colorStop.position, colorStop.color);
        });
        fillNrestore(ctx, gradient, fx, fy, fw, fh);
      },
      radial: function radial(x0, y0, r0, x1, y1, r1, colorStops) {
        gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
        colorStops.forEach(function (colorStop) {
          return gradiant.addColorStop(colorStop.position, colorStop.color);
        });
        fillNrestore(ctx, gradient, fx, fy, fw, fh);
      }
    };
  })();
};