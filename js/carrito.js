let carrito = [];

function actualizarCarrito() {
  const tablaCarrito = $('#carrito');

  // Limpiar la tabla del carrito
  tablaCarrito.empty();

  // Agregar cada producto al carrito
  carrito.forEach((producto, index) => {
    // Crear una nueva fila en la tabla
    const fila = $('<tr>');

    // Crear las celdas de la fila
    const columnaProducto = $('<td>').text(producto.nombre);
    const columnaPrecio = $('<td>').text(`$${producto.precio}`);
    const columnaCantidad = $('<td>').text(producto.cantidad);

    // Crear los botones para eliminar productos
    const botonEliminar = $('<button>').addClass('btn btn-danger btn-sm').text('Eliminar');
    botonEliminar.click(() => {
      carrito.splice(index, 1);
      actualizarCarrito();
      actualizarSubtotal();
    });

    // Agregar el botón de eliminar a la celda de acciones
    const columnaAcciones = $('<td>').append(botonEliminar);

    // Agregar las celdas a la fila
    fila.append(columnaProducto);
    fila.append(columnaPrecio);
    fila.append(columnaCantidad);
    fila.append(columnaAcciones);

    // Agregar la fila a la tabla
    tablaCarrito.append(fila);
  });
}

function actualizarSubtotal() {
  const subtotal = carrito.reduce((total, producto) => {
    return total + producto.precio * producto.cantidad;
  }, 0);

  $('#subtotal').text(`$${subtotal}`);
}

function anadirProducto(nombre, precio, cantidad) {
  const index = carrito.findIndex(producto => producto.nombre === nombre);

  if (index !== -1) {
    carrito[index].cantidad += cantidad;
  } else {
    carrito.push({
      nombre: nombre,
      precio: precio,
      cantidad: cantidad
    });
  }

  actualizarCarrito();
  actualizarSubtotal();
}

anadirProducto('CocaCola', 1000, 3);
anadirProducto('Milka', 1000, 2);
anadirProducto('Doritos', 1000, 4);
