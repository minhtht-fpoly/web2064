

const students = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    age: 20,
    class: "JSNC01",
    major: "Công nghệ thông tin",
    status: "Đang học"
  },
  {
    id: 2,
    name: "Trần Thị B",
    age: 21,
    class: "JSNC01",
    major: "Thiết kế web",
    status: "Đang học"
  },
  {
    id: 3,
    name: "Lê Văn C",
    age: 22,
    class: "JSNC02",
    major: "Lập trình di động",
    status: "Nghỉ học"
  },
  {
    id: 4,
    name: "Phạm Thị D",
    age: 19,
    class: "JSNC02",
    major: "Phân tích dữ liệu",
    status: "Đang học"
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    age: 23,
    class: "JSNC03",
    major: "Trí tuệ nhân tạo",
    status: "Tốt nghiệp"
  }
];
function render(arr)
{
  let renderString = ""

arr.forEach((student,i)=>{
  renderString = renderString + `<tr>
      <th scope="row">${i+1}</th>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.class}</td>
      <td>${student.major}</td>
      <td>${student.status}</td>
      <td><button class="btn btn-warning">Sửa</button> <button class="btn btn-danger" onclick="xoa(${i})">Xóa</button></td>
    </tr>`
})


document.getElementById("renderBody").innerHTML = renderString
}
render(students)
function xoa(i){
    if(window.confirm("Bạn có chắc chắn muốn xóa không"))
    {
    students.splice(i,1)
    render()
    }
}


//forEach():Nhận tham số đầu tiên là 1 callback, 3 tham số của callback sẽ lần luwotj là
//Phần tử mảng, chỉ mục và mảng ban đầu, với mỗi phần tử mảng, forEach sẽ gọi callback 1 lần
// students.forEach((arrayElement,index,array)=>{
//   console.log(arrayElement,index,array)

// })
//map(): Biến đổi toàn bộ phẩn tử mảng thành một giá trị khác, trả về giá trị là một mảng mới
// const arr = [1,2,3,4,5]
// console.log(arr.map((item)=>{
//   return item*2

// }))
// console.log(students.map((student,i)=>{
//  return `<tr>
//       <th scope="row">${i+1}</th>
//       <td>${student.name}</td>
//       <td>${student.age}</td>
//       <td>${student.class}</td>
//       <td>${student.major}</td>
//       <td>${student.status}</td>
//       <td><button class="btn btn-warning">Sửa</button> <button class="btn btn-danger" onclick="xoa(${i})">Xóa</button></td>
//     </tr>`
// }).join(""))

//Find: trả vè phần tử đầu tiên thỏa mãn điều kiện return
  console.log(students.find((student)=>{
  return student.status == "Tốt nghiệp"
}))
//Filter : trả về 1 mảng với tất cả các phần tử thỏa mãn điều kiện return
console.log(students.filter((student)=>{
  return student.status == "Đang học"
}))
function locSinhVien(){
 
  const searchString = document.getElementById("nameSearch").value

  const filteredStudents = students.filter((student)=>{
    return student.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
  })
  console.log(filteredStudents)
  render(filteredStudents)
}