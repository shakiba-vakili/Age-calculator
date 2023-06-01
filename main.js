const btn = document.querySelector(".arrow-box");

btn.addEventListener("click", calculateAge);

function calculateAge() {
  let d1 = document.getElementById("Day").value;
  let m1 = document.getElementById("Month").value;
  let y1 = document.getElementById("Year").value;

  let date = new Date();
  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 == null || d1 == "") {
    document.getElementById("message").innerHTML =
      "Choose a correct Day please!";
    return false;
  } else if (m1 == null || m1 == "") {
    document.getElementById("message").innerHTML =
      "Choose a correct Month please!";
    return false;
  } else if (y1 == null || y1 == "") {
    document.getElementById("message").innerHTML =
      "Choose a correct Year please!";
    return false;
  }

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;

  document.querySelector(
    ".result-box"
  ).innerHTML = ` ${y} years ${m} months ${d} days
  `;
}

function clearResult() {
  document.querySelector(".result-box").innerHTML = "";
}

document.getElementById("Day").addEventListener("keydown", clearResult);
document.getElementById("Month").addEventListener("keydown", clearResult);
document.getElementById("Year").addEventListener("keydown", clearResult);
