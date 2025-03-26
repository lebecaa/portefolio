window.addEventListener('scroll', function () {
    const elementosParaAnimar = document.querySelectorAll('.secao2, .secao3, .secao4');
    elementosParaAnimar.forEach(elemento => {
        if (elemento.getBoundingClientRect().top < window.innerHeight * 0.75) {
            elemento.classList.remove('animate__animated', 'animate__zoomIn', 'animate__fadeInUp', 'animate__fadeInLeft', 'animate__fadeInRight', 'animate__bounceInDown', 'animate__fadeInDown', 'animate__rotateIn', 'animate__rotateInDownLeft', 'animate__jackInTheBox', 'animate__slideInRight', 'animate__flipInX', 'animate__slideInUp', 'animate__lightSpeedInRight', 'animate__fadeInDown');
            elemento.classList.add('animate__animated', 'animate__slideInLeft');
        } else {
            elemento.classList.remove('animate__animated', 'animate__slideInLeft');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const textToType = "Uma dev júnior dedicada, impulsionada pela evolução da tecnologia e suas possibilidades ilimitadas.";
    const typingTextElement = document.getElementById('typing-text');
    const cursor = document.getElementById('cursor');
    let index = 0;

    function type(element, text, cursor) {
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.insertBefore(document.createTextNode(text.charAt(i)), cursor);
                i++;
                setTimeout(typing, 100);
            }
        }
        typing();
    }

    type(typingTextElement, textToType, cursor);

    const sectionTitles = [
        { element: document.getElementById('sobre-mim-title'), text: 'SOBRE' },
        { element: document.getElementById('habilidades-title'), text: 'HABILIDADES' },
        { element: document.getElementById('projetos-title'), text: 'PROJETOS & REPOSITÓRIOS' }
    ];

    sectionTitles.forEach(title => {
        const titleCursor = title.element.querySelector('.cursor');
        type(title.element, title.text, titleCursor);
    });

    document.querySelector('.menu-toggle').addEventListener('click', function () {
        document.querySelector('.nav-links').classList.toggle('active');
        this.classList.toggle('active');
    });

    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }

    function setupMobileIconClick() {
        if (isMobileDevice()) {
            const icons = document.querySelectorAll('.icon');
            icons.forEach(icon => {
                icon.addEventListener('click', () => {
                    const descriptionId = icon.getAttribute('data-description');
                    const description = document.getElementById(descriptionId);
                    description.classList.toggle('hidden');
                });
            });
        }
    }

    setupMobileIconClick();
});
