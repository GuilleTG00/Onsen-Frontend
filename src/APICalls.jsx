import { API_URLS } from "./APIUrls";

//Auth APIs
export const createUser = async (
  email,
  password,
  name,
  fullname,
  id,
  idNumber
) => {
  const returnCall = await fetch(`${API_URLS.CREATE_USER_URL}`, {
    body: JSON.stringify({
      username: email,
      password,
      name,
      fullname,
      id_type: id,
      id_number: idNumber,
    }),
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) =>
      response.json().then((data) => ({ status: response.status, data: data }))
    )
    .catch((error) => {
      return { detail: error, status: "ERROR" };
    });
  return returnCall;
};

export const loginAPI = async (email, password) => {
  console.log(email, password);
  const returnCall = await fetch(`${API_URLS.LOGIN_URL}`, {
    body: new URLSearchParams({
      username: email,
      password,
      grant_type: "",
      scope: "",
      client_id: "",
      client_secret: "",
    }),
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) =>
      response.json().then((data) => ({ status: response.status, data: data }))
    )
    .catch((error) => {
      return { detail: error, status: "ERROR" };
    });
  return returnCall;
};

//RESERVAS APIs
export const crearReservaAPI = async (
  token,
  fechaDeReserva,
  nombreHabitacion,
  tipoHabitacion,
  fechaDeCheckIn,
  fechaDeCheckOut,
  estado,
  calificacion
) => {
  const returnCall = await fetch(`${API_URLS.CREAR_RESERVA_URL}`, {
    body: JSON.stringify({
      fechaDeReserva,
      nombreHabitacion,
      tipoHabitacion,
      fechaDeCheckIn,
      fechaDeCheckOut,
      estado,
      calificacion,
    }),
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) =>
      response.json().then((data) => ({ status: response.status, data: data }))
    )
    .catch((error) => {
      return { detail: error, status: "ERROR" };
    });
  return returnCall;
};

export const getLastReservaAPI = async (token, estado = "activo") => {
  const returnCall = await fetch(
    `${API_URLS.GET_LAST_RESERVA_URL}?${new URLSearchParams({
      estado: estado,
    })}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) =>
      response.json().then((data) => ({ status: response.status, data: data }))
    )
    .catch((error) => {
      return { detail: error, status: "ERROR" };
    });
  return returnCall;
};

export const getReservaPorEstadoAPI = async (token, estado = "activo") => {
  const returnCall = await fetch(
    `${API_URLS.GET_RESERVAS_BY_STATE_URL}?${new URLSearchParams({
      estado: estado,
    })}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) =>
      response.json().then((data) => ({ status: response.status, data: data }))
    )
    .catch((error) => {
      return { detail: error, status: "ERROR" };
    });
  return returnCall;
};

// INVENTARIO APIs
export const crearElementoInventarioAPI = async (
  token,
  nombreProducto,
  cantidad
) => {
  const returnCall = await fetch(`${API_URLS.CREAR_ELEMENTO_INVENTARIO_URL}`, {
    body: JSON.stringify({
      nombreProducto,
      cantidad,
    }),
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) =>
      response.json().then((data) => ({ status: response.status, data: data }))
    )
    .catch((error) => {
      return { detail: error, status: "ERROR" };
    });
  return returnCall;
};

export const actualizarElementoInventarioAPI = async (
  token,
  nombreProducto,
  cantidad
) => {
  const returnCall = await fetch(
    `${API_URLS.ACTUALIZAR_ELEMENTO_INVENTARIO_URL}`,
    {
      body: JSON.stringify({
        nombreProducto,
        cantidad,
      }),
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) =>
      response.json().then((data) => ({ status: response.status, data: data }))
    )
    .catch((error) => {
      return { detail: error, status: "ERROR" };
    });
  return returnCall;
};

export const getListadoInventarioAPI = async (token) => {
  const returnCall = await fetch(`${API_URLS.GET_LISTADO_INVENTARIO_URL}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) =>
      response.json().then((data) => ({ status: response.status, data: data }))
    )
    .catch((error) => {
      return { detail: error, status: "ERROR" };
    });
  return returnCall;
};
