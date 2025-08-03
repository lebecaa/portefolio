document.addEventListener('DOMContentLoaded', function () {
    const text1 = "Uma dev júnior/designer dedicada, impulsionada";
    const text2 = "pela evolução da tecnologia e suas possibilidades ilimitadas.";

    const typingTextElement = document.getElementById('typing-text');
    const cursor = document.getElementById('cursor');

    function type(element, text, cursor, callback) {
        let i = 0;
        function typing() {
            if (i <= text.length) {
                element.innerHTML = text.substr(0, i);
                i++;
                setTimeout(typing, 100); 
            } else {
                if (callback) {
                    callback();
                }
            }
        }
        typing();
    }

    function startTypingLoop() {
        type(typingTextElement, text1, cursor, () => {
            setTimeout(() => {
                type(typingTextElement, text2, cursor, () => {
                    setTimeout(startTypingLoop, 1000); 
                });
            }, 1000); 
        });
    }
    startTypingLoop();

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

    function toggleDescription(icon) {
        var description = icon.nextElementSibling; 
        description.style.opacity = (description.style.opacity === "1") ? "0" : "1"; 
        description.style.visibility = (description.style.visibility === "visible") ? "hidden" : "visible"; 
    }
    
});
