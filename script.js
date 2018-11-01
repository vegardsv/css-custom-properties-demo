const luminanceElement = document.querySelector("#luminance");
const colorPicker = document.querySelector("#bgColorPicker");

const handleColorChange = evt => {
  const color = evt.target.value;
  const luminanceValue = luminance(hexToRGB(color.substring(1)));
  luminanceElement.innerHTML = `${color} - ${Math.round(luminanceValue)}`;
  const textColor = luminanceValue > 126 ? "#000000" : "#ffffff";
  document.documentElement.style.setProperty("--textColor", textColor);
  document.documentElement.style.setProperty("--backgroundColor", color);
};

colorPicker.addEventListener("change", handleColorChange);

const luminance = ({ r, g, b }) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

const hexToRGB = hex => {
  var bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
};
