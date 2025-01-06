// // // Contact form submission
// document.getElementById('contact-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     alert('Thank you for your message! We will get back to you soon.');
//   });

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const subject = `New Message From ${name}`;
  
  const whatsappMesage = `Name: ${name} \n Email: ${email} \n ${message}`;
  const recipientNumber = `+2348076157744`;
  const whatappUrl = `https://wa.me/${+2348076157744}?text=${encodeURIComponent(whatsappMesage)}`;
  window.location.href = whatappUrl;
  alert(`Your message has been sent via WhatsApp`);
});

