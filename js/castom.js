$(function  () {
    var open = $('.dropdown_content');
    var dropdown = $('.dropdown_c');
    // dropdown_open.hide();
    dropdown.click(function () {
        open.toggleClass('open');
    })
})