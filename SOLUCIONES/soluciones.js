// archivo: ejercicios_array_funcionales.js

// ============================================================================
// ARRAY BASE
// ============================================================================
const alumnos = [
    { id: 1, nombre: "María", curso: "DAW1", notaMedia: 8.2, repetidor: false, matriculado: true },
    { id: 2, nombre: "David", curso: "DAW1", notaMedia: 5.4, repetidor: false, matriculado: true },
    { id: 3, nombre: "Lucía", curso: "DAW2", notaMedia: 9.1, repetidor: false, matriculado: true },
    { id: 4, nombre: "Sergio", curso: "DAW2", notaMedia: 4.3, repetidor: true, matriculado: true },
    { id: 5, nombre: "Ana", curso: "DAM1", notaMedia: 6.8, repetidor: false, matriculado: false },
    { id: 6, nombre: "Paula", curso: "DAM1", notaMedia: 7.5, repetidor: false, matriculado: true },
    { id: 7, nombre: "Javier", curso: "DAM2", notaMedia: 3.9, repetidor: true, matriculado: true },
    { id: 8, nombre: "Carlos", curso: "DAW1", notaMedia: 9.7, repetidor: false, matriculado: true }
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
// 3 EJERCICIOS DE MAP (RESUELTOS)
// ============================================================================

// MAP 1: array con los nombres en mayúsculas.
const map1_nombresMayus = alumnos.map(a => a.nombre.toUpperCase());

// MAP 2: array de objetos { nombre, aprobado } (aprobado si notaMedia >= 5).
const map2_objAprobados = alumnos.map(a => ({
    nombre: a.nombre,
    aprobado: a.notaMedia >= 5
}));

// MAP 3: array de strings "Nombre (CURSO) - Nota: XX.XX"
const map3_descripciones = alumnos.map(a =>
    `${a.nombre} (${a.curso}) - Nota: ${a.notaMedia.toFixed(2)}`
);

// ============================================================================
// 3 EJERCICIOS DE FILTER (RESUELTOS)
// ============================================================================

// FILTER 1: alumnos con notaMedia >= 7.
const filter1_notables = alumnos.filter(a => a.notaMedia >= 7);

// FILTER 2: alumnos repetidores.
const filter2_repetidores = alumnos.filter(a => a.repetidor);

// FILTER 3: alumnos de DAW1 y matriculados.
const filter3_daw1Matriculados = alumnos.filter(
    a => a.curso === "DAW1" && a.matriculado
);

// ============================================================================
// 3 EJERCICIOS DE REDUCE (RESUELTOS)
// ============================================================================

// REDUCE 1: nota media general (número).
const reduce1_notaMediaGeneral =
    alumnos.reduce((acc, a) => acc + a.notaMedia, 0) / alumnos.length;

// REDUCE 2: resumen de matrículas { matriculados, noMatriculados }.
const reduce2_resumenMatriculas = alumnos.reduce(
    (acc, a) => {
        if (a.matriculado) acc.matriculados++;
        else acc.noMatriculados++;
        return acc;
    },
    { matriculados: 0, noMatriculados: 0 }
);

// REDUCE 3: { aprobados, suspensos } (aprobado si notaMedia >= 5).
const reduce3_aprobadosSuspensos = alumnos.reduce(
    (acc, a) => {
        if (a.notaMedia >= 5) acc.aprobados++;
        else acc.suspensos++;
        return acc;
    },
    { aprobados: 0, suspensos: 0 }
);

// ============================================================================
// 3 EJERCICIOS COMBO MAP + FILTER + REDUCE (RESUELTOS)
// ============================================================================

// COMBO 1: media de nota de alumnos DAW1 matriculados.
const combo1_daw1Matriculados = alumnos.filter(
    a => a.curso === "DAW1" && a.matriculado
);

const combo1_mediaDaw1Matriculados =
    combo1_daw1Matriculados.reduce((acc, a) => acc + a.notaMedia, 0) /
    combo1_daw1Matriculados.length;

// COMBO 2: string con nombres de aprobados (nota >= 5) no repetidores.
const combo2_nombresAprobadosNoRepetidores = alumnos
    .filter(a => a.notaMedia >= 5 && !a.repetidor)
    .map(a => a.nombre)
    .reduce((acc, nombre, index) => {
        if (index === 0) return nombre;
        return acc + ", " + nombre;
    }, "");

// COMBO 3: sobresalientes (nota >= 9) agrupados por curso.
const combo3_sobresalientesPorCurso = alumnos
    .filter(a => a.notaMedia >= 9)
    .map(a => ({ nombre: a.nombre, curso: a.curso }))
    .reduce((acc, alumno) => {
        if (!acc[alumno.curso]) acc[alumno.curso] = [];
        acc[alumno.curso].push(alumno);
        return acc;
    }, {});

// ============================================================================
// 3 EJERCICIOS CON forEach (RESUELTOS)
// ============================================================================

const forEach1_resumenMatriculas = [];
alumnos.forEach(alumno => {
    const estado = alumno.matriculado ? "matriculado" : "no matriculado";
    forEach1_resumenMatriculas.push(`${alumno.nombre} (${alumno.curso}) -> ${estado}`);
});

let forEach2_totalRepetidores = 0;
alumnos.forEach(alumno => {
    if (alumno.repetidor) {
        forEach2_totalRepetidores++;
    }
});

const forEach3_alumnosPorCurso = {};
alumnos.forEach(alumno => {
    if (!forEach3_alumnosPorCurso[alumno.curso]) {
        forEach3_alumnosPorCurso[alumno.curso] = [];
    }
    forEach3_alumnosPorCurso[alumno.curso].push(alumno.nombre);
});

// ============================================================================
// 3 EJERCICIOS CON for...in (RESUELTOS)
// ============================================================================

const forIn1_clavesInventario = [];
const lineasInventario = [];
let forIn2_totalEquipos = 0;

for (const clave in inventarioAula) {
    if (Object.prototype.hasOwnProperty.call(inventarioAula, clave)) {
        forIn1_clavesInventario.push(clave);
        forIn2_totalEquipos += inventarioAula[clave];
        lineasInventario.push(`${clave}: ${inventarioAula[clave]} unidades`);
    }
}

const forIn3_descripcionInventario = lineasInventario.join("\n");

// ============================================================================
// CREACIÓN DE ARRAYS DE DISTINTAS FORMAS (RESUELTOS)
// ============================================================================

const create1_arrayLiteralCursos = ["DAW", "DAM", "ASIR", "SMR"];
const create2_arrayOfHoras = Array.of(10, 12, 8);
const create3_arrayFromCadena = cadenaModulos.split(",").map(modulo => modulo.trim());

// ============================================================================
// MANIPULAR ELEMENTOS (RESUELTOS)
// ============================================================================

const mutate1_stackLenguajes = [...lenguajesBase];
mutate1_stackLenguajes.push("TypeScript");
mutate1_stackLenguajes.unshift("Node");
mutate1_stackLenguajes.pop();

const mutate2_colaTareas = [...tareasPendientes];
mutate2_colaTareas.shift();
mutate2_colaTareas.push("Publicar README");

const mutate3_modulosActualizados = [...modulosOptativos];
mutate3_modulosActualizados.splice(1, 0, "Ciberseguridad");
mutate3_modulosActualizados.pop();

// ============================================================================
// PROPIEDADES Y MÉTODOS (RESUELTOS)
// ============================================================================

const props1_totalFrameworks = frameworksFrontend.length;
const props2_incluyeSvelte = frameworksFrontend.includes("Svelte");
const props3_frameworksOrdenados = [...frameworksFrontend].sort().join(" | ");

// ============================================================================
// ARRAYS PARALELOS (RESUELTOS)
// ============================================================================

const parallel1_tarjetasTutorias = grupos.map((grupo, index) => ({
    grupo,
    tutor: tutores[index],
    horas: horasTutorias[index]
}));

let parallel2_tutorMasHoras = "";
let maxHoras = -Infinity;

grupos.forEach((grupo, index) => {
    if (horasTutorias[index] > maxHoras) {
        maxHoras = horasTutorias[index];
        parallel2_tutorMasHoras = `${tutores[index]} (${grupo}) - ${horasTutorias[index]}h`;
    }
});

const parallel3_objHorasPorGrupo = {};
grupos.forEach((grupo, index) => {
    parallel3_objHorasPorGrupo[grupo] = horasTutorias[index];
});

// ============================================================================
// ARRAYS MULTIDIMENSIONALES (RESUELTOS)
// ============================================================================

let multi1_totalNotas = 0;
notasTrimestres.forEach(trimestre => {
    trimestre.forEach(nota => {
        multi1_totalNotas += nota;
    });
});

const multi2_mediaPorTrimestre = notasTrimestres.map(trimestre => {
    const suma = trimestre.reduce((acc, nota) => acc + nota, 0);
    return +(suma / trimestre.length).toFixed(2);
});

let multi3_mejorNota = -Infinity;
notasTrimestres.forEach(trimestre => {
    trimestre.forEach(nota => {
        if (nota > multi3_mejorNota) multi3_mejorNota = nota;
    });
});
