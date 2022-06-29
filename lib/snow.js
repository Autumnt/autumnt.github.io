var snow = {
  info: {
    top: 0,
    left: 0,
    zIndex: 500,
    number: 300
  },
  down: function () {
    var f = window.innerWidth;
    var g = window.innerHeight;
    var d = document.createElement("canvas");
    d.style.position = "fixed";
    d.style.pointerEvents = "none";
    d.style.top = snow.info.top + "px";
    d.style.left = snow.info.left + "px";
    d.style.zIndex = -1;
    d.width = f;
    d.height = g;
    document.body.appendChild(d);
    var c = [];
    for (var a = 0; a < snow.info.number; a++) {
      c.push({
        x: Math.random() * f,
        y: Math.random() * g,
        r: Math.random() * 4 + 1,
        n: Math.random() * 300
      })
    }
    var b = d.getContext("2d");
    var e = 0;
    setInterval(function () {
        b.clearRect(0, 0, f, g);
        b.fillStyle = "rgba(255, 174, 185, 0.6)";
        b.shadowBlur = 5;
        b.shadowColor = "rgba(255, 174, 185, 0.9)";
        b.beginPath();
        for (var j = 0; j < 300; j++) {
          var h = c[j];
          b.moveTo(h.x, h.y);
          b.arc(h.x, h.y, h.r, 0, Math.PI * 2, 0)
        }
        b.fill();
        e += 0.01;
        for (var j = 0; j < 300; j++) {
          var h = c[j];
          h.y += Math.cos(e + h.n) + h.r / 2;
          h.x += Math.sin(e) * 2;
          if (h.x > f + 5 || h.x < -5 || h.y > g) {
            c[j] = j % 3 > 0 ? {
              x: Math.random() * f,
              y: -10,
              r: h.r,
              n: h.n
            } : Math.sin(e) > 0 ? {
              x: -5,
              y: Math.random() * g,
              r: h.r,
              n: h.n
            } : {
              x: f + 5,
              y: Math.random() * g,
              r: h.r,
              n: h.n
            }
          }
        }
      },
      15)
  }
};
