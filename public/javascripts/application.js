jQuery(document).ready(function(){

  jQuery("#body").fadeTo(0, 0.0);

  jQuery("#project #right").fadeTo(0, 0.7);
  jQuery("#project .thumbnail").fadeTo(0, 0.7);
  jQuery("#project #thumbnails").hide();
  jQuery("#project #thumbnails-bkd").hide();
  jQuery("#project .image").hide();
  jQuery("#project-description").hide();
  
  jQuery("#project #right").mouseover(function(){
     jQuery(this).fadeTo('slow', 1.0);
   }).mouseout(function(){
     jQuery(this).fadeTo('slow', 0.7);
   });
   
   jQuery("#project .thumbnail").mouseover(function(){
      jQuery(this).fadeTo('slow', 1.0);
    }).mouseout(function(){
      jQuery(this).fadeTo('slow', 0.7);
    });
   
   jQuery('#project #right').click(function (){
     jQuery("#project #thumbnails").slideToggle("slow");
     jQuery("#project #thumbnails-bkd").slideToggle("slow");
     jQuery("#project-description").slideToggle("slow");
     var opacity = jQuery("#body_content").css("opacity");
     if (opacity == 1){
       jQuery("#body_content").fadeTo("slow", 0.0);
     }else{
       jQuery("#body_content").fadeTo("slow", 1.0);
     }
   });
   
   jQuery('#project .thumbnail').click(function (){
      var id = jQuery(this).attr('id').split("_")[1];
      jQuery("#project #image_" + id).fadeTo("slow", 1.0);
    });
    
    jQuery('#project .close-button').click(function (){
        jQuery("#project .image").fadeTo("slow", 0.0);
        jQuery("#project .image").hide("slow");
      });
      
    jQuery("#body").fadeTo(1500, 1.0);
    
    jQuery('#submenu a, #menu a, #left-arrow, #right-arrow').click(function (){
        jQuery("#body").fadeTo(500, 0.0);
    });
    
    // free report link image swap
    // preload the image
    var report_image_over = jQuery('<img />').attr('src', '/images/free-report-box-over.png');
    var report_image = jQuery('<img />').attr('src', '/images/free-report-box.png');
    
    jQuery('#free_report_link').mouseover(function() {
      jQuery("#free_report").attr("src", "/images/free-report-box-over.png");
    }).mouseout(function(){
      jQuery("#free_report").attr("src", "/images/free-report-box.png");
    });
    
    jQuery("#video-player").replaceWith("<a href='/videos/WEB%20VERSION_458x258.mov' rel='qtposter' jscontroller='false'><img src='/videos/WEB%20VERSION_458x258.jpg' width='458' height='274'/></a>");
     
 });