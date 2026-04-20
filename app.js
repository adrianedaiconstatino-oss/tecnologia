function mostrarInfo(tipo) {

    let contenido = "";
       if (tipo === "inteligencia artificial") {
        contenido = "<h2>inteligencia artificial</h2><p>está en todos lados ya wey, desde el cel hasta los carros.<br> cada vez toma más decisiones por nosotros. </p>";
    }

       if (tipo === "Los smartphones") {
        contenido = "<h2>Los smartphones</h2><p>ya somos bien dependientes jajaja, con un solo aparato pagas, navegas, <br>trabajas y hasta te checas la salud. </p>";
    }
   

    if (tipo === "Energías renovables") {
        contenido = "<h2>Energías renovables</h2><p>la tecnología está avanzando re rápido en paneles solares y baterías pa' dejar de <br>depender del petróleo poco a poco. </p>";
    }

    document.getElementById("info").innerHTML = contenido;
}