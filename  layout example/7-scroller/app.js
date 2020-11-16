console.log("Hell");
const rootElement = document.querySelector(".root");
const sections = document.querySelectorAll("section");
let currentSectionIndex = 0;

document.addEventListener("wheel", (e) => {
  const direction = e.deltaY > 0 ? 1 : -1;

  if (e.deltaY > 0 && direction === 1) {
    //scroll wheel up
    // console.log(e.deltaY, direction);
    const isLastSection = currentSectionIndex === sections.length - 1;
    if (isLastSection) return;
  } else if (e.deltaY < 0 && direction === -1) {
    const firstSection = currentSectionIndex === 0;
    if (firstSection) return;
  }

  currentSectionIndex = currentSectionIndex + direction;

  console.log(currentSectionIndex);
});
