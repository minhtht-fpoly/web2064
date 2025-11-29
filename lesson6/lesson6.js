// // let a;
// // setTimeout(() => {
// //   a = 1;
// // }, 2000);
// // const b = 2;
// // console.log(a);
// // console.log(b);
// // console.log(a, b);

// //Lời chào
// // let data;
// // function loiChao(data) {
// //   alert("Vip chí tôn" + data.name + " đã online");
// // }
// // function getData() {
// //   setTimeout(() => {
// //     data = { name: "Faker" };
// //     loiChao(data);
// //   }, 2000);
// // }
// // getData();
// const getLuckyMoney = new Promise((resolve, reject) => {
//   const money = 20000000;
//   const chance = Math.random();
//   setTimeout(() => {
//     if (chance >= 0.5) {
//       resolve("Chúc mừng bạn lấy lại được" + money);
//     } else {
//       reject("Còn cái nịt");
//     }
//   }, 1800);
// });
// getLuckyMoney
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// fetch("http://localhost:3000/students")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
// async function render() {
//   try {
//     const respon = await fetch("http://localhost:3000/students");
//     const data = await respon.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// render();

const render = () => {
  fetch("http://localhost:3000/students")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let renderString = data
        .map((currentValue, index) => {
          console.log(currentValue);
          return `<tr>
            <th scope="row">${index + 1}</th>
            <td>${currentValue.hoTen}</td>
            <td>${currentValue.tuoi}</td>
            <td>${currentValue.gioiTinh}</td>
            <td>@${currentValue.email}</td>
            <td>
              <button class="btn btn-warning">Sửa</button>
              <button class="btn btn-danger" onclick="xoa(${
                currentValue.id
              })">Xóa</button>
            </td>
          </tr>`;
        })
        .join("");
      console.log(renderString);
      document.getElementById("renderBody").innerHTML = renderString;
    });
};
render();
function xoa(id) {
  if (
    window.confirm("Bạn có chắc chắn muốn xóa thông tin sinh viên này không?")
  ) {
    fetch(`http://localhost:3000/students/${id}`, { method: "DELETE" });
    render();
  }
}
