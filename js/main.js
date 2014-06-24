$(document).ready(function() {
    $("#magret").click(function() {
        $("#magret .description").show(1);;
    });
    $('.close').click(function() {
        $('.description').slideUp(100);
        return false;
    });


});



