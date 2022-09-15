import { hozzaad } from "./lista.js";
import { atlag } from "./lista.js";
function katt(){
    hozzaad(document.getElementById('beviteli').value)
    alert(atlag())


}
document.getElementById('gomb').addEventListener('click', katt);
