


let contactForm = document.getElementById('contactForm');



function mensagemParaWhatsapp(tel = "5521985419645", msg = "") {
    const formData = new FormData(contactForm);
    const formValue = Object.fromEntries(formData.entries());

    if (!formValue.nome || !formValue.email || !formValue.mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    msg = `
    Nome: ${formValue.nome}
    %0A e-mail: ${formValue.email} 
    %0A ${formValue.mensagem}`;

    const url = `https://wa.me/${tel}/?text=${msg}`;
    window.open(url, '_blank');
}