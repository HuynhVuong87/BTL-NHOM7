app.controller("editorController", function($scope) {
  $scope.ctrl2 = "huynhnhon"
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var angleInDegrees = 0;
  var image = document.getElementById("imgPre")

  function drawRotated(degrees) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(degrees * Math.PI / 180);
    ctx.drawImage(image, -image.width / 2, -image.height / 2);
    ctx.restore();

  }

  $scope.resize = function() {
    $scope.width = canvas.width
    $scope.height = canvas.height
    console.log($scope.width)
    $('div#resize').modal()
    $scope.saveResize = function() {
      setSizeCanvas($scope.width, $scope.height)
      ctx.drawImage(image, 0, 0, $scope.width, $scope.height)
    }
  }

  $scope.rotate = function() {
    var newW = $('canvas').attr("width")
    var newH = $('canvas').attr("height")
    setSizeCanvas(newH, newW)
    angleInDegrees -= 90
    drawRotated(angleInDegrees);
  }

  function setSizeCanvas(w, h) {
    $('canvas').attr("width", w)
    $('canvas').attr("height", h)
    $('div.main').css({
      "width": Number(w) + 20 + "px"
    })
  }
})
