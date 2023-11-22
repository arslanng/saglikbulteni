// filtreleme start
function filtre(y){
    let allYazi = document.querySelectorAll(".yazi")
    let x = allYazi.length
    if(y == "noFilter"){
        for(i=0; i<x; i++) {
            allYazi[i].classList.remove("d-none");
        }
    }else if(y != "noFilter"){

        
        for(i=0; i<x; i++) {
            allYazi[i].classList.add("d-none");
        }
        let gorunenYazi = document.querySelectorAll(`.${y}`)
        let z = gorunenYazi.length
        for(i=0; i<z; i++) {
            gorunenYazi[i].classList.remove("d-none")
        }
    }
}
// filtreleme end
// yazı sayısı start

let yazarlarDOMs = document.querySelectorAll(".yazar") 
let yaziSayisi = function(yazarAdi){
    let yazilar = document.querySelectorAll(`.${yazarAdi}`)
    return yazilar.length 
}

for (let i = 0; i<yazarlarDOMs.length; i++){ 
    let yazarlar = ["murat", "yesim", "gokhan", "aziz", "tolga", "bahri", "ozgur", "mustafa", "emel", "diger"]
    yazarlarDOMs[i].innerHTML += ` <span class="badge bg-primary rounded-pill">${yaziSayisi(yazarlar[i])}</span>`
}