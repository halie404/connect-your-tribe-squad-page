document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".student").forEach((student) => {
    const energy = student.dataset.energy;

    if (energy === "Not specified") {
      student.classList.add("low-opacity");
    }
  });
});

function filterStudents(energyType) {
  document.querySelectorAll(".student").forEach((student) => {
    const energy = student.dataset.energy;

    if (energy === "Not specified") {
      student.classList.add("low-opacity");
    } else if (energyType === "all" || energy === energyType) {
      student.classList.remove("low-opacity");
    } else {
      student.classList.add("low-opacity");
    }
  });
}
