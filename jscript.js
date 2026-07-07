window.onload = function() {
    var amount = $(".scroll-box")[0].scrollHeight;
    $(".scroll-box").scrollTop(amount);
    console.log("Done!");
}







// Re-pattern the backgrounds of only newly shown eventrs after filter application 
// Fade Hex if scrolled all the way down 
// Apply Color to distinguish button filter is on/off 