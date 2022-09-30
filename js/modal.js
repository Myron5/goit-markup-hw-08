(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    backdrop: document.querySelector("[data-backdrop]"),
    modal: document.querySelector("[data-modal]"),
    firstInput: document.querySelector("[data-autofocus]"), 
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("modal-box--active");
    if (refs.modal.classList.toggle("modal-box--close")) 
      setTimeout(() => { refs.backdrop.classList.toggle("backdrop--is-hidden") }, '980');
    else {
      refs.backdrop.classList.toggle("backdrop--is-hidden");
      refs.firstInput.focus();
    }
  }
})();

(() => {
  const refs = {
    checkBox: document.querySelector("[data-policy]"),
    submitBtn: document.querySelector("[data-submit-btn]"),
  };

  refs.checkBox.addEventListener("change", toggleAttr);

  function toggleAttr() {
    refs.submitBtn.toggleAttribute("disabled")
  }

})();