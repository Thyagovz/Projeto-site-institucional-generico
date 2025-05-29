handleModal = () => {
  const button = document.querySelectorAll(".showModal");
  const modalContainer = document.querySelector("#modalController");

  button.forEach((button) => {
    button.addEventListener("click", () => {
      modalContainer.showModal();
      closeModal();
    });
  });
};

closeModal = () => {
  const button = document.querySelector("#closeModal");
  const modalContainer = document.querySelector("#modalController");
  button.addEventListener("click", () => {
    modalContainer.close();
  });
};

handleModal();
