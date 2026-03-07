document.addEventListener("DOMContentLoaded", function () {
  // Modal de Imagem
  document.querySelectorAll('.img-fluid.rounded').forEach(function (img) {
    img.style.cursor = "pointer"; // muda cursor ao passar
    img.addEventListener("click", function () {
      const modalImage = document.getElementById('modalImage');
      if (modalImage) {
        modalImage.src = this.src;
        modalImage.alt = this.alt;
        // @ts-ignore
        // Bootstrap 4 uses jQuery
        $('#imageModal').modal('show');
      }
    });
  });

  // Smooth scroll para links internos (opcional, já que CSS faz isso, mas garante compatibilidade)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
