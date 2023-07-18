let a1Score = 0
let a2Score = 0
let a1Shots = 0
let a2Shots = 0

function score_colour(score, shots, player){
    let avg = Math.floor(score / shots)
    switch(avg){
        case 1: 
        case 2:
            document.getElementById(player).style.backgroundColor = "white";
            break
        case 3:
        case 4:
            document.getElementById(player).style.backgroundColor = "black";
            break
        case 5:
        case 6:
            document.getElementById(player).style.backgroundColor = "blue";
            break
        case 7:
        case 8:
            document.getElementById(player).style.backgroundColor = "red";
            break
        case 9:
            document.getElementById(player).style.backgroundColor = "gold";
            break
        default:
            document.getElementById(player).style.backgroundColor = "rgba(0,0,0,0.1)";
    }
}


function plus_score(player, value){
    if (player == "p1"){
        if (a1Shots == 6){
            return
        }
        a1Score += value
        a1Shots += 1
        document.getElementById(`p1shot_${a1Shots}`).textContent = value ? value: "m"
        document.getElementById("p1score").textContent = a1Score
        score_colour(a1Score, a1Shots, "p1score_card")
        leader(a1Score, a2Score)
    }
    if (player == "p2"){
        if (a2Shots == 6){
            return
        }
        a2Score += value
        a2Shots += 1
        document.getElementById(`p2shot_${a2Shots}`).textContent = value ? value: "m"
        document.getElementById("p2score").textContent = a2Score
        score_colour(a2Score, a2Shots, "p2score_card")
        leader(a1Score, a2Score)
    }
}


function reset(){
    location.reload()
}


function leader(a1Score, a2Score){
    let sum = a1Score - a2Score
    switch(true){
        case sum < 0:
            document.getElementById("archer_two").style.color = "green"
            document.getElementById("archer_one").style.color = "black"
            break
        case sum > 0:
            document.getElementById("archer_two").style.color = "black"
            document.getElementById("archer_one").style.color = "green"
            break
        default:
            document.getElementById("archer_two").style.color = "black"
            document.getElementById("archer_one").style.color = "black"
    }   
}