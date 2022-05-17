import { sum } from "./js/math.js";
const { priceFormat } = require("./js/format");
import "./css/style.css";
import "./css/title.less";
import "./font/iconfont.css";

// 导入图片
import avatar from "./img/avatar.png";

console.log(sum(10, 20));
console.log(priceFormat());

const div = document.createElement("div");
div.className = "title";
div.innerHTML = "webpack-css";

// 方式一：设置 img 元素的 src
const imgEl = document.createElement("img");
imgEl.src = avatar;

// 方式二：设置背景图片
const bgEl = document.createElement("div");
bgEl.className = "image-bg";

// i元素
const iEl = document.createElement('i');
iEl.className = "iconfont icon-ashbin";

document.body.appendChild(div);
document.body.appendChild(imgEl);
document.body.appendChild(bgEl);
document.body.appendChild(iEl);
