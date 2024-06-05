// Função para iniciar o carrossel do cabeçalho
function iniciarCarrosselCabecalho() {
    new Glider(document.querySelector('.cabecalho-carrossel'), {
        slidesToShow: 1,
        dots: '.cabecalho-dots',
        draggable: true,
        scrollLock: true,
        rewind: true,
        arrows: {
            prev: '.cabecalho-glider-prev',
            next: '.cabecalho-glider-next'
        },
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: '.cabecalho-dots',
                    arrows: {
                        prev: '.cabecalho-glider-prev',
                        next: '.cabecalho-glider-next'
                    }
                }
            }
        ]
    });
}

// Iniciar o carrossel do cabeçalho
window.addEventListener('load', function() {
    iniciarCarrosselCabecalho();
});
