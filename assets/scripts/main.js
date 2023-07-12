function changeTheme() {
  const body = document.body;
  const isWhiteTheme = body.classList.contains('light-mode');
  body.classList.toggle('light-mode', !isWhiteTheme );

  var img = document.getElementById("imgChange");

  if (img.src.endsWith("https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg")){   
    img.src = "./assets/images/bikecraft.png";
  } else{
    img.src = "https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg";
  }
  
}

