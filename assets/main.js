function adjustImg(a) {
  var b = document.getElementsByTagName(a),
      c = parseInt(window.getComputedStyle(document.body).getPropertyValue("line-height")),
      d = c / 2;
  for (i = 0; i < b.length; i++) {
    var e = b[i].offsetWidth / b[i].offsetHeight, f = b[i].offsetWidth / e, g = Math.round(f / d), h = d * g;
    b[i].style.height = h + "px";
  }
}

window.addEventListener("load", function() {
  adjustImg("img");
}, false);
