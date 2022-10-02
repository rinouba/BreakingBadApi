const url = "https://www.breakingbadapi.com/api"
const keyapi = "?api_key=9eb9a75b0a60688ecc1860f176abf14e"


async function getAllChars() {
    const responsive = await fetch(url+'/characters')
    const data = await responsive.json()

    data.map(Allchars => {
    document.querySelector("#AllCharacters").innerHTML += 
    `   
    <div class="col-md-6 col-lg-4 mt-4 card-chars">
    <div class=" rounded-start">
    <div class="fs-3 fw-bold">${Allchars.name}</div>
    <div class="fs-5 mt-3 text-info">The Real Name : ${Allchars.portrayed}</div>
    <img src="${Allchars.img}" class="img mt-4 border-bottom border-3 border-info">
    </div>
    </div>
    `
    })
getAllEpisodes()
}

async function getAllEpisodes() {
    const responsive = await fetch(`${url}/episodes`)
    const data = await responsive.json()
    // console.log(data)

    data.map(allepis=>{
        document.querySelector("#AllEpisodes").innerHTML += 
        `
        <div class="col-md-6 col-lg-4 mt-4 card-chars">
        <div class="fs-1 fw-bold">Season : ${allepis.season}</div>
        <div class="fs-3">Episode : ${allepis.episode_id}</div>
        <div class="fs-4 mt-2">Title : ${allepis.title}</div>
        <div class="fs-6 mt-3">Date : ${allepis.air_date}</div>
        <img src="" >
        </div>
        `
    })
    getAllQuotes()
}

async function getAllQuotes() {
    const responsive = await fetch(url+"/quotes")
    const data = await responsive.json()
    console.log(data)

    data.map(AllQuotes=>{

        document.querySelector("#AllQuotes").innerHTML += 
        `
        <div class="col-md-6 col-lg-4 mt-4 card-chars mt-5 pb-5 border-end border-start border-3 border-danger">
        <div class="fs-2 ">Series : ${AllQuotes.series} </div>
        <div class="fs-3 fw-light">Author : ${AllQuotes.author} </div>
        <div class="fs-3 fw-bolder text-danger">Quote : ${AllQuotes.quote} </div>
        </div>
        `

    })
}

// for three pages
document.querySelectorAll(".btn").forEach((item,index) => {
    item.addEventListener("click",(eo) => { 
        switch (index) {
            case 0:
             document.querySelectorAll(".pages")[0].style.display = "block"
             document.querySelectorAll(".pages")[1].style.display = "none"
             document.querySelectorAll(".pages")[2].style.display = "none"
             
                break;
                case 1:
                    document.querySelectorAll(".pages")[0].style.display = "none"
                    document.querySelectorAll(".pages")[1].style.display = "block"
                    document.querySelectorAll(".pages")[2].style.display = "none"
                    break;
                    case 2:
                        document.querySelectorAll(".pages")[0].style.display = "none"
                        document.querySelectorAll(".pages")[1].style.display = "none"
                        document.querySelectorAll(".pages")[2].style.display = "block"
                        break;
        
            default:
                break;
        }
     })
})

getAllChars()



