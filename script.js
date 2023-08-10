// script.js
const certificates = [
    { section: "internship",image: "images/int.png", pdf: "pdfs/Internship1.pdf" },
    { section: "internship", image: "images/int2.png", pdf: "pdfs/Internship2.pdf" },
    { section: "internship", image: "images/int3.png", pdf: "pdfs/3.pdf" },
    { section: "internship", image: "images/int4.png", pdf: "pdfs/4.pdf" },
    
    { section: "Prog", image: "images/pro1.png", pdf: "pdfs/python.pdf" },
    { section: "Prog", image: "images/pro2.png", pdf: "pdfs/Novasie.pdf" },
    { section: "Prog", image: "images/pro3.png", pdf: "pdfs/dev.pdf" },
    { section: "Prog", image: "images/pro4.png", pdf: "pdfs/HR.pdf" },

  { section: "open", image: "images/jp.png", pdf: "pdfs/jp.pdf" },
  { section: "open", image: "images/lyft.png", pdf: "pdfs/LYFT.pdf" },
  { section: "open", image: "images/tata.png", pdf: "pdfs/TATA.pdf" },
  
  { section: "extra", image: "images/cam.png", pdf: "pdfs/cam.pdf" },
  { section: "extra", image: "images/red.png", pdf: "pdfs/red.pdf" },
  { section: "extra", image: "images/club.png", pdf: "pdfs/club.pdf" },
  { section: "extra", image: "images/tcp.png", pdf: "pdfs/TCP_IP.pdf" },
    // ... Add more certificates for each section
];

certificates.forEach(certificate => {
    const section = document.getElementById(certificate.section);
    const certificateContainer = section.querySelector(".certificate-container");

    const certificateBox = document.createElement("div");
    certificateBox.classList.add("certificate-box");
    certificateBox.innerHTML = `
    <div class="certificate-content">
      <img src="${certificate.image}" alt="${certificate.title}">
    </div>
  `;

    certificateContainer.appendChild(certificateBox);

    // Add click event to open PDF
    const certificateContent = certificateBox.querySelector(".certificate-content");
    if (certificate.pdf) {
        certificateContent.addEventListener("click", () => {
            window.open(certificate.pdf, "_blank");
        });
    }
});

// Replace "logo.png" with your actual logo image file.
document.querySelector("footer img").src = "images/namastey.png";
