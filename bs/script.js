$(function () {
    function Popup(options) {
        var popup = this;
        popup.overlay = $(options.overlay);
        popup.popupModal = $(options.popupModal);

        this.open = function(content) {
            popup.popupModal.html(content);
            popup.overlay.addClass('open');
            popup.popupModal.addClass('open');

        }
        this.close = function(){

            popup.overlay.removeClass('open');
            popup.popupModal.removeClass('open');
        }
        popup.overlay.on('click', function() {
            popup.close();
        });

    }
    var p = new Popup({
        overlay: '.overlay',
        popupModal: '.popup-modal'
    });

    var iframeVideo = $('.wrapper-player');
    $('.play').on('click', function(){
        var attr = $(this).attr('data-video');
        $('iframe').attr('src', attr);
        p.open(iframeVideo.html());
        resizeIframe();
    });
    console.log($('.close img'));

    $('.multiple-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    var attr1 = [];
    $('.play').each(function (){
        attr1.push($(this).attr('data-video').slice(-11));
    });
    var i = 0;
    $('.item1').each(function () {
        $(this).css('background', 'linear-gradient(rgba(0,0,0, 1), rgba(0, 0, 0, 0)),'+'url(https://img.youtube.com/vi/'+attr1[i++]+'/maxresdefault.jpg) center no-repeat');

    });
    $('.button-call-me').on('click', function (){
        var a = $('.wrapper-call-me');
        p.open(a.html());
        $('.close img').on('click', function (){
            p.close();
        });
    });

    function resizeIframe(){
        $('iframe').each(function() {
            var width = $(this).width ();
            $(this).css("height", width / 2.0777 + "px");
        });
    };
    $(window).resize(resizeIframe);

});
