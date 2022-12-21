var arr=[
    {img:"https://images.unsplash.com/photo-1619533394727-57d522857f89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {img:"https://images.unsplash.com/photo-1536129808005-fae894214c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {img:"https://images.unsplash.com/photo-1622519407650-3df9883f76a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {img:"https://images.unsplash.com/photo-1536243298747-ea8874136d64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {img:"https://images.unsplash.com/photo-1622262918009-6a39cd1fb49d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {img:"https://images.unsplash.com/photo-1582439170934-d089aa10abda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {img:"https://images.unsplash.com/photo-1613075677904-c51e3ac10742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {img:"https://images.unsplash.com/photo-1510951475896-ce8cacb1899f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
]

var clutter="";
arr.forEach(function(elem,idx){
    clutter +=`<div class="story">
    <img id="${idx}" src="${elem.img}" alt="">
</div>`
})
document.querySelector(".storiyan").innerHTML=clutter;

var grow=0;
// document.querySelector(".storiyan").addEventListener("click",function(dets){
//     document.querySelector(".full-scr").style.display=`initial`
//     document.querySelector(".full-scr").style.backgroundImage=`url(${arr[dets.traget.id].img})`

// if(grow <=100){
//     setInterval(function(){
//         document.querySelector(".growth").style.width=`${grow}%`
//         grow++
//     },30)
// }
//     else{
//         grow=0;
//     }
//     setTimeout(function(){
//         document.querySelector(".full-scr").style.display=`none`
//     },3000)
// })
document.querySelector(".storiyan").addEventListener("click",function(dets){
    document.querySelector(".full-scr").style.display=`initial`
    document.querySelector(".full-scr").style.backgroundImage=`url(${arr[dets.target.id].img})`


if(grow <=100){
    setInterval(function(){
        document.querySelector(".growth").style.width=`${grow}%`
        grow++;
    },30)
}
else{
    grow=0;
}
setTimeout(function(){
    document.querySelector(".full-scr").style.display=`none`

},3000)
})

var arr1=[
    {img:"https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",name:"Jagdeesh",Img2:"https://images.unsplash.com/photo-1659999463470-8d01d61cf9e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw4ODYyNjM1fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {img:"https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",name:"Mahendra",Img2:"https://images.unsplash.com/photo-1659999463470-8d01d61cf9e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw4ODYyNjM1fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
]
