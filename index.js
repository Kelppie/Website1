function stinkometer() {
    var randomSide = Math.floor(Math.random() * 2);
      if (randomSide == 1) {
    document.getElementById("coinImg").src = 
  "https://media.tenor.com/7JU82g4lnqAAAAAM/you-stink-marva.gif";
      } else {
        document.getElementById("coinImg").src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa21remlwZ2NnbXY5cWFoNTBlaGhtYnRubzc1NHoxY3l2c2o0ZDAxMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2Nln5BABEk8NFe/giphy.webp";
      }
  }

  function stinkwait() {
    document.getElementById("coinImg").src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczdqZzE3MGZpbnRoMG9ncGo3a3Q2bWNtbnhpejFtenVobnFqM3o0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1yMvhR4M47Okw4n8tt/giphy.webp";
    setTimeout(stinkometer, 3000);
}