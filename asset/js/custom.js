$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');
    





    $('.subsidebar_collaspe_btn').on('click',function(){
        $('.subsidebar_collaspe_btn i').toggleClass('fa-angle-right fa-angle-left');
        $('.sub_sidebar').toggleClass('toggle');
        $('.main_content_wrapper').toggleClass('toggle');
    })


    



});