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
       jQuery("#worker-info").fadeTo("slow", 0.0);
     }else{
       jQuery("#body_content").fadeTo("slow", 1.0);
       jQuery("#worker-info").fadeTo("slow", 1.0);
     }
   });
   
   jQuery('#project .thumbnail').click(function (){
      var id = jQuery(this).attr('id').split("_")[1];
      jQuery("#left-arrow").fadeOut("slow");
      jQuery("#right-arrow").fadeOut("slow");
      jQuery("#project #image_" + id).fadeTo("slow", 1.0);
    });
    
    jQuery('#project .close-button').click(function (){
      jQuery("#left-arrow").fadeIn("slow");
      jQuery("#right-arrow").fadeIn("slow");
      jQuery("#project .image").fadeTo("slow", 0.0);
      jQuery("#project .image").hide("slow");
    });
      
    jQuery("#body").fadeTo(1500, 1.0);
    
    jQuery('#submenu a, #menu a, #left-arrow, #right-arrow').click(function (){
        jQuery("#body").fadeTo(500, 0.0);
    });
    
    //home page animations
    jQuery('#submenu-home a').click(function (e){
        e.preventDefault();
        var logo_opacity = jQuery("#mdb-logo-large").css("opacity");
        if (logo_opacity == 1){
          jQuery("#build-it-true").fadeTo(1000, 1.0);
          jQuery("#mdb-logo-large").fadeTo(1000, 0.0);
          //change link text
          jQuery("#submenu-home a").text("HOME")
        } else {
          //change link text
          jQuery("#submenu-home a").text("BUILDING IT TRUE")
          jQuery("#build-it-true").fadeTo(1000, 0.0);
          jQuery("#mdb-logo-large").fadeTo(1000, 1.0);
        }
    });
         
 });