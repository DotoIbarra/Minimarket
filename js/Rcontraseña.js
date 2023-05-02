$(document).ready(function() {
    $("#password-form").submit(function(e) {
      e.preventDefault();
      var email = $("#email").val();
      var newPass = $("#new-pass").val();
      var confirmPass = $("#confirm-pass").val();
  
      if (email == "" || newPass == "" || confirmPass == "") {
        $("#warnings").text("Por favor, completa todos los campos");
        return;
      }
  
      if (newPass != confirmPass) {
        $("#warnings").text("Las contraseñas no coinciden");
        return;
      }
  
      // Si las validaciones son exitosas, redirigimos a la página de inicio de sesión
      window.location.href = "inicio.html";
    });
  });
  