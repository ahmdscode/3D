const boxContainer = document.getElementById('box-effect');

boxContainer.addEventListener('mousemove', (event) => {
  const { width, height, left, top } = boxContainer.getBoundingClientRect();

  const mouseX = event.clientX - left - width / 2; // X position relative to box center
  const mouseY = event.clientY - top - height / 2;  // Y position relative to box center

  const rotateX = -(mouseY / height) * 30; // Rotate up/down
  const rotateY = (mouseX / width) * 30;  // Rotate left/right

  boxContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});


