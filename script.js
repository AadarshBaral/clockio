    // Function to enter full screen mode
    function enterFullScreen() {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }

    // Function to exit full screen mode
    function exitFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    // Add a click event listener to the button
    const fullscreenButton = document.getElementById('fullscreenButton');
    fullscreenButton.addEventListener('click', () => {
      if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        // If already in full screen, exit full screen
        exitFullScreen();
      } else {
        // If not in full screen, enter full screen
        enterFullScreen();
      }
    });

    // Add a keydown event listener to exit full screen when "Escape" is pressed
    document.addEventListener('keydown', (event) => {
      if (
        (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) &&
        event.keyCode === 27
      ) {
        // If in full screen and "Escape" is pressed, exit full screen
        exitFullScreen();
      }
    });