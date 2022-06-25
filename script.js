const btn_div = document.getElementById("bt-div");
const btn_alr = document.getElementById("bt-alr");
const op_div = document.getElementById("op-div");

btn_div.addEventListener("click", showInDiv);
btn_alr.addEventListener("click", showInAlert);

function showInDiv(event) {
    let content = document.getElementById("inp").value;
    if (content == "") {
        content = "You haven't typed anything";
    }
    op_div.innerHTML = content;
}

function showInAlert(event) {
    let content = document.getElementById("inp").value;
    if (content == "") {
        content = "You haven't typed anything";
    }
    alert(content);
}

