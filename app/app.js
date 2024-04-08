addProduct = document.querySelector(".add-product");
const btnCerrar = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");

addProduct.addEventListener("click", () => {
  modal.showModal();
});

btnCerrar.addEventListener("click", () => {
  modal.close();
});
