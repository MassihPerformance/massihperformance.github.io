main = document.getElementById("main")
standby = document.getElementById("standby")

const online = true

if(online == false) {
    standby.style.display = "none"
    main.style.display = "block"
} else {
    main.style.display = "none"
    standby.style.display = "flex"
}