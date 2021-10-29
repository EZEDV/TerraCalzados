(function(){
            var formulario = document.getElementsByName('formulario')[0],
                elementos = formulario.elements,
                boton = document.getElementById('btn');

            var validarNombre = function(e){
                if (formulario.nombre.value == 0){
                    alert("Completa el campo Nombre");
                    e.preventDefault();
                }
            };

            var validarEmail = function(e){
                if (formulario.email.value == 0){
                    alert("Completa el campo Email");
                    e.preventDefault();
                }
            };            
           
            var validarComentario = function(e){
                if (formulario.comentario.value == 0){
                    alert("Completa el campo Comentario");
                    e.preventDefault();  
                }
            };
            var validar = function(e){
                validarNombre(e);
                validarEmail(e);
                validarComentario(e);
            };
            formulario.addEventListener("submit", validar);
        }())