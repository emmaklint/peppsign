new Clipboard('.btn');

function createSignature() {
  first_name.innerHTML = document.getElementById("firstName").value;
  last_name.innerHTML = document.getElementById("lastName").value;
  //telephone_number.innerHTML = document.getElementById("telephoneNumber").value;

  telephone_number.innerHTML = cleanNumber(document.getElementById("telephoneNumber").value);

  your_role.innerHTML =  document.getElementById("yourRole").value;

  if (document.getElementById("yourGroup").value == "Styrelsen") {
    your_group.innerHTML = " Pepp"
  }
  else {
    your_group.innerHTML = "<br>Pepp " + document.getElementById("yourGroup").value + " 2018"
  }
  tagline.innerHTML = "<a href='http://www.blipepp.nu' style='color:#01B3FE;'>www.blipepp.nu</a>"
  document.getElementById('logo').style.display = "block";

}

function alert() {
  document.getElementById('alert').style.display = "block";
}

function cleanNumber(phone) {
    //normalize string and remove all unnecessary characters
    phone = phone.replace(/[^\d]/g, "");
    //check if number length equals to 10
    if (phone.length == 10) {
        //reformat and return phone number
        document.getElementById('alert').style.display = "none";
        return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1-$2 $3 $4");
    } else {
        alert()
    }

    return null;
}

function selectText() {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById('clicktocopy'));
        range.select();
    }
    else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById('clicktocopy'));
        window.getSelection().addRange(range);
    }
}

function getSelectionHtml() {
    var html = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            html = document.selection.createRange().htmlText;
        }
    }
    return html;
}
