const form = document.getElementById("form");
const msg = document.querySelector(".msg");

form.onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  if (!data.name.trim()) {
    msg.innerHTML = alertMessage("All fields are required", "danger");
  } else if (!isMobile(data.cell)) {
    msg.innerHTML = alertMessage("Cell No Not Valid", "warning");
  } else if (!isEmail(data.email)) {
    msg.innerHTML = alertMessage("Mail Not Valid", "info");
  } else {
    msg.innerHTML = alertMessage("Data Stable", "success");
  }
};


const preview = document.getElementById("preview");
const img = document.querySelector(".img");

preview.onchange = (e) => {
  const url = URL.createObjectURL(e.target.files[0]);

  img.setAttribute("src", url);
};


let images = [];

var imageInput = document.getElementById("gallery_preview");

var gallery = document.querySelector(".gallery-container");

imageInput.addEventListener("change", function (event) {
  var files = event.target.files;

  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    var imageUrl = URL.createObjectURL(file);

    images.push(imageUrl);
    renderGallery();
  }
});

function renderGallery() {
  gallery.innerHTML = "";

  for (var i = 0; i < images.length; i++) {
    var img = document.createElement("img");
    img.src = images[i];
    gallery.appendChild(img);
    console.log(gallery);
  }
}

gallery.addEventListener("click", function (event) {
  var img = event.target;

  var index = Array.from(gallery.children).indexOf(img);
  images.splice(index, 1);
  URL.revokeObjectURL(img.src);
  renderGallery();
});
