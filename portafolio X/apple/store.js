const dispositivosWrapper = document.querySelector('.dispositivos');
const toggleScrollButton = document.querySelector('.toggle-scroll-button');

let scrollEnabled = true;

toggleScrollButton.addEventListener('click', () => {
    scrollEnabled = !scrollEnabled;
    dispositivosWrapper.style.overflowX = scrollEnabled ? 'scroll' : 'hidden';
}); 

// Resto del código para las flechas de scroll
// ...

const wrapper = document.querySelector('.accessories-wrapper');
const scrollButtons = document.querySelectorAll('.scroll-button');

scrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('scroll-left')) {
            wrapper.style.transform = 'translateX(100%)';
        } else if (button.classList.contains('scroll-right')) {
            wrapper.style.transform = 'translateX(-100%)';
        }

        // Simulamos el desplazamiento durante 0.3 segundos y luego volvemos a la posición original
        setTimeout(() => {
            wrapper.style.transform = 'translateX(0)';
        }, 300);
    });
});
