const handleClick = document.querySelector(".wrapper");
const headContainer = document.querySelector(".head-container");
const partH = document.querySelectorAll(".part-h");
const a = document.querySelectorAll(".a");
const topLineH = document.querySelector(".top-line-h");
const cardContainer = document.querySelector(".card-container");
const cardWrapper = document.querySelector(".card-wrapper");
const layer1 = document.querySelector(".layer-1");
const layer2 = document.querySelector(".layer-2");
const boxContainer = document.querySelector(".box-container");
console.log(
  handleClick,
  headContainer,
  partH,
  a,
  topLineH,
  cardContainer,
  layer1,
  layer2
);

handleClick.addEventListener("click", function () {
  headContainer.classList.toggle("moveTop200px");
  partH.forEach((e) => {
    e.classList.toggle("fade");
  });
  a.forEach((a) => {
    a.classList.toggle("fade");
  });
  topLineH.classList.toggle("fade");
  cardWrapper.classList.toggle("cardAnime");
  layer2.classList.toggle("layer-2-style");
  cardContainer.classList.toggle("no-Animation");
  boxContainer.classList.toggle("no-Animation");
});
