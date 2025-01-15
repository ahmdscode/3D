const boxContainer = document.getElementById('box-effect');

// Add a mousemove event listener to the box container
boxContainer.addEventListener('mousemove', (event) => {
  const { width, height, left, top } = boxContainer.getBoundingClientRect();

  // Calculate the position of the mouse relative to the center of the box container
  const mouseX = event.clientX - left - width / 2; // X position relative to box center
  const mouseY = event.clientY - top - height / 2;  // Y position relative to box center

  // Calculate rotation angles (scaling for sensitivity)
  const rotateX = -(mouseY / height) * 30; // Rotate up/down
  const rotateY = (mouseX / width) * 30;  // Rotate left/right

  // Apply the rotation to the box container
  boxContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});


