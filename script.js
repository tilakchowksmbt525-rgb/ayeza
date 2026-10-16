
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile navigation menu
menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});

// Mehndi gallery filters
const filterButtons = document.querySelectorAll(".filter-btn");
const designCards = document.querySelectorAll(".design-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.filter;

        // Highlight selected button
        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        // Show matching designs
        designCards.forEach(function (card) {
            const category = card.dataset.category;

            if (selectedCategory === "all" ||
                category === selectedCategory) {
                card.hidden = false;
            } else {
                card.hidden = true;
            }
        });
    });
});

// Set the minimum booking date to today
const dateInput = document.getElementById("date");
const today = new Date();

const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

dateInput.min = localToday;

// Booking form demonstration
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();
        return;
    }

    const customerName = document.getElementById("name").value.trim();
    const service = document.getElementById("service").value;
    const bookingDate = dateInput.value;

    formMessage.textContent =
        "Thank you, " + customerName + "! Your " + service +
        " request for " + bookingDate +
        " is ready. This is a demo; your request has not been sent.";

    bookingForm.reset();
    dateInput.min = localToday;
});

// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();
