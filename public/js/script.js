//REalizamos un if para activar el foco de la ventana
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        document.title = "React | DoriAss.F";
        $("#favicon").attr("href", "images/favicon.ico");
    } else {
        document.title = "REACT || DORIASS";
        $("#favicon").attr("href", "images/faviconX.ico");
    }
})