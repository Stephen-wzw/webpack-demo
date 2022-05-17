import { createApp } from "vue";

import { sum } from "./js/math.js";
if (module.hot) {
  module.hot.accept("./js/math.js", () => {
    console.log("模块更新了");
  })
}
const { priceFormat } = require("./js/format.js");

import App from "./vue/App.vue";

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

// babel
const messages = [1, 2, 3];
messages.map((n) => n + 1);

// vue
const app = createApp(App);
app.mount("#app");
