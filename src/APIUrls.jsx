const URL_SERVER = "http://127.0.0.1:8000";

export const API_URLS = {
  //Authentication and Login
  CREATE_USER_URL: `${URL_SERVER}/api/v1/users/create-user`,
  LOGIN_URL: `${URL_SERVER}/api/v1/users/login`,
  CHANGE_USER_PASSWORD_URL: `${URL_SERVER}/api/v1/users/change-user-password`,

  //Reservas
  CREAR_RESERVA_URL: `${URL_SERVER}/api/v1/reservas/crear-reserva`,
  GET_LAST_RESERVA_URL: `${URL_SERVER}/api/v1/reservas/get-last-reserva`,
  GET_RESERVAS_BY_STATE_URL: `${URL_SERVER}/api/v1/reservas/get-reservas-por-estado`,

  //Inventario
  CREAR_ELEMENTO_INVENTARIO_URL: `${URL_SERVER}/api/v1/inventario/crear-elemento-inventario`,
  ACTUALIZAR_ELEMENTO_INVENTARIO_URL: `${URL_SERVER}/api/v1/inventario/actualizar-elemento-inventario-by-id`,
  GET_LISTADO_INVENTARIO_URL: `${URL_SERVER}/api/v1/inventario/get-listado-inventario`,

  // Habitaciones
  CREAR_HABITACION_URL: `${URL_SERVER}/api/v1/habitaciones/crear-habitacion`,
  GET_LISTADO_HABITACIONES_URL: `${URL_SERVER}/api/v1/habitaciones/get-listado-habitaciones`,
};
