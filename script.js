// // async function fetchfunc(){
// //     var response = await fetch('https://randomuser.me/api/')
// //     var data = await response.json();
// //     console.log(data)
// // }
// // fetchfunc()


// // var ans = new Promise((res,rej)=>{
// //     var n = Math.floor(Math.random()*10)
// //     if(n<5)
// //     return res()
// //     else
// //     return rej()
// // })

// // ans.then(function(){
// //     console.log("Below")
// // })
// // .catch(function(){
// //     console.log("above")
// // })

// var heading = document.querySelector("h1")

// var ans = new Promise((res,rej)=>{
//     return res("I am in the Home");
// })
//  var p1 = ans.then(function(data){
//     heading.innerHTML = data
//      return new Promise((res,rej)=>{
//         return res("I am in the college!");
//      })
// })
// var p2 = p1.then(function(data){
//     heading.innerHTML = data
//     return new Promise((res,rej)=>{
//         return res("Now i am back to home")
//     })
// })
// p2.then(function(data){
//     heading.innerHTML = data
    
// })



function runningName(){
    var typed = new Typed(".auto-type",{
        strings:["This is hard-work","Never give up","Boost your self","Make life easy","Everything is possible"],
        typeSpeed : 100,
        backSpeed : 100,
        loop : true,
    })
}
runningName()

var tl = gsap.timeline()

tl.from(".nav button",{
    y:-100,
    duration:0.8,
    stagger:0.5,
    opacity:0
})

gsap.from(".container h1",{
    x:-900,
    opacity:0,
    duration:1,
})

tl.from("i",{
   
    y:-20,
    repeat:-1,
    yoyo:true,
    duration:0.6
})


var tl2 = gsap.timeline();
gsap.from(".page2 .box",{
    y:200,
    duration:0.8,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:".page2 div",
        scroller:"body",
        // markers:true,
        // start:"top 80%",
        // end:"top 0%"
    }
})
