new Clipboard('.btn');

function createSignature() {
  first_name.innerHTML = document.getElementById("firstName").value;

  last_name.innerHTML = document.getElementById("lastName").value;

  telephone_number.innerHTML = cleanNumber(document.getElementById("telephoneNumber").value);

  your_role.innerHTML =  document.getElementById("yourRole").value;

  if (document.getElementById("yourGroup").value == "Styrelsen") {
    your_group.innerHTML = " Pepp"
  }
  else {
    your_group.innerHTML = "<br>Pepp " + document.getElementById("yourGroup").value + " 17/18"
  }
  tagline.innerHTML = "<a href='http://www.blipepp.nu' style='color:#01B3FE;'>www.blipepp.nu</a>"
  document.getElementById('logo').style.display = "block";

}

function alert() {
  document.getElementById('alert').style.display = "block";
}

function cleanNumber(phone) {
    phone = phone.replace(/[^\d]/g, "");
    if (phone.length == 10) {
      document.getElementById('alert').style.display = "none";
      return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1-$2 $3 $4");
    } else {
        alert()
    }

    return null;
}
