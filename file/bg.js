(function(w) {
    function initBgVideo() {
        let random = window.getRandom(['6', "7", "8", "9", "10"]);
        var video = document.getElementById('video_source');
        let src = "../file/" + random + ".mp4";
        video.src = src;
        document.getElementById('video_bg').load();
    }

    function initBg() {
        var video = document.getElementById('video_bg');
        var gif = document.getElementById('gif_bg');
        if (window.isIOS()) {
            video.style.display = "none";
            gif.style.display = "block";
        } else {
            initBgVideo();
            gif.style.display = "none";
            video.style.display = "block";
            video.playbackRate = 1;
        }
    }

    function init() {
        initBg();
    }
    window.addEventListener("DOMContentLoaded", init, !1);
})(window);
