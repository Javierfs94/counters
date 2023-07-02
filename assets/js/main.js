window.onload = (event) => {
  var decrease = document.getElementById("decrease");
  var reset = document.getElementById("reset");
  var increase = document.getElementById("increase");
  var newCounter = document.getElementById("new-counter");

  decrease.addEventListener("click", function (e) {
    var counter = document.querySelectorAll(".counter");

    counter.forEach((element) => {
      element.innerHTML = parseInt(element.innerHTML, 10) - 1;
    });
  });

  reset.addEventListener("click", function (e) {
    var counter = document.querySelectorAll(".counter");

    counter.forEach((e) => e.remove());

    createh2Node();
  });

  increase.addEventListener("click", function (e) {
    var counter = document.querySelectorAll(".counter");

    counter.forEach((element) => {
      element.innerHTML = parseInt(element.innerHTML, 10) + 1;
    });
  });

  newCounter.addEventListener("click", function (e) {
    createh2Node();
  });
};

function createh2Node() {
  const para = document.createElement("h2");
  para.classList.add("counter");
  const node = document.createTextNode("0");
  para.appendChild(node);

  var counters = document.getElementById("counters");
  counters.appendChild(para);
}
