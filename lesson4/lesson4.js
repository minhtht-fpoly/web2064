// // document.getElementById("target1").style.backgroundColor = "red"
// // const teacher = {
// //     ten: "Minh",
// //     age: 25
// // }
// // document.getElementById("target2").className = "redBackGround"





// // document.getElementById("target2").classList.toggle("giantText")
// const inputs = document.querySelectorAll("input")
// for(let i = 0; i< inputs.length; i++)
// {
//     inputs[i].addEventListener("input", (event)=>{ 
//         if(event.target.checked == true){
//           console.log(event.target.parentElement)
            
//             event.target.parentElement.style.textDecoration = "line-through"
//         }
//         else
//         {
//             event.target.parentElement.style.textDecoration= ""
//         }
//     })
// }
document.getElementById("target").innerHTML = "<p>Text thêm bởi JS</p>"
//Tạo ra 1 thẻ p mới bằng JS
const newNode = document.createElement("p")
newNode.innerText = "Text them bởi JavaScript"
document.getElementById("target").appendChild(newNode)

console.log(newNode)
