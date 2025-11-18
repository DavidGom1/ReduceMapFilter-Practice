// archivo: ejercicios_array_funcionales.js

// ============================================================================
// ARRAY BASE PARA TODOS LOS EJERCICIOS
// ============================================================================
const alumnos = [
  { id: 1, nombre: "María",   curso: "DAW1", notaMedia: 8.2, repetidor: false, matriculado: true },
  { id: 2, nombre: "David",   curso: "DAW1", notaMedia: 5.4, repetidor: false, matriculado: true },
  { id: 3, nombre: "Lucía",   curso: "DAW2", notaMedia: 9.1, repetidor: false, matriculado: true },
  { id: 4, nombre: "Sergio",  curso: "DAW2", notaMedia: 4.3, repetidor: true,  matriculado: true },
  { id: 5, nombre: "Ana",     curso: "DAM1", notaMedia: 6.8, repetidor: false, matriculado: false },
  { id: 6, nombre: "Paula",   curso: "DAM1", notaMedia: 7.5, repetidor: false, matriculado: true },
  { id: 7, nombre: "Javier",  curso: "DAM2", notaMedia: 3.9, repetidor: true,  matriculado: true },
  { id: 8, nombre: "Carlos",  curso: "DAW1", notaMedia: 9.7, repetidor: false, matriculado: true }
];

const inventarioAula = {
  portatiles: 12,
  tablets: 8,
  proyectores: 2,
  routers: 4,
  auriculares: 15
};

const cadenaModulos = "Programación, Bases de Datos, Entornos, Lenguajes de Marcas";

const lenguajesBase = ["HTML", "CSS", "JavaScript"];
const tareasPendientes = ["Instalar Node", "Clonar repositorio", "Resolver ejercicios"];
const modulosOptativos = ["UX", "Testing", "DevOps"];

const frameworksFrontend = ["React", "Vue", "Angular", "Svelte", "Solid"];

const grupos = ["DAW1", "DAW2", "DAM1", "ASIR1"];
const tutores = ["Laura", "Miguel", "Sara", "Jorge"];
const horasTutorias = [5, 4, 3, 4];

const notasTrimestres = [
  [8.2, 7.5, 9.1],
  [6.4, 7.8, 8.0],
  [9.5, 8.7, 9.0]
];

// ============================================================================
// 3 EJERCICIOS DE MAP
// ============================================================================

// MAP 1
// Crea un array con los nombres de los alumnos en MAYÚSCULAS.
// Ejemplo de elemento: "MARÍA"
let map1_nombresMayus = null; // TODO: usar map sobre 'alumnos'

// MAP 2
// Crea un array de objetos con la forma:
// { nombre: "...", aprobado: true/false }
// aprobado será true si notaMedia >= 5.
let map2_objAprobados = null; // TODO: usar map y devolver nuevos objetos

// MAP 3
// Crea un array de strings descriptivos con la forma:
// "María (DAW1) - Nota: 8.20"
// La nota debe ir con dos decimales.
let map3_descripciones = null; // TODO: usar template strings y toFixed(2)

// ============================================================================
// 3 EJERCICIOS DE FILTER
// ============================================================================

// FILTER 1
// Crea un array solo con los alumnos que tengan notaMedia >= 7.
let filter1_notables = null; // TODO: usar filter con condición sobre notaMedia

// FILTER 2
// Crea un array solo con los alumnos repetidores (repetidor === true).
let filter2_repetidores = null; // TODO: usar filter con condición booleana

// FILTER 3
// Crea un array con los alumnos del curso "DAW1" que estén matriculados (matriculado === true).
let filter3_daw1Matriculados = null; // TODO: usar filter con dos condiciones

// ============================================================================
// 3 EJERCICIOS DE REDUCE
// ============================================================================

// REDUCE 1
// Calcula la nota media general de todos los alumnos (un número).
// Pista: suma todas las notaMedia y divide entre alumnos.length.
let reduce1_notaMediaGeneral = null; // TODO: usar reduce para sumar notas

// REDUCE 2
// Calcula cuántos alumnos están matriculados y cuántos no, en un objeto:
// { matriculados: X, noMatriculados: Y }
let reduce2_resumenMatriculas = null; // TODO: usar reduce con acumulador objeto

// REDUCE 3
// Calcula un objeto con el número de aprobados y suspensos:
// { aprobados: X, suspensos: Y }
// Se aprueba con notaMedia >= 5.
let reduce3_aprobadosSuspensos = null; // TODO: usar reduce y condicional

// ============================================================================
// 3 EJERCICIOS COMBINANDO MAP + FILTER + REDUCE
// ============================================================================

// COMBO 1
// 1) Filtra los alumnos del curso "DAW1".
// 2) De ellos, quédate solo con los que estén matriculados.
// 3) Calcula la nota media de ese grupo.
// El resultado debe ser un número (la media).
let combo1_mediaDaw1Matriculados = null; 
// TODO: filter → filter → reduce (o filter encadenados + reduce)

// COMBO 2
// 1) Filtra solo los alumnos con notaMedia >= 5 y que NO sean repetidores.
// 2) Con map, crea un array de sus nombres.
// 3) Con reduce, concatena los nombres en un string del tipo:
// "María, David, Ana"
// (Se puede hacer también sin reduce, pero aquí la idea es practicarlo).
let combo2_nombresAprobadosNoRepetidores = null; 
// TODO: filter → filter/map → reduce (para concatenar)

