//PAGAR CON TARJETA
$(document).ready(function() {
    // Al seleccionar el método de pago con tarjeta de crédito, se muestran los campos correspondientes
    $('#creditCard').click(function() {
      $('#cardNumber, #expirationDate, #securityCode').show();
    });
    
    // Al seleccionar el método de pago con Junaeb, se ocultan los campos correspondientes
    $('#junaeb').click(function() {
      $('#cardNumber, #expirationDate, #securityCode').hide();
    });
    
    // Validación del número de tarjeta
    $('#cardNumber').on('input', function() {
      // Se eliminan los caracteres no numéricos
      let cardNumber = $(this).val().replace(/\D/g,'');
      
      // Se limita el número máximo de dígitos a 16
      if (cardNumber.length > 16) {
        cardNumber = cardNumber.slice(0,16);
      }
      
      // Se actualiza el valor del campo
      $(this).val(cardNumber);
    });
    
    // Validación de la fecha de vencimiento
    $('#expirationDate').on('input', function() {
      // Se eliminan los caracteres no numéricos
      let expirationDate = $(this).val().replace(/\D/g,'');
      
      // Se limita el número máximo de dígitos a 4
      if (expirationDate.length > 4) {
        expirationDate = expirationDate.slice(0,4);
      }
      
      // Se inserta la barra separadora si se ha ingresado el mes completo
      if (expirationDate.length > 2) {
        expirationDate = expirationDate.slice(0,2) + '/' + expirationDate.slice(2);
      }
      
      // Se actualiza el valor del campo
      $(this).val(expirationDate);
    });
    
    // Validación del código de seguridad
    $('#securityCode').on('input', function() {
      // Se eliminan los caracteres no numéricos
      let securityCode = $(this).val().replace(/\D/g,'');
      
      // Se limita el número máximo de dígitos a 3
      if (securityCode.length > 3) {
        securityCode = securityCode.slice(0,3);
      }
      
      // Se actualiza el valor del campo
      $(this).val(securityCode);
    });
  });
  
  // Obtener los campos de número de tarjeta, fecha de vencimiento y código de seguridad
const cardNumberField = $('#cardNumberField');
const expirationDateField = $('#expirationDateField');
const securityCodeField = $('#securityCodeField');

// Ocultar los campos inicialmente
cardNumberField.hide();
expirationDateField.hide();
securityCodeField.hide();

// Escuchar cambios en la selección de modo de pago
$('input[name="paymentMethod"]').change(() => {
const selectedMethod = $('input[name="paymentMethod"]:checked').val();
if (selectedMethod === 'junaeb') {
// Si se selecciona Junaeb, ocultar los campos de número de tarjeta, fecha de vencimiento y código de seguridad
cardNumberField.hide();
expirationDateField.hide();
securityCodeField.hide();
} else {
// Si se selecciona Tarjeta de crédito, mostrar los campos de número de tarjeta, fecha de vencimiento y código de seguridad
cardNumberField.show();
expirationDateField.show();
securityCodeField.show();
}
});

