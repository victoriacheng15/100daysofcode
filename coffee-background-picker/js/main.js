document.querySelector("li:first-child").onclick = first;
document.querySelector("li:nth-child(2)").onclick = second;
document.querySelector("li:nth-child(3)").onclick = third;
document.querySelector("li:nth-child(4)").onclick = fourth;
document.querySelector("li:nth-child(5)").onclick = fifth;

function changeImage(link) {
  document.querySelector("[data-image]").innerHTML = "";
  const img = document.createElement("img");
  img.src = link;
  img.alt = "coffee!!";
  document.querySelector("[data-image]").appendChild(img);
}

function first() {
  document.body.style.backgroundColor = "#38220f";
  changeImage(
    "https://images.unsplash.com/photo-1545341122-ded434ec92ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  );
}

function second() {
  document.body.style.backgroundColor = "#634832";
  changeImage(
    "https://images.unsplash.com/photo-1547254905-f38a43abfc0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  );
}

function third() {
  document.body.style.backgroundColor = "#967259";
  changeImage(
    "https://images.unsplash.com/photo-1522120193639-2cd0bbe2979b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  );
}

function fourth() {
  document.body.style.backgroundColor = "#dbc1ac";
  changeImage(
    "https://images.unsplash.com/photo-1514354900327-3e3f538a755c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  );
}

function fifth() {
  document.body.style.backgroundColor = "#ece0d1";
  changeImage(
    "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  );
}
