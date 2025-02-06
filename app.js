const time = document.querySelector("[data-testid='currentTimeUTC']");
const date = new Date();
time.textContent = date.toUTCString();