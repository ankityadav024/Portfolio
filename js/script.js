// Define the header variable at the top
let header = document.querySelector('header')

//Toggle Navbar

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
    header.classList.remove('sticky')
    document.body.classList.toggle('lock-scroll')
}

// Nav Active Link

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active')
        menuIcon.classList.remove('bx-x')
        document.body.classList.remove('lock-scroll')
    })
})

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY
        let offset = section.offsetTop - 150
        let height = section.offsetHeight
        let id = section.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    // Sticky Navbar
    header.classList.toggle('sticky', window.scrollY > 100)
}


ScrollReveal({
    //reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' })
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' })
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' })
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' })



const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Programmer', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})











function sendEmail(event) {
    event.preventDefault(); // prevent the form from submitting
    emailjs.init("Ivwyhp95qsjWWpSn5");

    // get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("mobile").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || subject === "" || message === "" || contact === "") {
        alert("Please fill all the required fields!");
        return;
    }

    // send email using EmailJS
    emailjs.send("service_jw2ma5e", "template_exvc36b", {
        from_name: name,
        from_email: email,
        to_email: "yank300001@gmail.com",
        subject: subject,
        message: message,
        contact: contact,
    }).then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        //document.getElementById("contact-form").reset(); // reset form
    }, (error) => {
        console.log("FAILED...", error);
        alert("Message failed to send.");
    });
}