//PARA REGISTRARNOS
$(document).ready(function () {
    $("#form").submit(function (e) {
      e.preventDefault();
      var nombre = $("#name").val();
      var apellido = $("#last_name").val();
      var correo = $("#email").val();
      var clave = $("#password").val();
  
      let msjMostrar = "";
      let enviar = true;
  
      if(nombre.trim().length < 4 || nombre.trim().length > 10){
          msjMostrar = msjMostrar + "El nombre debe tener entre 4 y 10 caracteres";
          enviar = false;
      }
  
      if(apellido.trim().length < 4 || apellido.trim().length > 10){
          msjMostrar = msjMostrar + "El apellido tambien debe tener entre 4 y 10 caracteres";
          enviar = false;
      }
  
      var letra = nombre.trim().charAt(0);
      if(!esMayuscula(letra)){
          msjMostrar += "<br>El nombre debe comenzar con mayúscula";
          enviar = false;
      }
  
      if(nombre == "Victor"){
          msjMostrar += "El nombre no puede ser Victor";
          enviar = false;
      }
  
      if(enviar){
          $("#warnings").html("Enviado");
          window.location.href = "iniciar sesion.html";
      }
      else{
          $("#warnings").html(msjMostrar);
      }
    });
  
    function esMayuscula(letra){
        console.log("Estoy aqui");
        console.log(letra);
        console.log(letra.toUpperCase());
  
        if(letra == letra.toUpperCase()){
            return true;
        }
        else{
            return false;
        }
    }
  });
  
  //PARA INICIAR SESION
  $(document).ready(function() {
    $("form").submit(function(e) {
      e.preventDefault();
      var email = $("#email").val();
      var password = $("#password").val();
      var redirectPage = "";
  
      if (email == "admin@example.com" && password == "admin") {
        redirectPage = "administracion.html";
      } else if (email == "user@example.com" && password == "user") {
        redirectPage = "perfil.html";
      } else {
        alert("El correo electrónico o la contraseña son incorrectos");
        return;
      }
  
      window.location.href = redirectPage;
    });
  });
  