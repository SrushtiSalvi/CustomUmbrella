var themeColor = "rgb(32,169,234)";
var backgroundColor = "rgb(212, 236, 252)";

const imageList = {
  blue: "assets/Blue_umbrella.png",
  pink: "assets/Pink_umbrella.png",
  yellow: "assets/Yellow_umbrella.png",
};

const colorMapping = {
  blue: "rgb(32,169,234)",
  pink: "rgb(218,80,137)",
  yellow: "rgb(255,206,62)",
};

const backgroundColorMapping = {
  blue: "rgb(229,245,254)",
  pink: "rgb(245, 206, 238)",
  yellow: "rgb(255,250,237)",
};

var UploadFile = function (event) {
  console.log(event.target.files[0].name);
  //check file size is less than 5MB
  if (event.target.files[0].size > 5242880) {
    alert("File size is greater than 5MB");
    return;
  }

  //check file type is png or jpg
  if (
    event.target.files[0].type != "image/png" &&
    event.target.files[0].type != "image/jpeg"
  ) {
    alert("File type is not supported, only png and jpg images are supported");
    return;
  }

  //hide umbrella image
  var previewImage = document.getElementById("umbrellaImage");
  previewImage.style.display = "none";

  //hide logo image
  var logoImage = document.getElementById("output");
  logoImage.style.display = "none";

  //show loader
  var loader = document.getElementById("loaderIcon");
  loader.style.fill = themeColor;
  loader.style.display = "block";

  //hide upload button icon and show upload button loader icon
  var uploadIconButton = document.getElementById("uploadIconButton");
  uploadIconButton.style.display = "none";
  var loaderIconButton = document.getElementById("loaderIconButton");
  loaderIconButton.style.display = "block";

  setTimeout(() => {
    logoImage.src = URL.createObjectURL(event.target.files[0]);
    logoImage.style.display = "block"; //show logo image
    previewImage.style.display = "block"; //show umbrella image
    loader.style.display = "none"; //hide loader

    //show upload button icon and hide upload button loader icon
    uploadIconButton.style.display = "block";
    loaderIconButton.style.display = "none";

    document.getElementById("inputfileText").innerText =
      event.target.files[0].name;
    document.getElementById("cancelIcon").style.display = "block";
  }, 3000);
};

var ChangeColor = function (colorName) {
  themeColor = colorMapping[colorName];
  backgroundColor = backgroundColorMapping[colorName];
  var image = document.getElementById("umbrellaImage");
  image.src = imageList[colorName];

  //remove selected class from all color buttons
  var colorButtons = document.getElementsByClassName("color selected");
  for (var i = 0; i < colorButtons.length; i++) {
    colorButtons[i].classList.remove("selected");
  }

  //add selected class to the clicked button
  var colorButton = document.getElementById(colorName + "ColorButton");
  colorButton.classList.add("selected");

  //change upload button color
  var uploadButton = document.getElementById("fileInputLabel");
  uploadButton.style.backgroundColor = themeColor;

  //change body background color
  var body = document.body;
  body.style.backgroundColor = backgroundColor;
};

var CancelUpload = function () {
  var inputFile = document.getElementById("inputfile");
  inputFile.value = "";
  document.getElementById("inputfileText").innerText = "UPLOAD LOGO";
  document.getElementById("cancelIcon").style.display = "none";

  var logoImage = document.getElementById("output");
  logoImage.style.display = "none";
};
