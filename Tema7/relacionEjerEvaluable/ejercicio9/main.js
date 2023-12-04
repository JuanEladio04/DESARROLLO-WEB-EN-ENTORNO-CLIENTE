function kilometersAndMetersConversion() {
  var km = document.getElementById("itnKm").value;
  var m = document.getElementById("itnM").value;

  document.getElementById("itnKg").value = "";
  document.getElementById("itnG").value = "";

  if (km != "" && m == "") {
    document.getElementById("itnM").value = (km * 1000);
  }
  else if (km == "" && m != "") {
    document.getElementById("itnKm").value = (m / 1000);
  }
  else {
    alert("Introduce un valor válido")
  }
}

function kilogramsAndGramsConversion() {
  var kg = document.getElementById("itnKm").value;
  var g = document.getElementById("itnM").value;

  document.getElementById("itnKg").value = "";
  document.getElementById("itnG").value = "";

  if (kg != "" && g == "") {
    document.getElementById("itnG").value = (kg * 1000);
  }
  else if (kg == "" && g != "") {
    document.getElementById("itnKg").value = (g / 1000);
  }
  else {
    alert("Introduce un valor válido")
  }
}
