// Ouvrir PDF
function openPDF(url){
  window.location.href = url;
}
// Preloader
window.addEventListener("load", function(){
    setTimeout(function(){
        document.getElementById("preloader").classList.add("hidden");
    }, 2000);

});

