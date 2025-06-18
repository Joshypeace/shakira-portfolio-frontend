document.getElementById("appointment-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    service: document.getElementById("service").value,
    date: document.getElementById("date").value,
    message: document.getElementById("message").value
  };

  fetch("https://shakira-portfolio-backend.onrender.com/send-whatsapp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then((res) => res.text())
  .then((text) => {
    console.log("API Response:", text);
    if (text.includes("Message queued")) {
      showToast("Message sent successfully!", "success");
    } else {
      showToast("Failed to send WhatsApp message.", "error");
    }
  })
  .catch((err) => {
    console.error("Fetch error:", err);
    showToast("Something went wrong while sending message.", "error");
  });

});



function showToast(message, type = "info") {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toastMessage.textContent = message;

 
  switch (type) {
    case "success":
      toast.style.backgroundColor = "#28a745"; 
      break;
    case "error":
      toast.style.backgroundColor = "#dc3545";
      break;
    default:
      toast.style.backgroundColor = "#333"; 
  }

  toast.style.display = "block";
  toast.style.opacity = "1";

 
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      toast.style.display = "none";
    }, 300); 
  }, 3000);
}

