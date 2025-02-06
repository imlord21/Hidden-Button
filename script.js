const ENOUGH = 100;

function generateButtons() {
    const container = document.getElementById("buttons-container");
    const numberInput = document.getElementById("number-of-buttons");
    const message = document.getElementById("message");
    container.innerHTML = "";
    message.textContent = "";
    const numberOfButtons = parseInt(numberInput.value, 10);
    if (isNaN(numberOfButtons) || numberOfButtons <= 2 || numberOfButtons > ENOUGH) {
        message.textContent = "Please enter a number between 3 and 100!";
        return;
    }
    const winningIndex = Math.floor(Math.random() * numberOfButtons);
    for (let i = 0; i < numberOfButtons; ++i) {
        const button = document.createElement("button");
        button.textContent = `Button ${i + 1}`;
        button.className = "button";
        button.addEventListener("click", () => handleButtonClick(i, winningIndex));
        container.appendChild(button);
    }
}

function handleButtonClick(index, winningIndex) {
    const message = document.getElementById("message");
    if (index === winningIndex) {
        message.textContent = `🎉 Congratulations! Button ${index + 1} is the winner! 🎉`;
        message.style.color = "green";
    } else {
        message.textContent = `❌ Button ${index + 1} is not the winner. Try again! ❌`;
        message.style.color = "red";
    }
}
