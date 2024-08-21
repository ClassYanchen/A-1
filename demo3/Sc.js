const carousel = document.getElementById('carousel');
const images = carousel.querySelectorAll('img');
let currentIndex = 0;

function showNextImage() {
  // 将当前图片向左移动
  const currentImage = images[currentIndex];
  currentImage.style.transform = 'translateX(-100%)';
  
  // 更新当前索引
  currentIndex = (currentIndex + 1) % images.length;
  
  // 将下一张图片设置为当前图片
  const nextImage = images[currentIndex];
  nextImage.style.transform = 'translateX(0)';
  
  // 延迟移除过渡效果，以实现平滑动画
  setTimeout(() => {
    currentImage.style.transform = '';
  }, 500); // 500ms 为动画持续时间
}

// 设置自动切换
setInterval(showNextImage, 3000); // 每3秒切换一次图片