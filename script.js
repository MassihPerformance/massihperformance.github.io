main = document.getElementById("main")
standby = document.getElementById("standby")

const online = false

if(online == true) {
    standby.style.display = "none"
    main.style.display = "block"
} else {
    main.style.display = "none"
    standby.style.display = "flex"
}
