// Task 1: Change paragraph text when button is clicked
const changeParagraphTextBtn = document.getElementById("changeTextBtn");
let changingText = document.getElementById("changingText");
let originalText = changingText.innerText;
changeParagraphTextBtn.addEventListener("click", () => {
    if (changingText.innerText === originalText) {
        changingText.innerText = "Changed text - I am the new text!";
    } else {
        changingText.innerText = originalText;
    }
})

// Task 2: Add input text to list when button is clicked
const inputText = document.getElementById("listInput");

document.getElementById("addItemBtn").addEventListener("click", () => {
    const itemList = document.getElementById("itemList");
    const inputValue = inputText.value.trim();

    if (inputValue !== "") {
        const newList = document.createElement("li");
        newList.textContent = inputValue;
        itemList.appendChild(newList);
        inputText.value = "";
    } else {
        alert("Please enter a valid item.");
    }
});



// Task 3: Change background color when different buttons are clicked
const sections = document.querySelectorAll(".section");
const thirdSection = sections[2]; // 3rd section (index 2)

thirdSection.addEventListener("click", (event) => {
    const clickedElement = event.target;

    // Check if a button inside the section was clicked
    if (clickedElement.tagName === "BUTTON") {
        const btnText = clickedElement.innerText.toLowerCase();

        // Change body background color based on button text
        if (btnText.includes("light blue")) {
            document.body.style.backgroundColor = "lightblue";
        } else if (btnText.includes("light green")) {
            document.body.style.backgroundColor = "lightgreen";
        } else if (btnText.includes("light pink")) {
            document.body.style.backgroundColor = "lightpink";
        } else if (btnText.includes("reset")) {
            document.body.style.backgroundColor = ""; // Resets to default
        }
    }
});


// Task 4: Hide/show element when Hide/Show button is clicked
document.getElementById("toggleBtn").addEventListener("click", () => {
    document.getElementById("toggleElement").classList.toggle("hidden");
});