import fs from "fs";
import * as gestor from './app.js';


describe("Gestor Tareas", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./gestorTareas.js");
  });

  it("Al iniciar no hay nada en la lista de tareas", () => {
    const lista_elem = document.querySelector("#lista-tareas");
    expect(lista_elem.innerHTML).toEqual("");
  });

  // it("Deberia completar una tarea", () => {
  //   const tarea_elem = document.querySelector("#tarea");
  //   const boton_elem = document.querySelector("#crear-tarea");
  //   const lista_elem = document.querySelector("#lista-tareas");

  //   tarea_elem.value = "Primera Tarea";
  //   boton_elem.click();
  //   expect(lista_elem.innerHTML).toEqual("Primera Tarea");
  // });

//   it("Visualizar tarea en la lista", () => {
//     const tarea_elem = document.querySelector("#tarea");
//     const fecha_elem = document.querySelector("#fecha");
//     const descripcion_elem = document.querySelector("#descripcion");
//     const boton_elem = document.querySelector("#crear-tarea");
//     const lista_elem = document.querySelector("#lista-tareas");
//     const categoria_elem = document.querySelector("#select-categoria");
//     const mostrarTareas_elem = document.querySelector("#mostrar-tareas");
//     boton_elem.addEventListener("click", (event) => {
//         let tarea = gestor.classTarea(0, "a", "Ilimitado", "otros", "a", "n/a");
//         gestor.añadirAListaTarea(tarea);
//         id++;
//         // var aux = lista_elem.innerHTML;
//         lista_elem.innerHTML = "<ul>" + "<li>" + "<div class='dropdown'>" + "<span>" +tarea.titulo + "</span>" + "<div class='dropdown-content'>" + "<ul>"+ "<li>" + "Categoria: " + tarea.categoria +"</li>"+ "<li>" + "Descripcion: " + tarea.descripcion + "</li>" + "<li>" + "Fecha Limite: " + tarea.fechaLimite + "</li>"+  "<li>" + "Etiquetas: " + tarea.etiquetas + "</li>" +"</div>"+ "</div>" + "</ul>" + "</li>";
//     });
//     console.log(lista_elem.innerHTML);
//     expect(lista_elem.innerHTML).toEqual("<ul>" + "<li>" + "<div class='dropdown'>" + "<span>" + "a" + "</span>" + "<div class='dropdown-content'>" + "<ul>"+ "<li>" + "Categoria: " + "otros" +"</li>"+ "<li>" + "Descripcion: " + "a" + "</li>" + "<li>" + "Fecha Limite: " + "Ilimitado" + "</li>"+  "<li>" + "Etiquetas: " + "n/a" + "</li>" +"</div>"+ "</div>" + "</ul>" + "</li>");
//   });

  afterEach(() => {
    const lista_elem = document.querySelector("#lista-tareas");
    lista_elem.innerHTML = "";
  });

});
