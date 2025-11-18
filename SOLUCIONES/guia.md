# Guía de ejercicios de arrays y funciones modernas

Este documento resume el propósito, la estrategia recomendada y el tipo de dato devuelto
por cada ejercicio de `app.js`. Encontrarás secciones para map, filter, reduce, combinaciones,
forEach, for...in y todo el bloque de arrays (creación, manipulación, propiedades, paralelos
y multidimensionales).

---

## 1. Conjuntos de datos disponibles

- `alumnos`: listado base con id, nombre, curso, notaMedia, repetidor y matriculado.
- `inventarioAula`: cantidades de material tecnológico del aula.
- `cadenaModulos`: cadena de texto con módulos separados por comas.
- `lenguajesBase`, `tareasPendientes`, `modulosOptativos`: arrays para practicar inserciones y borrados.
- `frameworksFrontend`: frameworks populares usados en el bloque de propiedades.
- `grupos`, `tutores`, `horasTutorias`: arrays paralelos para elaborar resúmenes.
- `notasTrimestres`: matriz (array de arrays) con notas de distintos trimestres.

Tenlos presentes para elegir qué estructura utilizar en cada propuesta.

---

## 2. MAP

map transforma cada elemento en otro valor y devuelve un array nuevo del mismo tamaño.

### MAP 1 — `map1_nombresMayus`
- Objetivo: obtener los nombres en mayúsculas.
- Estrategia: `alumnos.map(a => a.nombre.toUpperCase())`.
- Devuelve: array de strings.

### MAP 2 — `map2_objAprobados`
- Objetivo: asociar cada alumno con un booleano `aprobado`.
- Estrategia: map devolviendo `{ nombre: a.nombre, aprobado: a.notaMedia >= 5 }`.
- Devuelve: array de objetos.

### MAP 3 — `map3_descripciones`
- Objetivo: crear frases "Nombre (CURSO) - Nota: XX.XX".
- Estrategia: usar template strings y `toFixed(2)`.
- Devuelve: array de strings.

---

## 3. FILTER

filter recorre el array y conserva solo los elementos que cumplen una condición.

### FILTER 1 — `filter1_notables`
- Objetivo: alumnos con notaMedia >= 7.
- Estrategia: `alumnos.filter(a => a.notaMedia >= 7)`.
- Devuelve: array de alumnos.

### FILTER 2 — `filter2_repetidores`
- Objetivo: quedarse solo con repetidores.
- Estrategia: `alumnos.filter(a => a.repetidor)`.
- Devuelve: array de alumnos.

### FILTER 3 — `filter3_daw1Matriculados`
- Objetivo: curso DAW1 y matriculados.
- Estrategia: `alumnos.filter(a => a.curso === "DAW1" && a.matriculado)`.
- Devuelve: array de alumnos.

---

## 4. REDUCE

reduce acumula valores para devolver un único resultado.

### REDUCE 1 — `reduce1_notaMediaGeneral`
- Objetivo: media general de notas.
- Estrategia: sumar notas con reduce y dividir entre `alumnos.length`.
- Devuelve: número.

### REDUCE 2 — `reduce2_resumenMatriculas`
- Objetivo: contar matriculados y no matriculados.
- Estrategia: acumulador objeto `{ matriculados, noMatriculados }`.
- Devuelve: objeto.

### REDUCE 3 — `reduce3_aprobadosSuspensos`
- Objetivo: contar aprobados (>=5) y suspensos.
- Estrategia: acumulador `{ aprobados, suspensos }`.
- Devuelve: objeto.

---

## 5. COMBINACIONES MAP + FILTER + REDUCE

### COMBO 1 — `combo1_mediaDaw1Matriculados`
- Objetivo: media de nota para DAW1 matriculados.
- Estrategia: doble filter seguido de reduce.
- Devuelve: número.

### COMBO 2 — `combo2_nombresAprobadosNoRepetidores`
- Objetivo: concatenar nombres de aprobados no repetidores.
- Estrategia: filter → map → reduce que concatene con comas.
- Devuelve: string.

### COMBO 3 — `combo3_sobresalientesPorCurso`
- Objetivo: agrupar sobresalientes (nota >= 9) por curso.
- Estrategia: filter → map → reduce que genere un objeto cuyas claves sean cursos.
- Devuelve: objeto con arrays.

---

## 6. forEach

### FOREACH 1 — `forEach1_resumenMatriculas`
- Objetivo: crear frases "Nombre (Curso) -> matriculado/no matriculado".
- Estrategia: iniciar un array vacío y usar forEach para hacer `push` de cada frase.
- Devuelve: array de strings.

### FOREACH 2 — `forEach2_totalRepetidores`
- Objetivo: contar los repetidores sin usar reduce.
- Estrategia: contador inicial en 0 e incremento dentro del forEach.
- Devuelve: número.

