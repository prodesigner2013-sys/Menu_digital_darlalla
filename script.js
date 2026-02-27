// Ouvrir PDF
function openPDF(file){
    window.open(file, '_blank');
}

// Preloader
window.addEventListener("load", function(){
    setTimeout(function(){
        document.getElementById("preloader").classList.add("hidden");
    }, 2000);
});