const testo = "WTFMARCO.SUN"; // 改字符的
const fontSize = 120;         // 字体的大小
const parti = 40;             // 切多少片
const sfasamento = 4;         // 随机左右抖动
const colorChangeSpeed = 5;   // 控制颜色变换速度（帧数变化频率，越小越快）

/** @type {Font} */
let font;

function preload() {
  font = loadFont("./fonts/Adobe-Jenson-Pro-Bold-Caption.ttf");
}

function setup() {
  noLoop()
  createCanvas(400, 400, "svg");
  addDownloadButton();

  rectMode(CENTER);
  angleMode(DEGREES);

  // 为了让颜色随时间变化，需要开启循环绘制
  // 你也可以通过 mousePressed 等方式手动控制 loop/noLoop
   // 可调帧率
}

function draw() {
  clear(); // 不要删除！

  textFont(font);
  textLeading(fontSize);
  textSize(fontSize);

  const text_width = textWidth(testo);
  const h_parti = fontSize / parti;

  noStroke();

  for (let i = 0; i < parti; i++) {
    push();

    translate(text_width / 2, 0);
    translate(random(-sfasamento, sfasamento), 0);

    beginClip();
    rect(0, i * h_parti + h_parti / 2, text_width, h_parti);
    endClip();

    // 使用 frameCount 和 i 来生成随时间变化的随机色
    let hueSeed = 20 + i * 10
    let c = color(`hsl(${hueSeed}, 80%, 50%)`);
    fill(c);

    textSVG(testo, -text_width / 2, fontSize);

    pop();
  }
}
