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

const prompt = document.getElementById("prompt").value;

const resultImage = document.getElementById("resultImage");

resultImage.src = preview.src;
resultImage.style.display = "block";

alert("仮生成：画像を表示しました");

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
