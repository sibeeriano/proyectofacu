let fs = require('fs'); 

let moduloTareas = { 
    archivo: './musica.json',
    archivo2:'./playlist.json',
    
    leerJSON: function() { 
        let listaCompleta = fs.readFileSync(this.archivo, 'utf-8');
        let musica = JSON.parse(listaCompleta);
        return musica;
    },
        
    LeerPlaylistJSON: function() {
        let playlistCompleta = fs.readFileSync(this.archivo2, 'utf-8');
        let playlistjs = JSON.parse(playlistCompleta);
        return playlistjs;
    },

    escribirJSON: function(nuevoArtista, nuevaCancion){
        
        let nuevoIngreso = {
            Artista: nuevoArtista,
            Cancion: nuevaCancion
        }
        let playlistjs = this.LeerPlaylistJSON();
        playlistjs.push(nuevoIngreso);
        this.guardarJSON(playlistjs)
    },
    
    guardarJSON: function(playlistjs){
        let playlistActualizada = JSON.stringify(playlistjs);
        fs.writeFileSync('./playlist.json',playlistActualizada,'utf-8');
    },

    guardarJSON2: function(musica){
        let musicaActualizada = JSON.stringify(musica);
        fs.writeFileSync('./musica.json',musicaActualizada,'utf-8');
    },


    filtrarJSON: function (GeneroAFiltrar){
        let musica = this.leerJSON();
        let generoFiltrado = musica.filter(function(musica){
            
            return musica.Genero == GeneroAFiltrar
        })
            return generoFiltrado
 
    },
    
    CambiarGenero: function(Cancion, cambio){
        musica=this.leerJSON()
        let generoModificado = musica.map(function(musica){
            musica.Cancion==Cancion? musica.Genero=cambio:musica.Cancion
            return musica
        });
        this.guardarJSON2(generoModificado) 
        
         
            
    }   

    
}
module.exports = moduloTareas