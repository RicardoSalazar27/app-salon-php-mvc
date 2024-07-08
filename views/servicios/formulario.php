<div class="campo">
    <label for="nombre">Nombre</label>
    <input 
        type="text" 
        name="nombre" 
        id="nombre"
        placeholder="Nombre Servcio"
        value="<?php echo $servicio->nombre;?>"
    />
</div>

<div class="campo">
    <label for="nombre">Precio</label>
    <input 
        type="number" 
        name="precio" 
        id="precio"
        placeholder="Precio Servcio"
        value="<?php echo $servicio->precio;?>"
    />
</div>