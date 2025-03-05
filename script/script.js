const task_assigned = document.getElementById("task");
let convertedTask = parseInt(task_assigned.innerText);

const cards = document.getElementsByClassName("cards");

const navAdd = document.getElementById("nav-add");

let convertedNavAdd = parseInt(navAdd.innerText);

const activity = document.getElementById("activity");

let counter = cards.length;

for (card of cards) {
  card.addEventListener("click", function (e) {
    // Completed task
    const id = e.target.id.split("-")[1];
    const titleId = document.getElementById(`title-${id}`);
    const titleText = titleId.innerText;
    const completed_id = document.getElementById(`${e.target.id}`);
    completed_id.disabled = true;
    completed_id.classList.add("bg-gray-400", "text-[#d0d2db]");
    // calculation
    convertedTask = convertedTask - 1;
    task_assigned.innerText = convertedTask;
    convertedNavAdd = convertedNavAdd + 1;
    navAdd.innerText = convertedNavAdd;
    // Date time added
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format time
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12 || 12}.${minutes}.${seconds} ${ampm}`;

    // Update Task Counter
    counter--;
    // Alert when a task is completed
    alert("Good! Board Updated Successfully!!!");
    //  activity added
    let newActivity = document.createElement("div");
    newActivity.classList.add("act");
    newActivity.innerHTML = `<p class="rounded-xl bg-[#f5f8ff] p-4">You have Completed the Task ${titleText} issue at ${formattedTime}</p> <br>`;
    activity.appendChild(newActivity);
    // alert when done all tasks
    if (counter === 0) {
      alert(
        "Congrats!! You Have Successfully Completed all the current tasks."
      );

      // Add message to activity log
      let completionMessage = document.createElement("div");
      completionMessage.classList.add("act");
      completionMessage.innerHTML = `
          <p class="rounded-xl bg-green-200 p-4 font-bold text-center">
            🎉 Congrats!! You Have Successfully Completed all the current tasks on ${formattedTime}. 🎉
          </p>
        `;
      activity.appendChild(completionMessage);
    }
  });
}

// Delete activity history
document.getElementById("btn-activity").addEventListener("click", function () {
  const activity = document.getElementById("activity");

  const logs = document.querySelectorAll(".act");

  for (let log of logs) {
    log.remove();
  }
});
