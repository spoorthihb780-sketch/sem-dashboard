const openDialogButton = document.getElementById("open-dialog");
const closeDialogButton = document.getElementById("close-dialog");
const informationDialog = document.getElementById("information-dialog");

if (openDialogButton && informationDialog) {
    openDialogButton.addEventListener("click", () => {
        informationDialog.showModal();
    });
}

if (closeDialogButton && informationDialog) {
    closeDialogButton.addEventListener("click", () => {
        informationDialog.close();
    });
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        alert("Message sent successfully!");

        contactForm.reset();
    });
}