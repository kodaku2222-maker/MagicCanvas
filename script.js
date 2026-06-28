const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const generateButton = document.getElementById("generateButton");
const saveButton = document.getElementById("saveButton");
const resultImage = document.getElementById("resultImage");

// 画像選択 → プレビュー表示
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

// Generateボタン（仮生成）
generateButton.addEventListener("click", function () {
  const prompt = document.getElementById("prompt").value;

  const inputImage = preview.src;

  if (!inputImage) {
    alert("先に画像を選んでね");
    return;
  }

  // 仮：入力画像をそのまま結果に表示
  resultImage.src = inputImage;
  resultImage.style.display = "block";

  console.log("Prompt:", prompt);

  alert("仮生成：画像を表示しました");
});

// Saveボタン
saveButton.addEventListener("click", function () {

  if (!resultImage.src) {
    alert("保存する画像がありません。");
    return;
  }

  const link = document.createElement("a");
  link.href = resultImage.src;
  link.download = "magic_canvas_image.png";
  link.click();

});
