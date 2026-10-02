let sectionsName = document.getElementById('nombre_form')
let sectionPas = document.getElementById('password_form')
let endSection = document.getElementById('EndForm')

let nextBtn = document.getElementById('nextBtn')
let endBtn = document.getElementById("endBtn")

/*if () {
    
    sectionsName.style.display = "none";

    sectionPas.style.display = "block";

    endSection.style.display = "block"

} else {
    
}*/


nextBtn.addEventListener('click', () => {
    
    sectionsName.style.display = "none";

    sectionPas.style.display = "block";
    
})

endBtn.addEventListener('click', () => {
    sectionPas.style.display = 'none';

    endSection.style.display = 'block';
})
