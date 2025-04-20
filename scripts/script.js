'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')

});

// 1. ((Начало)) --> B[Получение события onMouseOver]
// 2. --> C{Есть изображение?}
// 3. -- Да --> D[Определение ID/атрибута изображения]
// 4. --> E[Извлечение текста из базы данных или атрибута alt/txt]
// 5. --> F[Отображение всплывающего окна с текстом]
// 6. --> G[Ожидание события onMouseOut]
// 7. --> H[Удаление всплывающего окна]
// 8. --> I((Конец))
// 9. -- Нет --> J[(Ничего не делать)]

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.betskoy.jpg');
    
    images.forEach(img => {
        img.addEventListener('mouseover', function(event) {
            let tooltipText = this.getAttribute('data-text');  
            
            if(tooltipText) {  
                const tooltipElement = document.querySelector('.tooltip');
                
                tooltipElement.style.left = event.clientX + 'px';
                tooltipElement.style.top = event.clientY + 'px';
                
                tooltipElement.textContent = tooltipText;
                tooltipElement.style.display = 'block';   
            }
        });
        
        img.addEventListener('mouseout', () => {
            const tooltipElement = document.querySelector('.tooltip');
            tooltipElement.style.display = 'none';
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const slider = document.querySelectorAll('.historians__item');
    const totalSlides = slides.length;
    const visiblecards = 3; 
    updateSlider();
    

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active-slide')); // скрываем все активные слайды
        slides[index].classList.add('active-slide'); // активируем нужный слайд
    }

    function nextSlide() {
        currentSlideIndex++;
        if (currentIndex >= totalSlides) {
            currentSlideIndex = 0; // цикл начинаем сначала
        }
        showSlide(currentSlideIndex);
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1; // последний слайд
        }
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // авто-переключение каждые 3 секунды

    // Назначаем обработчики для кнопок
    document.querySelector('.slider-prev').addEventListener('click', prevSlide);
    document.querySelector('.slider-next').addEventListener('click', nextSlide);
});

document.addEventListener("DOMContentLoaded", () => {
    const articleList = document.querySelector('.articles__list');
    const slides = document.querySelectorAll('.articles__item');
    const slideWidth = slides[0].clientWidth; // реальная ширина одного слайда
    let currentIndex = 0;

    function updateSlider() {
        articleList.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // перемещаем список слайдов
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0; // вернёмся обратно к началу
        }
        updateSlider();
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1; // перейдём к последнему слайду
        }
        updateSlider();
    }

});