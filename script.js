const colorPicker = document.getElementById("color");
const colorCode = document.getElementById("color-code");

colorPicker.addEventListener("input", () => {
    const selectedColor = colorPicker.value;
    document.body.style.backgroundColor = selectedColor;
    colorCode.textContent = selectedColor;
});
