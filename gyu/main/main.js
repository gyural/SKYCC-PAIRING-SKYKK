const countEl = document.querySelector('.count');
const trees = document.querySelector(".trees");
const puzzle = Array.from(trees.children);
const btn = document.querySelector("button")

let tree_num = 145;
let loop_num = parseInt(tree_num % 10);
let btn_num = parseInt(tree_num / 10);
console.log(tree_num);
countEl.textContent = "총" + tree_num +"그루";

// 개수로 나무를 구현했을 때의 코드
// const tree = trees.querySelector(".tree")
// for (i =0; i< loop_num; i++){
//     const newElement = document.createElement("div");
//     newElement.textContent = "";
//     newElement.setAttribute("class", "tree");
//     trees.appendChild(newElement);
//     console.log('!!!')
// }

console.log(puzzle);
for (i = 0; i < loop_num; i++){
    puzzle[9-i].style.opacity = 0;
} 
btn.textContent = btn_num