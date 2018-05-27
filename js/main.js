$('#icon-bottom').click(function(){
  $("html, body").animate({ scrollTop: $($(this).attr("data-target")).offset().top }, 1000);
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > $(window).height()*0.25 || document.documentElement.scrollTop > $(window).height()*0.25) {
        document.getElementById("scrollToTop").style.display = "block";
    } else {
        document.getElementById("scrollToTop").style.display = "none";
    }
}

$('#scrollToTop').click(function(){
  $("html, body").animate({ scrollTop: $('#main').offset().top }, 1000);
});
