

//Abrir HTTP(método, URL)

//CRUD - MÉTODOS HTTP
//CREATE - POST
// READ - GET
// UPDATE - PUT / PATCH
// DELETE - DELETE
const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};
const detalleCliente = async (id) => {
  const respuesta = await fetch(`http://localhost:3000/perfil/${id}`);
  return await respuesta.json();
};
const actualizarCliente = async (nombre, email, id) => {
  try {
    const respuesta = await fetch(`http://localhost:3000/perfil/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nombre, email })
    });
    respuesta;
  } catch (error) {
    return console.log(error);
  }
}

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente
};