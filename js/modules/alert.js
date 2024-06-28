export class Alert {
  text;
  bgColor;

  constructor(text, bgColor) {
    this.text = text;
    this.bgColor = bgColor;

    this.alertModal = document.createElement("div");
    document.querySelector("main").appendChild(this.alertModal);
    this.alertModal.classList =
      "fixed flex rounded py-2 top-32 right-32 h-14 z-50";

    this.content = document.createElement("p");
    this.alertModal.appendChild(this.content);
    this.content.classList = "text-base font-bold text-white mx-2";
    this.content.innerText = this.text;
  }

  setAlertBgColor() {
    this.bgColor === "primary"
      ? this.alertModal.classList.add("bg-green-600")
      : this.alertModal.classList.add("bg-red-600");
  }

  removeAlert() {
    setTimeout(() => {
      this.alertModal.remove();
    }, 2000);
  }
}
