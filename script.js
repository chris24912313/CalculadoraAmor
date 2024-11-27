function love() {

    var firstName = document.getElementById("name1").value;

    var secondName = document.getElementById("name2").value;

    if (firstName.length <= 2) {
        alert("Ingrese al menos 3 caracteres");
    }
    if (secondName.length <= 2) {
        alert("Ingrese al menos 3 caracteres");
    }
    else {
        const names = [firstName.trim().toUpperCase(), secondName.trim().toUpperCase()];
        const perfectMatchNames = ["CRISTHOFER", "DIANA","ANTHONY","ANTHONY CRISTHOFER","ANTHONY CALLIRGOS","ANTHONY CRISTHOFER CALLIRGOS VICTORIANO","DIANA CAROLINE HUAMANI PUERTAS","DIANA CAROLINE","DIANA HUAMANI","DIANA HUAMANI PUERTAS","ANTHONY CALLIRGOS VICTORIANO","CAROLINE HUAMANI PUERTAS","CRISTHOFER CALLIRGOS VICTORIANO","CAROLINE HUAMANI","CRISTHOFER CALLIRGOS"];
      
        if (names.every(name => perfectMatchNames.includes(name))) {
          document.getElementById("output").innerHTML = "El puntaje para " + firstName + " y " + secondName + " es 100%";
          document.querySelector(".statement").innerHTML = "Felicidades! Son Almas Gemelas";
        } else {
          document.getElementById("output").innerHTML = "El puntaje para " + firstName + " y " + secondName + " es 0%";
          document.querySelector(".statement").innerHTML = "Pesimo! Nunca estaran juntos";
        }
      }
}
