function getGreetingAndBackground() {
  const now = new Date();
  const hours = now.getHours();
  let message = "";
  let backgroundStyle = "";

  if (hours >= 5 && hours < 12) {
    message = "Chào buổi sáng! Chúc bạn một ngày tốt lành.";
    backgroundStyle = `linear-gradient(to right top, #f4ae92, #f4b88c, #f0c389, 
                            #e9ce89, #dfda8d, #d3e192, #c6e89a, #b7efa5, 
                            #a5f3af, #91f6bc, #7af9ca, #5ffbda)`;
  } else if (hours >= 12 && hours < 17) {
    message = "Chào buổi chiều! Hãy tận hưởng thời gian này.";
    backgroundStyle = `linear-gradient(to right top, #f7ae80, #f8ad74, #f8ad67, 
                            #f6ad5a, #f3ae4c, #efb549, #eabb48, #e5c247, 
                            #dfcf56, #d8db67, #d3e679, #cdf18c)`;
  } else {
    message = "Chào buổi tối! Thư giãn và nghỉ ngơi nhé.";
    backgroundStyle = `linear-gradient(to right top, #a8b0e4, #abade7, #b0a9e9, 
                            #b6a5eb, #bda1eb, #bd9dec, #bd99ed, #bd95ee, 
                            #b491f2, #aa8df5, #9e8af9, #9087fd)`;
  }

  const italicElement = document.createElement("i");
  italicElement.textContent = message;
  const greetingDiv = document.getElementById("greeting-message");
  greetingDiv.innerHTML = "";
  greetingDiv.appendChild(italicElement);

  document.body.style.backgroundImage = backgroundStyle;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
}

getGreetingAndBackground();
