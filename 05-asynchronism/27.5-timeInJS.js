/*
 En principio, cualquier tarea que se haya delegado al navegador a través de un callback,
 deberá esperar hasta que todas las instrucciones del programa principal se hayan ejecutado.
 Por esta razón el tiempo de espera definido en funciones como setTimeout, no garantizan que el callback
 se ejecute en ese tiempo exactamente, sino en cualquier momento a partir de allí,
 sólo cuando la cola de tareas se haya vaciado.
 */

setTimeout(() => {
  console.log('b');
}, 0);

for (let i = 0; i < 1000000000; i++) {
  console.log(i);
}
