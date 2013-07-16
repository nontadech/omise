// JavaScript Document
window.addEvent("domready", function(e){
  /* Alert */

  $("modal-nofooter").addEvent("click", function(e){
    var SM = new SimpleModal({"hideFooter":true, "width":710});
        SM.show({
          "title":"Vimeo video",
          "model":"modal",
          "contents":'<iframe src="http://www.youtube.com/embed/-4nMorZt0dU?title=0&amp;byline=0&amp;portrait=0&amp;color=824571" width="680" height="382" frameborder="0" webkitAllowFullScreen allowFullScreen></iframe>'
        });
  })
});