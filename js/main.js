const aff_participants = document.getElementById("print-p")
const add = document.getElementById("add")
let nameText
let nameText2
let name

add.addEventListener("click",addParticipant)

function addParticipant(){
    const div = document.createElement("div")
    div.className = "border border-1 border-light mb-1"
    aff_participants.appendChild(div)

    name = document.createElement("div")
    name.className = "col"
    div.appendChild(name)
    const suppr = document.createElement("div")
    suppr.className = "col"
    div.appendChild(suppr)

    nameText = document.createElement("input")
    nameText.className = "text-light m-0 bg-secondary"
    nameText.type = "text"
    name.appendChild(nameText)
    nameText.focus()

    nameText.addEventListener("change",createName)

    const delText = document.createElement("p")
    delText.className = "text-light m-0"
    delText.innerHTML = "❌ Supprimer"
    suppr.appendChild(delText)

    delText.addEventListener("click",()=>{   
        aff_participants.removeChild(div)
    })
}

function createName(){
    name.removeChild(nameText)
    nameText2 = document.createElement("h5")
    nameText2.className = "text-light m-0 pName"
    nameText2.innerHTML = nameText.value
    name.appendChild(nameText2)
}

const makeTeam = document.getElementById("create")
const valueTeam = document.getElementById("nbTeam")
const spotTeam = document.getElementById("spotTeam")

makeTeam.addEventListener("click",createTeam)

function createTeam(){
    let nbTeam = valueTeam.value
    const pName = document.getElementsByClassName("pName")
    let tab = new Array()
    for (let v of pName){
        tab.push(v.innerHTML)
    }
    clear()

    const tmp = document.createElement("div")
    tmp.className = "col-2 mt-5 text-light"
    tmp.id = "trash"
    document.getElementById("top").appendChild(tmp)
    const pb = document.createElement("div")
    pb.className = "row border border-1 border-secondary bg-primary"
    tmp.appendChild(pb)
    const trash = document.createElement("h6")
    trash.innerHTML = "Temporaire"
    pb.appendChild(trash)

    const poub = document.createElement("div")
        poub.className = "row border border-1 border-secondary mt-1 text-light overflow-auto bg-dark"
        poub.id = `tmp`
        poub.style.maxHeight = "125px"
        poub.addEventListener("dragover",(e)=>e.preventDefault())
        poub.addEventListener("drop",(e)=>{
            e.preventDefault()
            let data = e.dataTransfer.getData("text/plain")
            e.currentTarget.appendChild(document.getElementById(data))
        })
        tmp.appendChild(poub)


    for (let i=1;i<=nbTeam;i++){
        const colDiv = document.createElement("div")
        colDiv.className = "col-2 me-3 mb-4 team"
        spotTeam.appendChild(colDiv)

        const nameDiv = document.createElement("div")
        nameDiv.className = "row border border-1 border-secondary bg-primary"
        colDiv.appendChild(nameDiv)

        const teamName = document.createElement("h6")
        teamName.innerHTML = `Team ${i}`
        nameDiv.appendChild(teamName)

        const pDiv = document.createElement("div")
        pDiv.className = "row border border-1 border-secondary mt-1 overflow-auto bg-dark"
        pDiv.id = `team_${i}`
        pDiv.style.maxHeight = "125px"
        pDiv.addEventListener("dragover",(e)=>e.preventDefault())
        pDiv.addEventListener("drop",(e)=>{
            e.preventDefault()
            let data = e.dataTransfer.getData("text/plain")
            e.currentTarget.appendChild(document.getElementById(data))
        })
        colDiv.appendChild(pDiv)
    }

    let temp
    let random
    for (let i in tab){
        random = Math.floor(Math.random()*tab.length)
        temp = tab[i]
        tab[i] = tab[random]
        tab[random] = temp
    }

    let index = 0
    let team = 1
    while (tab[index]){
        if (team<=nbTeam){
            const participantName = document.createElement("p")
            participantName.innerHTML = tab[index]
            participantName.className = "mb-0"
            participantName.draggable = "true"
            participantName.id= `name_${index}`
            participantName.addEventListener("dragstart",(e)=>{
                e.dataTransfer.setData("text/plain",e.target.id)
                currentDrag = e.target
                e.target.style.opacity = "50%"
            })
            participantName.addEventListener("dragend",(e)=>{
                e.target.style.opacity = ""
            })
            let id = `team_${team}`
            const teamToAppend = document.getElementById(id)
            teamToAppend.appendChild(participantName)
            team++
            index++
        }else{
            team = 1
        }
    }
}

function clear(){
    const team = document.getElementsByClassName("team")
    while (team.length!=0){
        spotTeam.removeChild(team[0])
    }
    const trash = document.getElementById("trash")
    document.getElementById("top").removeChild(trash)
}