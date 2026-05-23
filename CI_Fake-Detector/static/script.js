gsap.registerPlugin(ScrollTrigger);

gsap.from(".center-card", {
  scale: 4.5,
  borderRadius: 0,
  scrollTrigger: {
    trigger: ".gallery-section",
    start: "top top",
    end: "70% bottom",
    scrub: true
  }
});

gsap.from(".gallery-grid > img", {
  opacity: 0,
  scale: 0.4,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".gallery-section",
    start: "top center",
    end: "bottom bottom",
    scrub: true
  }
});

gsap.from(".card", {
  opacity: 0,
  y: 80,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".cards-section",
    start: "top 70%"
  }
});

document.getElementById("uploadForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const fileInput = document.getElementById("imageInput");

  if (!fileInput.files.length) {
    alert("Please choose an image first.");
    return;
  }

  const formData = new FormData();
  formData.append("image", fileInput.files[0]);

  document.getElementById("result").innerHTML = "Scanning image...";

  try {
    const response = await fetch("/predict", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    document.getElementById("result").innerHTML = `
      <h2>${data.label}</h2>
      <p>${data.confidence}% confidence</p>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = `
      <p>Prediction server not connected yet.</p>
    `;
  }
});