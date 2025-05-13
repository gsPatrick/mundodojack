interface VersionResponse {
  latest_version: string;
  force_update: boolean;
  apk_url: string;
  message: string;
}

const checkbox = document.getElementById("downloadCheckbox") as HTMLInputElement;

checkbox.addEventListener("change", async () => {
  if (checkbox.checked) {
    try {
      const response = await fetch("https://jackbear-lotoapi.r954jc.easypanel.host/versions/latest");
      const data: VersionResponse = await response.json();

      const link = document.createElement("a");
      link.href = data.apk_url;
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
