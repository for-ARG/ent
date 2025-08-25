     function login() {
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;
      const error = document.getElementById("error-msg");

      if(user === "chris.tertor" && pass === "incirculodominabitur") {
        
        window.location.href = "seconde-page/page2.html"; 
      } else {
        error.textContent = "Identifiant ou mot de passe incorrect.";
      }
    }