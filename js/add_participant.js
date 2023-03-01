
// let nbteam = 3

function makeTeam(nbTeam,playersList){
    let temp
    let random
    for (let i in playersList){
        random = Math.floor(Math.random()*playersList.length)
        temp = playersList[i]
        playersList[i] = playersList[random]
        playersList[random] = temp
    }
    // Facon 1
    // let nbPlayer = parseInt(playersList.length/nbTeam)
    let index = 0
    // Facon 1
    // for (let i=1;i<=nbTeam;i++){
    //     console.warn(`Team ${i}`)
    //     for (let y=0;y<nbPlayer;y++){
    //         console.log(playersList[index])
    //         index++
    //     }
    // }
    let team = 1
    while(playersList[index]){
        // Facon 2
        if (team<=nbTeam){
            console.warn(`Team ${team}`)
            console.log(playersList[index])
            team++
            index++
        }else{
            team = 1
        }
        // Facon 1
        // console.warn(`Team ${team}`)
        // console.log(playersList[index])
        // team++
        // index++
    }
}

// makeTeam(nbteam,players)

const container = document.getElementById("container")
const nbTeamInput = document.getElementById("lala")
let nbTeam

nbTeamInput.addEventListener("change",createTeam)

function createTeam(){
    nbTeam = nbTeamInput.value
    for (let i=0;i<nbTeam;i++){
        let divTeam = document.createElement("div")
        divTeam.classList.add("col-3")
        divTeam.classList.add("border")
        divTeam.classList.add("border-5")
        container.appendChild(divTeam)
        let lala = document.createElement("h2")
        lala.innerHTML = "Team 1"
        divTeam.appendChild(lala)

        let divPlayers = document.createElement("div")
        divTeam.appendChild(divPlayers)
        let list = document.createElement("ul")
        divPlayers.appendChild(list)
        let lolo = document.createElement("li")
        lolo.innerHTML = "Player 1"
        list.appendChild(lolo)

    }
}

function makeTeam2(nbTeam,playersList){
    let temp
    let random
    for (let i in playersList){
        random = Math.floor(Math.random()*playersList.length)
        temp = playersList[i]
        playersList[i] = playersList[random]
        playersList[random] = temp
    }
    let index  = 0
    let team = 1
    while(playersList[index]){
        // Facon 2
        if (team<=nbTeam){
            console.warn(`Team ${team}`)
            console.log(playersList[index])
            team++
            index++
        }else{
            team = 1
        }
    }
}

const text = document.getElementsByClassName("text")
const dropZone = document.getElementsByClassName("dropZone")

let currentDrag

for (let i of text){
    i.addEventListener("dragstart",(e)=>{
        // e.dataTransfer.setData("text/plain", http://e.target.id)
        currentDrag = //e.target
        //e.target.style.border = "1px solid yellow"
        //e.target.style.opacity = "50%"
    })
    i.addEventListener("dragend",(e)=>{
        //e.target.style.border= "";
        //e.target.style.opacity = ""
    })
}

for (let y of dropZone){
    y.addEventListener("dragover",(e)=>e.preventDefault())
    y.addEventListener("dragenter",(e)=>http://e.currentTarget.style.backgroundColor = "blue")
    y.addEventListener("dragleave",(e)=>http://e.currentTarget.style.backgroundColor = "")
    y.addEventListener("drop",(e)=>{
        e.preventDefault();
        http://e.currentTarget.style.backgroundColor = ""
        // let data = e.dataTransfer.getData("text/plain");
        let lala = currentDrag.cloneNode(true);
        http://lala.style.border = ""
        http://lala.style.opacity = ""
        e.currentTarget.appendChild(lala)
    })
}