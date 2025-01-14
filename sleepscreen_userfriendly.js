document.addEventListener('DOMContentLoaded', () => {
    alert("You are seeing the sleepScreen project");

    let ball = document.querySelector('.round');
    let ballMoving = false;
    let left = 225; // Initial X position
    let top = 225; // Initial Y position
    let velocityX = 2; // Speed in X direction
    let velocityY = 2; // Speed in Y direction
    let boxWidth = 1534; // Width of the box (adjust for your layout)
    let boxHeight = 500; // Height of the box
    let ballSize = 50; // Diameter of the ball
    let animationFrameId;

    // Function to generate a random color
    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    };

    // Function to update the ball's position
    const updateBallPosition = () => {
        // Update position
        left += velocityX;
        top += velocityY;

        // Check for collision with borders and reverse direction
        if (left <= 0 || left >= boxWidth - ballSize) {
            velocityX = -velocityX; // Reverse X direction
            ball.style.backgroundColor = getRandomColor(); //change the color of the ball
            

        }
        if (top <= 0 || top >= boxHeight - ballSize) {
            velocityY = -velocityY; // Reverse Y direction
            ball.style.backgroundColor = getRandomColor(); //change the color of the ball
        }

        // Apply the new position to the ball
        ball.style.left = left + 'px';
        ball.style.top = top + 'px';

        // Request the next frame
        animationFrameId = requestAnimationFrame(updateBallPosition);
    };

    // Event listener to start the ball movement
    document.querySelector('.start').addEventListener('click', () => {
        if (!ballMoving) {
            ballMoving = true;
            updateBallPosition();
        }
    });
    // Event listener to stop the ball movement
    document.querySelector('.stop').addEventListener('click', () => {
        if (ballMoving) {
            ballMoving = false;
            cancelAnimationFrame(animationFrameId);
        }
    });
});