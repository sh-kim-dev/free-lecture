
function flipImage() {
    const letterElement = document.getElementById('msg-container');
    letterElement.style.transform =  "scaleX(-1)";

}

// function flipImage(){
//     const letterElement = document.getElementById('msg-container');
//     if (document.getElementById("directionSelect").selectedIndex == 0) {
//       if (img.style.transform.indexOf("scaleX") != -1) {
//         img.style.transform = img.style.transform.replace("scaleX(-1)","");
//       }else{
//         img.style.transform = img.style.transform+" scaleX(-1)";
//       }
//     }else{
//       if (img.style.transform.indexOf("scaleY") != -1) {
//         img.style.transform = img.style.transform.replace("scaleY(-1)","");
//       }else{
//         img.style.transform = img.style.transform+" scaleY(-1)";
//       }
//     }
//   }