if (document.querySelectorAll(".carousel").length > 0) {
    let carousels = document.querySelectorAll(".carousel");
    carousels.forEach(carousel => newCarousel(carousel));
  
    function newCarousel(carousel) {
      let carouselChildren = document.querySelector(
        `.carousel[data-carousel="${carousel.dataset.carousel}"]`
      ).children;
      let speed = carousel.dataset.speed;
      let carouselContent = document.querySelectorAll(`.carousel-content`)[
        carousel.dataset.carousel - 1
      ];
      const carouselLength = carouselContent.children.length;
      let width = window.innerWidth;
      let count = width;
      let counterIncrement = width;
      let int = setInterval(timer, speed);
  
      // initial transform
      carouselContent.style.transform = `translateX(-${width}px)`;
  
      function timer() {
        if (count >= (counterIncrement - 2) * (carouselLength - 2)) {
          count = 0;
          carouselContent.style.transform = `translateX(-${count}px)`;
        }
        count = count + counterIncrement;
        carouselContent.style.transform = `translateX(-${count}px)`;
      }
  
      
    }
  }