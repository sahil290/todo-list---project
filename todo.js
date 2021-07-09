function listHere() {
    const item = document.getElementById("typeHere").value
    const text = document.createTextNode(item)
    const newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("listHere").appendChild(newItem)
}