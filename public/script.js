function uploadImage() {
    const fileInput = document.getElementById("imageInput");
    const loadingText = document.getElementById("loading");
    const resultText = document.getElementById("result");

    if (!fileInput.files.length) {
        alert("Please select an image.");
        return;
    }

    const formData = new FormData();
    formData.append("image", fileInput.files[0]);

    loadingText.style.display = "block";
    resultText.innerText = "";

    fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        loadingText.style.display = "none";
        resultText.innerText = data.text || "No text found.";
    })
    .catch(error => {
        loadingText.style.display = "none";
        resultText.innerText = "Error extracting text.";
        console.error("Error:", error);
    });
}
