import { sum } from "./js/math.js";
const { priceFormat } = require("./js/format");
import "./css/style.css";
import "./css/title.less";

console.log(sum(10, 20));
console.log(priceFormat());

const div = document.createElement("div");
div.className = "title";
div.innerHTML = "webpack-css";

document.body.appendChild(div);
