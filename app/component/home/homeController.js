app.controller("homeController", function ($scope) {

    var dropZone = document.getElementById('drop-zone');

    var n = {
        layout: 'topRight',
        progressBar:true,
        theme: 'relax',
        type: 'success',
        closeWith: ['button']
    }

    var noty

    $scope.uploaded = false

    var startUpload = function (file) {

        noty? noty.close():
        $scope.$apply()
        console.log(file);

        var pro = 0
        var timer = setInterval(function () {
            pro++
            $('div.progress-bar').attr('aria-valuenow', pro).css('width', pro + "%");

            if (pro == 10) {}
            if (pro == 60) {
                clearInterval(timer);
            }

        }, 100)

        var settings = {
            // async: false,
            crossDomain: true,
            processData: false,
            contentType: false,
            type: 'POST',
            url: 'https://api.imgur.com/3/image',
            headers: {
                Authorization: 'Client-ID 03338436af088fa',
                Accept: 'application/json'
            },
            mimeType: 'multipart/form-data'
        };

        var formData = new FormData();
        formData.append("image", file);
        settings.data = formData;

        $.ajax(settings).done(function (response) {
            clearInterval(timer)
            var obj = JSON.parse(response)
            console.log(obj.data);
            pro = 100
            $('div.progress-bar').attr('aria-valuenow', 100).css('width', "100%");
            $scope.linkImage = obj.data.link
            $scope.uploaded = true
            $scope.$apply()
            n.text = obj.data.link
            noty = new Noty(n).show()           
        });

    }

    dropZone.ondrop = function (e) {
        e.preventDefault();
        this.className = 'upload-drop-zone';
        startUpload(e.dataTransfer.files[0])
    }
    $("#js-upload-files").on('change', function () {
        startUpload($(this).get(0).files[0])
    });

    $scope.uploadHandle = function () {
        $("#js-upload-files").trigger('click');
    }

    dropZone.ondragover = function () {
        this.className = 'upload-drop-zone drop';
        return false;
    }

    dropZone.ondragleave = function () {
        this.className = 'upload-drop-zone';
        return false;
    }
})