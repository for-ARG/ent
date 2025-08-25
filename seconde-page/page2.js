const mailItems = document.querySelectorAll(".mail-item");
const mailSubject = document.getElementById("mail-subject");
const mailBody = document.getElementById("mail-body");

mailItems.forEach(item => {
  item.addEventListener("click", () => {
    mailSubject.textContent = item.getAttribute("data-subject");
    mailBody.textContent = item.getAttribute("data-content");
  });
});
