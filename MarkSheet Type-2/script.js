function calculate() {
  const name = document.getElementById("name").value;
  const subject1 = parseFloat(document.getElementById("subject1").value);
  const subject2 = parseFloat(document.getElementById("subject2").value);
  const subject3 = parseFloat(document.getElementById("subject3").value);
  const subject4 = parseFloat(document.getElementById("subject4").value);

  const totalMarks = subject1 + subject2 + subject3 + subject4;
  const average = totalMarks / 4;
  const passFail = average >= 40 ? "Pass" : "Fail";

  document.getElementById("totalMarks").textContent = totalMarks;
  document.getElementById("average").textContent = average.toFixed(2);
  document.getElementById("passFail").textContent = passFail;
}
