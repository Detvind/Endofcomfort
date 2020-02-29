$(document).ready(function(){
    // loading animation
    $(".loading").fadeOut(4000);

    // introduction show
    $(".show-content1").delay(1000).slideDown(18000);

    // Old earth content show
    $(".show-content2").delay(2000).show("blind", 5000);

    // New earth content show
    $(".show-content3").delay(2000).show("drop", 5000);

    // Samsara content show
    $(".show-content4").delay(2000).show("scale", 10000);

    // Rebirth content show
    $(".show-content5").delay(2000).show("clip", 5000);

    // UIHC content show
    $(".show-content6").delay(2000).show("blind", 8000);

    // Robot content show
    $(".show-content7").delay(2000).show("fade", 8000);

    // Tang content show
    $(".show-content8").delay(2000).show("blind", 8000);

    // Images content show
    $(".show-content9").delay(2000).show("fold", 12000);


    $( ".zero-art-dialog" ).hide();
    $( window ).scroll(function() {
      $( ".zero-art-dialog" ).show("blind", 12000);
    });

    $( ".chiupi-info-detail" ).hide();
    $( window ).scroll(function() {
      $( ".chiupi-info-detail" ).delay(3000).show("fade", 12000);
    });

    $( ".book-info-detail" ).hide();
    $( window ).scroll(function() {
      $( ".book-info-detail" ).delay(10000).show("blind", 12000);
    });

    $( ".book-album-intro" ).hide();
    $( window ).scroll(function() {
      $( ".book-album-intro" ).delay(15000).show("blind", 12000);
    });
});
