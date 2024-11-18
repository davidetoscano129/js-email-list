const listElem = document.getElementById("emails");
const generateButton = document.getElementById("generate-emails");

// Funzione per generare email
function generateEmails() {
    // Svuota la lista
    listElem.innerHTML = ''; 

    // Genera 10 email
    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                const email = resp.data.response; // Estrai email
                listElem.innerHTML += `<li>${email}</li>`; // Aggiungi email alla lista
            })
    }
}

// Event listener per il bottone
generateButton.addEventListener("click", generateEmails);

// Genera una prima lista di email al caricamento della pagina
generateEmails();