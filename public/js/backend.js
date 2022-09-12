const BASE_URL = "http://localhost"

const showMessage = (data) => {
  $("#messageboxBody").text(data.message)
  if (data.status === "success") {
    $("#messageboxTitle").text("Success")
  } else {
    $("#messageboxTitle").text("Error")
  }
  $("#messagebox").modal('show');
}

const submitContactForm = (e) => {
  let formData = {};
  e.preventDefault();
  $.each($(`#contactForm`).serializeArray(), (_, kv) => formData[kv.name] = kv.value);
  fetch(`${BASE_URL}/api/contact`,
    {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json()).then((data) => showMessage(data)).catch((error) => console.log(error))
}

const submitBookingPopup = (e) => {
  let formData = {};
  e.preventDefault();
  $.each($(`#bookingForm`).serializeArray(), (_, kv) => formData[kv.name] = kv.value);

  fetch(`${BASE_URL}/api/bookings`,
    {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json()).then((data) => showMessage(data)).catch((error) => console.log(error))
}



document.getElementById("contactForm").addEventListener("submit", submitContactForm)
document.getElementById("bookingForm").addEventListener("submit", submitBookingPopup)