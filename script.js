var tablaUsuarios;

window.onload = function() {
  var random = Math.random();

  //add css
  var elemento = document.createElement("link");
  elemento.setAttribute("rel", "stylesheet");
  elemento.setAttribute("type", "text/css");
  elemento.setAttribute("href", 'Recursos/stylo.css?v=' + random);
  document.getElementsByTagName("head")[0].appendChild(elemento);
  Iniciar();
};

function Iniciar() {
  tablaUsuarios = $('#tablaUsuarios').DataTable({
    info: false,
    processing: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json" //idioma español
    },
  });
  Agregar();
}

function Agregar() {
  tablaUsuarios.row.add([
    "<div class='text-center'><a href='https://ugel-lambayeque.edu.pe/' target='_blank _self'><button class='btn btn-dark btn-sm'><i class='far fa-eye'></i></button></a></div>",
    "<div class='text-center'><a href='https://drive.google.com/file/d/1bkGwrl0CMhrX3Gyx1ZaiUR0WMavuhjM4/view' target='_blank _self'><button class='btn btn-dark btn-sm'><i class='fas fa-file-pdf'></i></button></a></div>",
    "Ugel Lambayeque"
  ]).draw();
}