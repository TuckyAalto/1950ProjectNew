$(document).ready(function(){
           $(window).bind('scroll', function() {
           var overviewHeight = 30;
                 if ($(window).scrollTop() > overviewHeight) {
                     $('#overview').addClass('fixed');
                     $('#topic_01').addClass('fixed_topic');
                     $(".overview_toggle").hide();
                     $(".topic_summary").toggleClass('topic_summary topic_summary_min');
                     
                 }
                 else {
                     $('#overview').removeClass('fixed');
                     $('#topic_01').removeClass('fixed_topic');
                     $(".overview_toggle").show();
                     $(".topic_summary_min").toggleClass('topic_summary_min topic_summary');
                     
                 }
            });
        });