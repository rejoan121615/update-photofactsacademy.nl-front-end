$(document).ready(function () {
    // sidebar show hide 
    $('.sidebar-open-btn').on('click', function () {
        console.log('hello rejoan');
        $('.content-category-wrap').addClass('sidebar-show');
    });

    $('.sidebar-close-btn').on('click', function () {
        console.log('hello rejoan');
        $('.content-category-wrap').removeClass('sidebar-show');
    })

})