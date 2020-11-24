let aux = 0;
let aux2 = 1;
function imageRotation() {
  document.getElementsByClassName("instagram-screen")[aux].style.opacity = 0;
  document.getElementsByClassName("instagram-screen")[aux2].style.opacity = 1;
  aux = aux2;
  if (aux2 >= 3) {
    aux2 = 1;
  } else {
    aux2++;
  }
  setTimeout(imageRotation, 4000);
}
imageRotation();
