// Função para pegar o conteúdo do editor
function getContent() {
    return document.getElementById('editor').innerHTML;
}

// Função para definir o conteúdo do editor
function setContent(content) {
    document.getElementById('editor').innerHTML = content;
}
// Função para executar os comandos de formatação de texto
function execCommand(command) {
    document.execCommand(command);
}


// Adicione event listeners para salvar o conteúdo ou executar outras ações conforme necessário
function execCommand(command) {
    document.execCommand(command);
}

function changeFontSize() {
    var size = prompt("Enter font size (1-7)", "");
    document.execCommand("fontSize", false, size);
}

function changeTextColor() {
    var color = document.getElementById("text-color").value;
    document.execCommand("foreColor", false, color);
}

function uploadFile() {
    var file = document.getElementById("file-upload").files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = document.createElement("img");
        img.src = e.target.result;
        document.getElementById("editor").appendChild(img);
    }
    reader.readAsDataURL(file);
}
