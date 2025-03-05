const today = new Date().toDateString();

const date = document.getElementById("date");

date.innerHTML = `<h5 class="text-[12px] font-bold">${today} </h5>`;
