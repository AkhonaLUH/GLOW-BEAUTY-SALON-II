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