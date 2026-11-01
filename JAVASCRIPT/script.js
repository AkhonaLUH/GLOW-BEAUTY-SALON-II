// Display a welcome message when the website loads
window.addEventListener("load", function () {
    console.log("Welcome to Glow Beauty Salon!");
});

// Display a message when a navigation link is clicked
document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("You selected: " + link.textContent);
    });
});

// Search and filter beauty services

document.addEventListener("DOMContentLoaded", function () {

    let searchInput = document.getElementById("serviceSearch");
    let servicesTable = document.getElementById("servicesTable");

    if (!searchInput || !servicesTable) {
        return;
    }

    let rows = servicesTable.querySelectorAll("tr");

    searchInput.addEventListener("input", function () {

        let searchText = searchInput.value.toLowerCase().trim();

        rows.forEach(function (row, index) {

            // Keep the table heading visible
            if (index === 0) {
                return;
            }

            let serviceName = row.textContent.toLowerCase();

            if (serviceName.includes(searchText)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

});
// Interactive image gallery lightbox

document.addEventListener("DOMContentLoaded", function () {

    const galleryImages = document.querySelectorAll(
        ".gallery img, .gallery-image"
    );

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeButton = document.getElementById("closeLightbox");

    if (!lightbox || !lightboxImage || !closeButton) {
        return;
    }

    galleryImages.forEach(function (image) {

        image.style.cursor = "pointer";

        image.addEventListener("click", function () {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightboxCaption.textContent = image.alt || "Glow Beauty Salon";
            lightbox.style.display = "block";

        });

    });

    closeButton.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }

    });

});
// Gallery Lightbox Functionality

const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");

if (
    galleryImages.length > 0 &&
    lightbox &&
    lightboxImage &&
    lightboxCaption &&
    closeLightbox
) {
    galleryImages.forEach(function(image) {
        image.style.cursor = "pointer";

        image.addEventListener("click", function() {
            lightbox.style.display = "flex";
            lightboxImage.src = image.src;
            lightboxCaption.textContent = image.alt;
        });
    });

    closeLightbox.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

function subscribeNewsletter(event) {
    event.preventDefault();

    const email = document.getElementById("newsletterEmail").value;

    document.getElementById("newsletterMessage").textContent =
        "Thank you! Your subscription has been received.";

    document.getElementById("newsletterEmail").value = "";
}

// Contact Form Functionality using AJAX
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("contactMessage").value.trim();

        const response = document.getElementById("contactResponse");

        if (!name || !email || !messageType || !message) {
            response.textContent = "Please complete all fields.";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            response.textContent = "Please enter a valid email address.";
            return;
        }

        response.textContent = "Sending your message...";

        try {
            const result = await fetch(
                "https://formsubmit.co/ajax/glowbeautysalon@gmail.com",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        messageType: messageType,
                        message: message,
                        _subject: "New Glow Beauty Salon Contact Message",
                        _replyto: email
                    })
                }
            );

            const data = await result.json();

            if (result.ok && data.success) {
                response.textContent =
                    "Thank you! Your message has been sent successfully.";
                contactForm.reset();
            } else {
                response.textContent =
                    "Sorry, your message could not be sent. Please try again.";
            }

        } catch (error) {
            response.textContent =
                "There was a connection problem. Please try again.";
        }
    });
}