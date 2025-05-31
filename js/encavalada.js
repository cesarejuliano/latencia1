    <script>
      const cAudios = ["c1", "c2", "c3", "c4", "c5"];
      const jAudios = ["j1", "j2", "j3", "j4", "j5"];
      const delays = [15000, 69000, 23000, 47000, 27000, 49000, 19000, 21000, 47000, 170000];

      let index = 0;
      let isCFirst = true;
      const playButton = document.getElementById("playButton");
      const swapButton = document.getElementById("swapButton");

      function tocarProximo() {
        const nomeC = cAudios[index % cAudios.length];
        const nomeJ = jAudios[index % jAudios.length];
        const delay = delays[index % delays.length];

        const c = new Audio(`audios/${nomeC}.mp3`);
        const j = new Audio(`audios/${nomeJ}.mp3`);

        c.play();
        setTimeout(() => j.play(), delay);

        let encerrados = 0;
        const verifica = () => {
          encerrados++;
          if (encerrados === 2) {
            index = (index + 1) % cAudios.length;
            tocarProximo();
          }
        };

        c.onended = verifica;
        j.onended = verifica;
      }

      playButton.addEventListener("click", () => {
        playButton.style.display = "none";
        swapButton.style.display = "block";
        tocarProximo();
      });

      swapButton.addEventListener("click", () => {
        isCFirst = !isCFirst;
      });
    </script>