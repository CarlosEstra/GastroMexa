document.addEventListener("DOMContentLoaded", function() {
    const comidasPorEstado = {
        "Aguascalientes": [
            { 
                comida: "Carnitas", 
                receta: "Las carnitas se preparan con cerdo cocido en su propia grasa, servido con cebolla, cilantro y salsa.", 
                imagen: "https://example.com/carnitas.jpg" // URL de la imagen en Internet
            },
            { 
                comida: "Pan de elote", 
                receta: "El pan de elote es un postre dulce elaborado con maíz tierno, azúcar, mantequilla y huevos.",
                imagen: "https://example.com/pan_elote.jpg" // URL de la imagen en Internet
            }
        ],
        "Baja California": [
            { 
                comida: "Tacos de pescado", 
                receta: "Los tacos de pescado están hechos con filete de pescado rebozado, salsa de crema y vegetales.", 
                imagen: "https://example.com/tacos_pescado.jpg"
            },
            { 
                comida: "Langosta", 
                receta: "La langosta se prepara a la parrilla con mantequilla derretida y ajo.",
                imagen: "https://example.com/langosta.jpg"
            }
        ],
        // Añadir más estados aquí...
    };

    const selectEstado = document.getElementById("estado");
    const comidasLista = document.getElementById("comidas-lista");

    // Llenar el select con los estados
    function llenarEstados() {
        const estados = Object.keys(comidasPorEstado);  // Obtener los nombres de los estados
        console.log("Estados disponibles:", estados);  // Verifica que se están obteniendo correctamente

        estados.forEach(estado => {
            const option = document.createElement("option");
            option.value = estado;
            option.textContent = estado;
            selectEstado.appendChild(option);
        });
    }

    // Mostrar las comidas al seleccionar un estado
    function mostrarComidas() {
        const estadoSeleccionado = selectEstado.value;
        console.log("Estado seleccionado:", estadoSeleccionado);  // Verifica el estado seleccionado

        // Limpiar la lista de comidas antes de mostrar nuevas
        comidasLista.innerHTML = "";

        if (estadoSeleccionado && comidasPorEstado[estadoSeleccionado]) {
            const comidas = comidasPorEstado[estadoSeleccionado];
            comidas.forEach(comida => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <strong>${comida.comida}:</strong> ${comida.receta}
                    <br>
                    <img src="${comida.imagen}" alt="${comida.comida}" style="width: 200px; height: auto; border-radius: 8px; margin-top: 10px;">
                `;
                comidasLista.appendChild(li);
            });
        }
    }

    // Llamar a la función para llenar los estados al cargar la página
    llenarEstados();

    // Evento para mostrar las comidas cuando se selecciona un estado
    selectEstado.addEventListener("change", mostrarComidas);
});
