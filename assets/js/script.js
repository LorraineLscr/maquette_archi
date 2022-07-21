const map = document.getElementById("map");
const div = document.createElement("div");
let defil;
window.addEventListener(
    "scroll",
    function () {
        defil = document.scrollTop
            | document.scrollingElement.scrollTop | window.scrollY;
        console.log(defil + document.documentElement.clientHeight);
        console.log(document.body.offsetHeight - 100);
        if (defil + document.documentElement.clientHeight >=
            document.body.offsetHeight - 100) {
            //alert("bas de page!")
            map.style.opacity = 1;
            map.style.left = 0;
            // créer un élément div sous l'image de la div#map
            // qui contiendra le texte centré : " Nous sommes situés à Dieppe."
            div.style.textAlign = "center";
            div.innerText = "Nous sommes situés à Dieppe.";
            map.append(div);
        }
    }
)