// COMBO 3
// 1) Filtra los alumnos con notaMedia >= 9 (sobresalientes).
// 2) Con map, crea objetos con forma:
//    { nombre: "...", curso: "..." }
// 3) Con reduce, agrupa estos sobresalientes por curso en un objeto:
// {
//   DAW1: [ {nombre, curso}, ... ],
//   DAW2: [ ... ],
//   ...
// }
let combo3_sobresalientesPorCurso = null; 
// TODO: filter → map → reduce con agrupación por clave 'curso'

// ============================================================================
// 3 EJERCICIOS CON forEach
// ============================================================================

// FOREACH 1
// Usa forEach para rellenar un array con frases del tipo:
// "María (DAW1) -> matriculado" según el campo 'matriculado'.
let forEach1_resumenMatriculas = null; // TODO: inicializa un array, recorre con forEach y añade las frases

// FOREACH 2
// Cuenta cuántos alumnos son repetidores empleando forEach.
let forEach2_totalRepetidores = null; // TODO: crea un contador y súmalo dentro del forEach

// FOREACH 3
// Agrupa los nombres por curso usando forEach y un objeto acumulador.
// Resultado esperado: { DAW1: ["María", "David", ...], DAW2: [...], ... }
let forEach3_alumnosPorCurso = null; // TODO: recorrer con forEach y construir un objeto con arrays

// ============================================================================
// 3 EJERCICIOS CON for...in
// ============================================================================

// FOR-IN 1
// Recorre 'inventarioAula' con for...in y devuelve un array con todas las claves.
let forIn1_clavesInventario = null; // TODO: usar for...in para ir agregando las claves

// FOR-IN 2
// Calcula el total de equipos sumando los valores numéricos del inventario.
let forIn2_totalEquipos = null; // TODO: usa for...in para sumar

// FOR-IN 3
// Construye un string multilínea del tipo "portatiles: 12 unidades" usando for...in.
let forIn3_descripcionInventario = null; // TODO: concatenar cada línea

// ============================================================================
// CREACIÓN DE ARRAYS DE DISTINTAS FORMAS
// ============================================================================

// CREATE 1
// Crea un array literal con los cursos preferidos. Ejemplo: ["DAW", "DAM", "ASIR"].
let create1_arrayLiteralCursos = null; // TODO: usar [] directamente

// CREATE 2
// Genera un array con Array.of que contenga tres horas estimadas (números).
let create2_arrayOfHoras = null; // TODO: usar Array.of

// CREATE 3
// Convierte la cadena 'cadenaModulos' en un array de módulos limpios (sin espacios extra).
let create3_arrayFromCadena = null; // TODO: usar split y map o Array.from para limpiar espacios

// ============================================================================
// MANIPULAR ELEMENTOS (SACAR Y METER)
// ============================================================================

// MUTATE 1
// Parte de 'lenguajesBase'. Añade "TypeScript" al final (push), "Node" al principio (unshift)
// y elimina el último elemento (pop). Devuelve el array resultante.
let mutate1_stackLenguajes = null; // TODO: copia el array y aplica push/unshift/pop

// MUTATE 2
// Parte de 'tareasPendientes'. Simula una cola real usando shift (para quitar la primera tarea)
// y push (para añadir "Publicar README"). Devuelve el array final.
let mutate2_colaTareas = null; // TODO: usa métodos de cola

// MUTATE 3
// Parte de 'modulosOptativos'. Inserta "Ciberseguridad" en la posición 1 sin eliminar
// y elimina el último elemento con pop. Devuelve el array final.
let mutate3_modulosActualizados = null; // TODO: usa splice y pop

// ============================================================================
// PROPIEDADES Y MÉTODOS DE ARRAYS
// ============================================================================

// PROPS 1
// Obtén el número total de frameworks en 'frameworksFrontend' usando length.
let props1_totalFrameworks = null; // TODO: usar .length

// PROPS 2
// Comprueba si "Svelte" está incluido y devuelve true/false.
let props2_incluyeSvelte = null; // TODO: usar includes

// PROPS 3
// Obtén un string ordenado alfabéticamente con los frameworks separados por " | ".
let props3_frameworksOrdenados = null; // TODO: copia, ordena y usa join

// ============================================================================
// ARRAYS PARALELOS
// ============================================================================

// PARALLEL 1
// Combina los arrays 'grupos', 'tutores' y 'horasTutorias' en un array de objetos:
// { grupo: "DAW1", tutor: "Laura", horas: 5 }
let parallel1_tarjetasTutorias = null; // TODO: recorrer por índice

// PARALLEL 2
// Determina qué tutor dedica más horas y devuelve una cadena "Tutor (Grupo) - Xh".
let parallel2_tutorMasHoras = null; // TODO: recorrer arrays en paralelo y comparar

// PARALLEL 3
// Crea un objeto donde la clave sea el grupo y el valor las horas correspondientes.
let parallel3_objHorasPorGrupo = null; // TODO: construir objeto con índice

// ============================================================================
// ARRAYS MULTIDIMENSIONALES
// ============================================================================

// MULTI 1
// Calcula la suma total de todas las notas en 'notasTrimestres'.
let multi1_totalNotas = null; // TODO: dobles bucles o forEach anidado

// MULTI 2
// Devuelve un array con la media de cada trimestre (cada subarray).
let multi2_mediaPorTrimestre = null; // TODO: recorrer la matriz y calcular medias

// MULTI 3
// Obtén la nota más alta registrada en toda la matriz.
let multi3_mejorNota = null; // TODO: recorrer todas las posiciones
