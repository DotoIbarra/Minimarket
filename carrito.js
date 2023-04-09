// Arreglo para almacenar los productos del carrito
let carrito = [];

// Función para actualizar el carrito en el HTML
function actualizarCarrito() {
  // Obtener la tabla del carrito
  const tablaCarrito = document.getElementById('carrito');

  // Limpiar la tabla del carrito
  while (tablaCarrito.firstChild) {
    tablaCarrito.removeChild(tablaCarrito.firstChild);
  }

  // Agregar cada producto al carrito
  carrito.forEach((producto, index) => {
    // Crear una nueva fila en la tabla
    const fila = document.createElement('tr');

    // Crear las celdas de la fila
    const columnaProducto = document.createElement('td');
    const columnaPrecio = document.createElement('td');
    const columnaCantidad = document.createElement('td');
    const columnaAcciones = document.createElement('td');

    // Agregar el contenido a las celdas
    columnaProducto.textContent = producto.nombre;
    columnaPrecio.textContent = `$${producto.precio}`;
    columnaCantidad.textContent = producto.cantidad;

    // Crear los botones para eliminar productos
    const botonEliminar = document.createElement('button');
    botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = () => {
      carrito.splice(index, 1);
      actualizarCarrito();
      actualizarSubtotal();
    };

    // Agregar el botón de eliminar a la celda de acciones
    columnaAcciones.appendChild(botonEliminar);

    // Agregar las celdas a la fila
    fila.appendChild(columnaProducto);
    fila.appendChild(columnaPrecio);
    fila.appendChild(columnaCantidad);
    fila.appendChild(columnaAcciones);

    // Agregar la fila a la tabla
    tablaCarrito.appendChild(fila);
  });
}

// Función para actualizar el subtotal en el HTML
function actualizarSubtotal() {
  // Calcular el subtotal
  const subtotal = carrito.reduce((total, producto) => {
    return total + producto.precio * producto.cantidad;
  }, 0);

  // Actualizar el subtotal en el HTML
  const elementoSubtotal = document.getElementById('subtotal');
  elementoSubtotal.textContent = `$${subtotal}`;
}

// Función para añadir un producto al carrito
function anadirProducto(nombre, precio, cantidad) {
  // Buscar si el producto ya está en el carrito
  const index = carrito.findIndex(producto => producto.nombre === nombre);

  // Si el producto ya está en el carrito, actualizar la cantidad
  if (index !== -1) {
    carrito[index].cantidad += cantidad;
  }
  // Si el producto no está en el carrito, añadirlo al arreglo
  else {
    carrito.push({
      nombre: nombre,
      precio: precio,
      cantidad: cantidad
    });
  }

  // Actualizar el carrito y el subtotal en el HTML
  actualizarCarrito();
  actualizarSubtotal();
}

// Ejemplo de uso de la función añadirProducto
anadirProducto('CocaCola', 1000, 3);
anadirProducto('Milka', 1000, 2);
anadirProducto('Doritos', 1000, 4);
