const ENOUGH = 100;
function generateButtons() {
    const CONTAINER = document.getElementById("buttons-container");
    const NUMBER_INPUT = document.getElementById("number-of-buttons");
    const MESSAGE = document.getElementById("message");
    CONTAINER.innerHTML = "";
    MESSAGE.textContent = "";
    const NUMBER_OF_BUTTONS = parseInt(NUMBER_INPUT.value, 10);

    if (isNaN(NUMBER_OF_BUTTONS) || NUMBER_OF_BUTTONS <= 2 || NUMBER_OF_BUTTONS > ENOUGH) {
        MESSAGE.textContent = "Please enter a number between 3 or 100!";
        return;
    }

    CONTAINER.dataset.winningIndex = Math.floor(Math.random() * NUMBER_OF_BUTTONS);

    for (let i = 0; i < NUMBER_OF_BUTTONS; ++i) {
        const BUTTON = document.createElement("button");
        BUTTON.textContent = `Button ${i + 1}`;
        BUTTON.className = "button";
        BUTTON.addEventListener("click", () => handleButtonClick(i));
        CONTAINER.appendChild(BUTTON);
    }
}

function handleButtonClick(index) {
    const CONTAINER = document.getElementById("buttons-container");
    const MESSAGE = document.getElementById("message");
    const winningIndex = parseInt(CONTAINER.dataset.winningIndex, 10);
    if (index === winningIndex) {
        MESSAGE.textContent = `🎉 Congratulations! Button ${++index} is the winner! 🎉`;
        MESSAGE.style.color = "green";
    } else {
        MESSAGE.textContent = `❌ Button ${++index} is not the winner. Try again! ❌`;
        MESSAGE.style.color = "red";
    }
}