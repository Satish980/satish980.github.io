$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() >  0){
            $('.top').show();
        }
        else{
            $('.top').hide();
        }
    })
})

function sendMail(event){
  // event.preventDefault();
  let subject = document.getElementById("form-subject")?.value;
  let message = document.getElementById("form-message")?.value;
  window.open(`mailto:isatishkumar4008@gmail.com?subject=${subject}&body=${message}`);
}