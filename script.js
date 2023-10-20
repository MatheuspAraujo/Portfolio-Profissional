document.addEventListener('DOMContentLoaded', function () {
    // Adicionando um ouvinte de evento de clique ao link do menu
    document.getElementById('menu-projeto').addEventListener('click', function () {
      // Rola suavemente até a seção de destino
      document.getElementById('link-projetos').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('menu-sobre').addEventListener('click', function () {
        // Rola suavemente até a seção de destino
        document.getElementById('link-sobre').scrollIntoView({ behavior: 'smooth' });
      });


  });
  