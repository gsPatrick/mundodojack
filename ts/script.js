const checkbox = document.getElementById("downloadCheckbox");

checkbox.addEventListener("change", async () => {
  if (checkbox.checked) {
    try {
      const response = await fetch("https://jackbear-lotoapi.r954jc.easypanel.host/versions/latest");
      const data = await response.json();

      // Substitui o link retornado pela API pelo link fixo
      const apkUrl = "https://jackbear-lotoapi.r954jc.easypanel.host/public/apks/lotojack-lastversion.apk";

      const link = document.createElement("a");
      link.href = apkUrl;
      link.download = "loto-jack.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        checkbox.checked = false;
      }, 1000);

    } catch (error) {
      console.error("Erro ao buscar versão:", error);
      alert("Erro ao baixar a última versão do app.");
    }
  }
});

// comentario teste