let selectedValue;
const submitBtn = document.querySelector(".submit-btn");

function RatingClicked(clickedRating) {
  if (clickedRating.classList.contains("rating-selected")) {
    clickedRating.classList.remove("rating-selected");
    clickedRating.classList.add("rating-not-selected");
    selectedValue = undefined;
    submitBtn.classList.add("btn-disabled");
    submitBtn.classList.remove("btn-enabled");
    submitBtn.disabled = true;
  }
  else {
    const ratings = document.querySelectorAll(".rating");
    for (let i = 0; i < ratings.length; i++) {
      if (ratings[i].classList.contains("rating-selected")) {
        ratings[i].classList.remove("rating-selected");
        ratings[i].classList.add("rating-not-selected");
      }
    }
    clickedRating.classList.remove("rating-not-selected");
    clickedRating.classList.add("rating-selected");

    selectedValue = clickedRating.textContent;

    submitBtn.classList.add("btn-enabled");
    submitBtn.classList.remove("btn-disabled");
    submitBtn.disabled = false;

  }
}

function SubmitClicked() {
  document.querySelector(".rating-card").classList.add("invisible");
  document.querySelector(".thank-you-card").classList.remove("invisible");

  document.querySelector(".user-rating").textContent = `You selected ${selectedValue} out of 5`;
}



function watchForHover() {
  // lastTouchTime is used for ignoring emulated mousemove events
  // that are fired after touchstart events. Since they're
  // indistinguishable from real events, we use the fact that they're
  // fired a few milliseconds after touchstart to filter them.
  let lastTouchTime = 0

  function enableHover() {
    if (new Date() - lastTouchTime < 500) return
    document.body.classList.add('hasHover')
  }

  function disableHover() {
    document.body.classList.remove('hasHover')
  }

  function updateLastTouchTime() {
    lastTouchTime = new Date()
  }

  document.addEventListener('touchstart', updateLastTouchTime, true)
  document.addEventListener('touchstart', disableHover, true)
  document.addEventListener('mousemove', enableHover, true)

  enableHover()
}

watchForHover()