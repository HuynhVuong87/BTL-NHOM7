app.controller("editorController", function ($scope) {  
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
    $scope.rotate = function () {

        var newW = $('canvas').attr("width")
        var newH = $('canvas').attr("height")
        $('canvas').attr("width", newH)
        $('canvas').attr("height", newW)
        angleInDegrees-=90
        drawRotated(angleInDegrees);
    }
})