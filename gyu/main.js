const countEl = document.querySelector('.count');
const trees = document.querySelector(".trees");
const tree = trees.querySelector(".tree")
const btn = document.querySelector("button")

let tree_num = 56;
let loop_num = parseInt(tree_num % 10);
let btn_num = parseInt(tree_num / 10);
console.log(tree_num);
countEl.textContent = "총" + tree_num +"그루";

for (i =0; i< loop_num; i++){
    const newElement = document.createElement("div");
    newElement.textContent = "";
    newElement.setAttribute("class", "tree");
    trees.appendChild(newElement);
    console.log('!!!')
}

btn.textContent = btn_num