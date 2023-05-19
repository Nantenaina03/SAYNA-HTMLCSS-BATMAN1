function validateForm() {
  var email = document.getElementById("email").value;
  var check = document.getElementById("check").checked;
  var radio = document.querySelector('input[name="radio"]:checked');
  var select = document.getElementById("selectBox").value;
  if (email && check && radio && select){
    window.location.replace("./message.html");
  } else {
    alert("Veuillez remplir tous les champs.");
  }
}