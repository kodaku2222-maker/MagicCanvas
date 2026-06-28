const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const generateButton = document.getElementById("generateButton");
const saveButton = document.getElementById("saveButton");
const resultImage = document.getElementById("resultImage");

// 画像プレビュー
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

// 🎨 AI風変換（無料版）
generateButton.addEventListener("click", function () {

  const prompt = document.getElementById("prompt").value.toLowerCase();
  const image = preview.src;

  if (!image) {
    alert("先に画像を選んでね");
    return;
  }

  alert("AI風変換中...");

  // キャンバス作成
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.src = image;

  img.onload = function () {

    canvas.width = img.width;
    canvas.height = img.height;

    // ベース描画
    ctx.drawImage(img, 0, 0);

    // 💡プロンプトで変化
    if (prompt.includes("海賊")) {
      ctx.filter = "brightness(0.6) contrast(1.4)";
      ctx.drawImage(img, 0, 0);
    }

    else if (prompt.includes("アニメ")) {
      ctx.filter = "contrast(1.5) saturate(1.8)";
      ctx.drawImage(img, 0, 0);
    }

    else if (prompt.includes("夜")) {
      ctx.filter = "brightness(0.4) hue-rotate(200deg)";
      ctx.drawImage(img, 0, 0);
    }

    else {
      ctx.filter = "contrast(1.2)";
      ctx.drawImage(img, 0, 0);
    }

    // 結果表示
    resultImage.src = canvas.toDataURL("image/png");
    resultImage.style.display = "block";

  };
});

// 💾 保存
saveButton.addEventListener("click", function () {

  if (!resultImage.src) {
    alert("保存する画像がありません");
    return;
  }

  const link = document.createElement("a");
  link.href = resultImage.src;
  link.download = "magic_canvas_ai.png";
  link.click();

});
