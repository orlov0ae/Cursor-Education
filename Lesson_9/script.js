function generateBlocks() {
  const container = document.getElementById('container');
  for (let i = 0; i < 25; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    container.appendChild(block);
  }
}

function generateBlocksInterval() {
  generateBlocks();
  const blocks = document.querySelectorAll('.block');
  setInterval(function() {
    for (let i = 0; i < blocks.length; i++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const color = `rgb(${r}, ${g}, ${b})`;
      blocks[i].style.backgroundColor = color;
    }
  }, 1000);
}

generateBlocksInterval();

