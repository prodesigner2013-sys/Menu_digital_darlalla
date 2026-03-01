// Ouvrir PDF
function openPDF(file){
    window.location.href = file;
}
// Preloader
window.addEventListener("load", function(){
    setTimeout(function(){
        document.getElementById("preloader").classList.add("hidden");
    }, 2000);

});
