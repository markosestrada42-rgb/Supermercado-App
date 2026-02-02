const input= document.getElementById("productoInput");
const agregarBtn =document.getElementById("agregarBtn");
const lista =document.getElementById("lista");
const contador =document.getElementById("contador");

// recuperar productos guardados 

let productos = JSON.parse(localStorage.getItem("productosinput")) || [];

function renderLista(){
    lista.innerHTML ="";
    productos.forEach((producto,index) =>{

        const li = document.createElement("li");
    li.textContent = producto.nombre;
     
    // boton eliminar
    
    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.onclick =() => {
        productos.splice(index,1);
        guardar();
        };
    
    // insertar boton dentro de li
    li.appendChild(eliminarBtn);
    //insertar li dentro de boton
    lista.appendChild (li);
       
    });
    contador.textContent = `Total productos: ${productos.length}`;
    }

    function guardar(){
        localStorage.setItem("productosinput", JSON.stringify(productos));
        renderLista();
    }
    agregarBtn.onclick = () => {
        const nombre = input.value.trim();
        if (nombre) {
            productos.push({ nombre });
            input.value = "";
            guardar();
            
        }
    };
    renderLista();