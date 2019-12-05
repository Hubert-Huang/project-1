(function($){
    $('.btn-close').on('click',function(){
        $('.all').fadeOut();
    });
    $('.about').on('click',function(){
        $(location).attr('href', 'https://tenmax.io');
    })
})($);