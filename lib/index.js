const motd = ["the best scratch mod ever", "by the sgerb berbs"];
document.getElementById("motd").innerHTML = motd[Math.floor(Math.random() * motd.length)];