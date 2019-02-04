const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let i = 0;
  
  function onKeyDownHandler(e) {
    const key = e.key;
    console.log(key)
    if (key === codes[i]) {
      i++;
      
      if (i === codes.length) {
        alert("victory is ours");
      }
    } else { i = 0; }
    console.log(is);
  }
  
  document.body.addEventListener("keydown", onKeyDownHandler);
}
