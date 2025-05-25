// Cria array com as imagens ninfas01.jpg a ninfas21.jpg
var imagens = [];
for (var i = 1; i <= 21; i++) {
  var numero = i < 10 ? '0' + i : i;
  imagens.push('thumbs/ninfas' + numero + '.jpg');
}

// Retorna imagem do dia
function imagemDoDia() {
  var data = new Date();
  var dia = data.getDate();
  var index = (dia - 1) % imagens.length;
  return imagens[index];
}

// Aplica fade-in se for a primeira visita
function aplicarFadeIn() {
  var body = document.body;
  if (!sessionStorage.getItem('jaVisitou')) {
    body.classList.add('fade-in');
    sessionStorage.setItem('jaVisitou', 'true');
  }
}
/*
// Tudo junto
window.onload = function () {
  aplicarFadeIn();

  // Substitui imagem do dia
  var imgNinfas = document.getElementById('img-ninfas');
  if (imgNinfas) {
    imgNinfas.src = imagemDoDia();
  }

  // Configura clique para tocar áudio
  var btnNinfas = document.getElementById('btn-ninfas');
  var audioNinfas = document.getElementById('audio-ninfas');
  if (btnNinfas && audioNinfas) {
    btnNinfas.addEventListener('click', function () {
      audioNinfas.play().catch(function () {
        alert("Clique para permitir o áudio.");
      });
    });
  }
};

/* HTML com fetch() aplicado no DOM
document.addEventListener('DOMContentLoaded', function () {
  var btnNinfas = document.getElementById('btn-ninfas');

  if (btnNinfas) {
    btnNinfas.addEventListener('click', function () {
      fetch('ninfas.html')
        .then(response => response.text())
        .then(html => {
          var conteudo = document.getElementById('conteudo-principal');
          conteudo.innerHTML = html;

          // Trocar o fundo da index (exemplo: remover vídeo e colocar imagem)
          var videoBg = document.querySelector('.video-background');
          if (videoBg) {
            videoBg.remove();
          }

          var novoBg = document.createElement('div');
          novoBg.className = 'imagem-fundo-ninfas';
          document.body.prepend(novoBg);
        })
        .catch(err => console.error('Erro ao carregar a página:', err));
    });
  }
}); 

window.onload = function () {
  aplicarFadeIn();

  var imgNinfas = document.querySelector('.galeria a.episodio img[alt="Ninfas"]');
  if (imgNinfas) {
    imgNinfas.src = imagemDoDia();
  }

  // Manipula o botão "Ninfas"
  var btnNinfas = document.getElementById('btn-ninfas');
  if (btnNinfas) {
    btnNinfas.addEventListener('click', function () {
      fetch('ninfas.html')
        .then(function (response) {
          return response.text();
        })
        .then(function (html) {
          // Substitui o conteúdo da galeria
          var galeria = document.querySelector('.galeria');
          if (galeria) {
            galeria.innerHTML = '<div id="conteudo-ninfas">' + html + '</div>';
          }

          // Remove vídeo de fundo
          var videoBg = document.querySelector('.video-background');
          if (videoBg) {
            videoBg.parentNode.removeChild(videoBg);
          }

          // Adiciona imagem de fundo
          var imgBg = document.createElement('div');
          imgBg.className = 'ninfas-background';
          imgBg.style.backgroundImage = "url('imagens/ninfasfundos.jpg')";
          imgBg.style.position = 'fixed';
          imgBg.style.top = 0;
          imgBg.style.left = 0;
          imgBg.style.width = '100%';
          imgBg.style.height = '100%';
          imgBg.style.zIndex = '-1';
          imgBg.style.backgroundSize = 'cover';
          imgBg.style.backgroundPosition = 'center';
          document.body.insertBefore(imgBg, document.body.firstChild);
        });
    });
  }
};

window.onload = function () {
  aplicarFadeIn();

  // Substitui imagem do dia
  var imgNinfas = document.getElementById('img-ninfas');
  if (imgNinfas) {
    imgNinfas.src = imagemDoDia();
  }

  // Botão "Ninfas"
  var btnNinfas = document.getElementById('btn-ninfas');
  if (btnNinfas) {
    btnNinfas.addEventListener('click', function () {
      // Remove vídeo de fundo
      var videoBg = document.querySelector('.video-background');
      if (videoBg) {
        videoBg.remove();
      }

      // Adiciona imagem de fundo
      var imgBg = document.createElement('div');
      imgBg.className = 'ninfas-background';
      imgBg.style.backgroundImage = "url('imagens/ninfasfundos.jpg')";
      imgBg.style.position = 'fixed';
      imgBg.style.top = 0;
      imgBg.style.left = 0;
      imgBg.style.width = '100%';
      imgBg.style.height = '100%';
      imgBg.style.zIndex = '-1';
      imgBg.style.backgroundSize = 'cover';
      imgBg.style.backgroundPosition = 'center';
      document.body.insertBefore(imgBg, document.body.firstChild);

      // Carrega o conteúdo de ninfas.html
      fetch('ninfas.html')
        .then(function (response) {
          return response.text();
        })
        .then(function (html) {
          var galeria = document.querySelector('.galeria');
          if (galeria) {
            galeria.innerHTML = '<div id="conteudo-ninfas">' + html + '</div>';
          }

          // Toca o áudio depois de carregar o conteúdo
          var audioNinfas = document.getElementById('audio-ninfas');
          if (audioNinfas) {
            audioNinfas.play().catch(function () {
              alert("Clique para ativar o áudio.");
            });
          }
        });
    });
  }
};
*/
