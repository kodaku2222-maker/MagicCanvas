const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

imageInput.addEventListener("change", function () {
  const file = this.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (e) {
    preview.src = e.target.result;
    preview.style.display = "block";
  };

  reader.readAsDataURL(file);
});

const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", function () {

  alert("AI画像生成機能は開発中です！");

});

const saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", function () {

  if (!preview.src) {
    alert("保存する画像がありません。");
    return;
  }

  const link = document.createElement("a");
  link.href = preview.src;
  link.download = "magic_canvas_image.png";
  link.click();

});