### FOREACH 3 — `forEach3_alumnosPorCurso`
- Objetivo: agrupar nombres por curso en un objeto.
- Estrategia: comprobar si existe la clave y crear el array antes de hacer `push`.
- Devuelve: objeto `{ curso: [nombres] }`.

---

## 7. for...in

Se usa para recorrer propiedades enumerables de objetos (no arrays).

### FOR-IN 1 — `forIn1_clavesInventario`
- Objetivo: listar todas las claves del inventario.
- Estrategia: recorrer `inventarioAula` con for...in y hacer `push` de la clave.
- Devuelve: array de strings.

### FOR-IN 2 — `forIn2_totalEquipos`
- Objetivo: sumar todas las unidades.
- Estrategia: acumular `inventarioAula[clave]` durante el for...in.
- Devuelve: número.

### FOR-IN 3 — `forIn3_descripcionInventario`
- Objetivo: crear un texto multilínea "clave: X unidades".
- Estrategia: construir un array de líneas y unirlo con `\n`.
- Devuelve: string.

---

## 8. Creación de arrays

### CREATE 1 — `create1_arrayLiteralCursos`
- Objetivo: practicar el literal `[]`.
- Estrategia: declarar manualmente un array de cursos.
- Devuelve: array de strings.

### CREATE 2 — `create2_arrayOfHoras`
- Objetivo: usar `Array.of` para crear arrays rápidamente.
- Estrategia: `Array.of(10, 12, 8)` con horas estimadas.
- Devuelve: array de números.

### CREATE 3 — `create3_arrayFromCadena`
- Objetivo: pasar de cadena a array limpio.
- Estrategia: `cadenaModulos.split(',').map(m => m.trim())`.
- Devuelve: array de strings.

---

## 9. Manipular elementos (push, pop, shift, unshift, splice)

### MUTATE 1 — `mutate1_stackLenguajes`
- Objetivo: simular una pila partiendo de `lenguajesBase`.
- Estrategia: copiar el array, usar push/unshift y finalmente pop.
- Devuelve: array de strings.

### MUTATE 2 — `mutate2_colaTareas`
- Objetivo: simular una cola de tareas.
- Estrategia: copiar `tareasPendientes`, quitar la primera con `shift` y añadir al final con `push`.
- Devuelve: array de strings.

### MUTATE 3 — `mutate3_modulosActualizados`
- Objetivo: insertar sin borrar y eliminar el último elemento restante.
- Estrategia: copia + `splice(1, 0, ...)` para insertar y `pop()` para quitar el final.
- Devuelve: array de strings.

---

## 10. Propiedades y métodos de arrays

### PROPS 1 — `props1_totalFrameworks`
- Objetivo: conocer la longitud del array.
- Estrategia: `frameworksFrontend.length`.
- Devuelve: número.

### PROPS 2 — `props2_incluyeSvelte`
- Objetivo: saber si un elemento existe.
- Estrategia: `frameworksFrontend.includes("Svelte")`.
- Devuelve: booleano.

### PROPS 3 — `props3_frameworksOrdenados`
- Objetivo: practicar `slice/sort/join`.
- Estrategia: clonar el array, ordenarlo y unirlo con `" | "`.
- Devuelve: string.

---

## 11. Arrays paralelos

### PARALLEL 1 — `parallel1_tarjetasTutorias`
- Objetivo: combinar `grupos`, `tutores` y `horasTutorias`.
- Estrategia: recorrer por índice y construir objetos `{ grupo, tutor, horas }`.
- Devuelve: array de objetos.

### PARALLEL 2 — `parallel2_tutorMasHoras`
- Objetivo: detectar quién dedica más horas.
- Estrategia: seguir el índice del máximo y formar la cadena "Tutor (Grupo) - Xh".
- Devuelve: string.

### PARALLEL 3 — `parallel3_objHorasPorGrupo`
- Objetivo: convertir arrays paralelos en un objeto de consulta rápida.
- Estrategia: asignar `obj[grupos[i]] = horasTutorias[i]`.
- Devuelve: objeto `{ grupo: horas }`.

---

## 12. Arrays multidimensionales

### MULTI 1 — `multi1_totalNotas`
- Objetivo: sumar todos los números en `notasTrimestres`.
- Estrategia: doble forEach/for anidado para acumular.
- Devuelve: número.

### MULTI 2 — `multi2_mediaPorTrimestre`
- Objetivo: calcular la media de cada subarray.
- Estrategia: map sobre la matriz usando reduce interno y dividir por la longitud del trimestre.
- Devuelve: array de números.

### MULTI 3 — `multi3_mejorNota`
- Objetivo: obtener el valor máximo de toda la matriz.
- Estrategia: comparar cada nota con un `max` global.
- Devuelve: número.

---

Con esta guía puedes entender qué se espera de cada bloque y verificar si tus soluciones
devuelven el tipo de dato adecuado antes de comparar con `SOLUCIONES/soluciones.js`.
