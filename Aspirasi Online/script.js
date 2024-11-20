const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("sumbit", function (e){
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
    .then(() => {
        
    })
    .catch((e) => alert("Error occured"));
});