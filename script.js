const input= document.getElementById("productoInput");
const agregarBton =document.getElementById("agregarBtn");
const lista =document.getElementById("lista");
const contador =document.getElementById("contador");

let productos = JSON.parse(localStorage.getItem("productosinput")) || [];

function renderLista(){
    lista.innerHTML ="";
    productos.forEach((producto,index) =>{
    const li = document.createElement("li");
    li.textContent =producto.nombre;
     
    // boton eliminar
    
    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarbtn.onclick =() => {
        productos.splice(index,1);
        guardar();
        };
    
    li.appendChild(eliminarBtn);
    lista.appendChild (li);
       
    });
    contador.textContent = `Total productos: ${productos.length}`;
    }

    function guardar(){
        localStorage.setItem("productosinput", JSON.stringify(producto.length));
        renderLista();
    }
    agregarBtn.onclick = ()=> {
        const nombre = input.value.trim();
        if (nombre) {
            productos.push({nombre});
            input.value = "";
            guardar();
            
        }
    };
    renderLista();