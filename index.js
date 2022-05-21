// 3 projects 



//1) output 3 id ~ (from this site) after click on bottom - get Info specified (process - async) as a parser
//2) redirect to site after click on a link (Ig,Twitter,Facebook)
//3) 1 project (saved on gitHub)
//with options




//fetch(name,{options})
//fetch -  by default GET


let img1 = document.querySelector("#fetchImg1")
let img2 = document.querySelector("#fetchImg2")
let img3 = document.querySelector("#fetchImg3")
let img4 = document.querySelector("#fetchImg4")
let p = document.querySelector("#p")



let socialMedia = value => {
   return new Promise(resolve => {
            setTimeout( () => {
                p.innerHTML = `you will be redirected to ${value}`
                resolve() //as a callaback = fucntion as a parameter
            }, 
            3000)
}
)
}

async function Instagram(){
try{
        await socialMedia("Instagram") //it should laready exist
        const getInfo = await fetch("https://instagram.free.beeceptor.com",{ //doesnt provide json api
            method: "POST",   //REST API - get post  update delete
            headers: { //Accept - format to a client 
                       //Content-Type - format to  a server and client(origin) in the context of SOAP API(protocol) (+identation)
              Accept: "application.json", //text format
              "Content-type": "application/json"
            }
        }) 
        const data = getInfo //IT SHOULD BE AS JSON
        // window.open(data)
        console.log(data)
    }
    catch(error){
        console.error(error)
    }
    finally{
        console.log("Done")
    }
}

img1.addEventListener("mouseover",Instagram)

async function Pinterest(){
    await socialMedia("Pinterest") //await with asynchronous actions
    const response = await fetch("https://instagram.free.beeceptor.com",{
        method: "GET",
        headers: {
            Accept: "application.json",
            "Type-Content": "application/json"
        }
    })
    const data =  response //we will not await for sth
    console.log(data)
}

img2.addEventListener("mouseover",Pinterest)

//+
async function Reddit(){
    await socialMedia("Reddit") //await with asynchronous actions
    const response = await fetch("https://instagram.free.beeceptor.com",{
        method: "GET",
        headers: {
            Accept: "application.json",
            "Type-Content": "application/json"
        }
    })
    const data =  response //we will not await for sth
    console.log(data)
}

img3.addEventListener("mouseover",Reddit)




async function Twitter(){
    await socialMedia("Twitter") //await with asynchronous actions
    const response = await fetch("https://instagram.free.beeceptor.com",{
        method: "GET",
        headers: {
            Accept: "application.json",
            "Type-Content": "application/json"
        }
    })
    const data =  response //we will not await for sth
    console.log(data)
}

img4.addEventListener("mouseover",Twitter)


//proxies are named CORS

//binary files - to save it as 0 and 1 (video, images)


//json method???