var IconCreatedConfirmation = () => {
  var botao = document.querySelector("#copiar");
  var classIconAddOrRemove = ["fa-sharp", "fa-solid", "fa-circle-check"];
  var interval = 3000;
  var addIconConfirmation = document.createElement("i");
  for (let i of classIconAddOrRemove) {
    addIconConfirmation.classList.add(i);
  }
  addIconConfirmation.style.width = "2rem";
  addIconConfirmation.style.color = "#25a155";
  botao.appendChild(addIconConfirmation);
  botao.style.borderColor = "#25a155";
  botao.style.color = "#25a155";

  setInterval(() => {
    for (let i of classIconAddOrRemove) {
      addIconConfirmation.classList.remove(i);
    }
    addIconConfirmation.style.width = "0";
    botao.style.color = "#0A3871";
    botao.style.borderColor = "#0A3871";
    addIconConfirmation.style.animation = "opacityAttribute";
  }, interval);
};

var copiaTexto = () => {
  var textareaOutput = document.querySelector(".texto-area-saida");
  textareaOutput.removeAttribute("disabled");
  textareaOutput.select();
  navigator.clipboard.writeText(textareaOutput.value);
  IconCreatedConfirmation();
  textareaOutput.setAttribute("disabled", "");
};
