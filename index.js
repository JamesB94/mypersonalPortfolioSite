const zoomableImages = document.querySelectorAll('.card-img-top');

zoomableImages.forEach((image) => {
  image.addEventListener('click', () => {
    image.classList.toggle('zoomed');
  });
});