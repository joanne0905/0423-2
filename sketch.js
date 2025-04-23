function setup() {
  // 建立依照視窗的高寬當作畫布寬高
  createCanvas(windowWidth, windowHeight);
  // 設定顏色模式為 HSB
  colorMode(HSB);
}

function draw() {
  // 清除畫布
  background(0, 0, 100);

  // 計算顏色和亮度，根據滑鼠的位置
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  let brightness = map(mouseY, 0, windowHeight, 0, 100);

  // 設定填充顏色
  fill(hue, 100, brightness);
  noStroke();

  // 畫圓形，寬高為 200px
  ellipse(mouseX, mouseY, 200, 200);
}

// 當視窗大小改變時，重新設定寬高
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
