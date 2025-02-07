document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
  
    // Aplicar el tema guardado al cargar la página
    document.body.setAttribute('data-theme', savedTheme);
  
    // Cambiar el ícono del botón según el tema actual
    themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';
  
    // Manejar el clic en el botón de cambio de tema
    themeToggle.addEventListener('click', function () {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
      // Cambiar el tema y actualizar el ícono del botón
      document.body.setAttribute('data-theme', newTheme);
      themeToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
  
      // Guardar el tema en localStorage
      localStorage.setItem('theme', newTheme);
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar el botón y la sección de GIFs
    const toggleGifsButton = document.getElementById('toggleGifs');
    const gifSection = document.getElementById('gifSection');
  
    // Manejar el clic en el botón
    if (toggleGifsButton && gifSection) {
      toggleGifsButton.addEventListener('click', function () {
        if (gifSection.style.display === 'none' || gifSection.style.display === '') {
          gifSection.style.display = 'block'; // Mostrar la sección
          toggleGifsButton.textContent = 'Ocultar Presentaciones'; // Cambiar texto del botón
        } else {
          gifSection.style.display = 'none'; // Ocultar la sección
          toggleGifsButton.textContent = 'Ver Presentaciones'; // Cambiar texto del botón
        }
      });
    }
  });