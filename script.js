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

// 🤖 AI生成（本番）
generateButton.addEventListener("click", async function () {

  const prompt = document.getElementById("prompt").value;
  const image = preview.src;

  if (!image) {
    alert("先に画像を選んでね");
    return;
  }

  alert("AI生成中...少し待ってね");

  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Token YOUR_API_KEY_HERE"
    },
    body: JSON.stringify({
      version: "MODEL_ID_HERE",
      input: {
        prompt: prompt,
        image: image
      }
    })
  });

  const data = await response.json();

  console.log(data);

  alert("AIに送信しました（まだ結果取得は後で追加）");
});

// 保存
saveButton.addEventListener("click", function () {

  if (!resultImage.src) {
    alert("保存する画像がありません");
    return;
  }

  const link = document.createElement("a");
  link.href = resultImage.src;
  link.download = "magic_canvas.png";
  link.click();

});
