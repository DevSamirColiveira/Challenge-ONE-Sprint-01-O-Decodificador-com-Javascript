var textareaInput = document.querySelector("textarea");
var textareaOutput = document.querySelector(".text-area-output");

var sapnNotice = document.querySelector(".crypto-notice");

var buttonCryptography = document.querySelector(".button-cryptography");
var buttonDecryption = document.querySelector(".button-decryption");

var vogais = ["a", "e", "i", "o", "u"];
var novoVogais = ["ai", "enter", "imes", "ober", "ufat"];

var encryptAndDecryptText = (texto, vogais, novoVogais) => {
  let result = "";
  let i = 0;
  while (i < texto.length) {
    let matched = false;
    for (let j = 0; j < novoVogais.length; j++) {
      if (texto.slice(i, i + novoVogais[j].length) === novoVogais[j]) {
        result += vogais[j];
        i += novoVogais[j].length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      result += texto[i];
      i++;
    }
  }
  return result;
};

var isLowerCase = (texto) => /^[a-z\s]+$/.test(texto);
var clearTextareaInput = () => (textareaInput.value = "");
var focusTextareaInput = () => textareaInput.focus();

var removeTheDangerClassOverTime = () => {
  var interval = 5000;
  return setInterval(() => {
    sapnNotice.classList.remove("danger");
  }, interval);
};

var showResult = (callback) => {
  var texto = textareaInput.value;
  if (texto.length > 0) {
    textareaOutput.classList.add("text-cryption-whit");
    return (textareaOutput.innerHTML = `
        <textarea class='texto-area-saida' disabled>${callback} </textarea>
        <button class='button-copy' id='copiar' onclick='copiaTexto()'>
          Texto pronto pode Copiar
        </button>
      `);
  }
  return alert("Preencha sua mensagem!");
};

var encrypt = () => {
  var text = textareaInput.value;
  if (isLowerCase(text)) {
    showResult(encryptAndDecryptText(text, novoVogais, vogais));
    clearTextareaInput();
    focusTextareaInput();
  } else {
    sapnNotice.classList.add("danger");
    removeTheDangerClassOverTime();
    clearTextareaInput();
    focusTextareaInput();
  }
};

var decrypt = () => {
  var text = textareaInput.value;
  if (isLowerCase(text)) {
    showResult(encryptAndDecryptText(text, vogais, novoVogais));
    clearTextareaInput();
    focusTextareaInput();
  } else {
    sapnNotice.classList.add("danger");
    removeTheDangerClassOverTime();
    clearTextareaInput();
    focusTextareaInput();
  }
};

buttonCryptography.addEventListener("click", encrypt);
buttonDecryption.addEventListener("click", decrypt);
