const qaAccordion = document.querySelector("#collapseSix");
if (qaAccordion) {
  const qaMusic = new Audio("music/qa.mp3");

  qaAccordion.addEventListener("show.bs.collapse", () => {
    qaMusic.play();
  });

  qaAccordion.addEventListener("hide.bs.collapse", () => {
    qaMusic.pause();
    qaMusic.currentTime = 0;
  });
}