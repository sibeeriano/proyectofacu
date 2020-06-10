
let moduloTareas = require('./modulos')
let process = require('process');
let comando = process.argv[2];
let musica = moduloTareas.leerJSON();
let playlist = moduloTareas.LeerPlaylistJSON();


switch (comando) { 
    case 'listar':
        
        console.log(" ");      
        console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°");                              
        console.log("**** ¡H O T            R I G H T              N O W! ****");    
        console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°");   
       
        for(let i=0; i < musica.length; i++){
            console.log ("**" + musica[i].Artista + "**");
            console.log('              ' + musica[i].Cancion+'');
            console.log( musica[i].Genero+'')
            console.log("------------------------------ "); 
        
           //musica.forEach(musica => console.log ("**" + musica.Artista + "-" + " "+ musica.Cancion+'**')); 
           //no uso el for each porque no le encontre la vuelta para que mostar los elementos del array en orden pero en renglones dif. como en el for.
        }
            console.log (" ")
            console.log("****Puede elegir cualquier cancion de esta lista y agregarla a la Playlist con el comando 'agregar' + 'el nombre de tu artista' seguido por el 'nombre de la Cancion'***")
            console.log(" ")
            console.log("No dejes de agregar tus canciones favoritas! ♥")
        break

    case "filtrar": 
        
        let generoAFiltrar = process.argv[3];
        

        let generoFiltrado = moduloTareas.filtrarJSON(generoAFiltrar);

        console.log(" ");
        console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°");                   
        console.log("Recomendaos las siguientes canciones para el genero elegido: ")
        console.log(" ");       
        console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°");     
        console.log(" ");
        
        generoFiltrado.forEach( musica => console.log (musica.Genero + "----> " + musica.Artista + " - " + musica.Cancion + "!")
        ); 
        console.log("____________________________");

        break

        case "cambiar":
            let Cancion= process.argv[3];
            if (Cancion==undefined){
                console.log("-----------------------------------------------------------");
                console.log("Recuerda que para identicar el artista y la canción para asignarle el nuevo genero debes poner el nombre de la cancion + el nuevo genero a asiganer (:");
                console.log("-----------------------------------------------------------");
                break
            }
            let cambio=process.argv[4]
            if (cambio==undefined){
                console.log("-----------------------------------------------------------");
                console.log("Recuerda que si queres cambiar el genero de una linea de la lista deber agregar el que creas correcto luego de la cancion!");
                console.log("-----------------------------------------------------------");
                break
            }
            moduloTareas.CambiarGenero(Cancion, cambio);
                console.log("-----------------------------------------------------------");
                console.log("Genero Actualizado, ejecute listar para chequear!")
                console.log(" ");
                console.log("-----------------------------------------------------------");
        break 

   case 'agregar':  
          
        let nuevoArtista = process.argv[3];
        let nuevaCancion = process.argv[4];
            
        if (nuevoArtista==undefined){
            console.log("-----------------------------------------------------------");
            console.log("Recuerda que primero es el 'Artista' y luego la 'Cancion'! ");
            console.log("-----------------------------------------------------------");
            }else if (nuevaCancion==undefined){
            console.log("-----------------------------------------------------------")
            console.log("Recuerda que primero es el 'Artista' y luego la 'Cancion'! ")
            console.log("-----------------------------------------------------------")
            break}    
            moduloTareas.escribirJSON(nuevoArtista, nuevaCancion);
           
            console.log("-----------------------------------------------------------")
            console.log(" ")
            console.log("cancion agregada: "+nuevoArtista + ", " + nuevaCancion);
            console.log(" ")        
            console.log("-----------------------------------------------------------")
           break
    
    case "playlist":
    
        console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°");                              
        console.log("**** ¡A S I    V A    Q U E D A N D O   T U   P L A Y L I S T ! ****");    
        console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°");   
             
     
    for(let i=0; i < playlist.length; i++){
            console.log("------------------------------ "); 
            console.log ([i]+'.   ' + "**" + playlist[i].Artista + "**");
            console.log('              ' + playlist[i].Cancion+'');
            
           }  
         console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°");                   
         console.log("Acordate que podes agregar canciones que no esten listadas ni te hayamos sugerido!")
         console.log(" ");       
         console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°");       
           break

    case undefined:
            console.log(" ")
            console.log("///////////////////////////////////////////////////////////////////////")
            console.log(" ")
            console.log("L I S T A    D E    C O M A N D O S : ");
            console.log(" ")
            console.log("-LISTAR: Queres saber que es lo mas escuchado del mundo mundial?! tipea LISTAR!")
            console.log(" ")
            console.log("-FILTRAR: Queres ver nuestras recomendaciones para un genero especifico?! tipea FILTRAR + TU GENERO FAVORITO! (ej: filtrar Metal) ")
            console.log(" ")
            console.log("-CAMBIAR: Hay una canción con un genero mal asignado?! Podes corregirlo tipeando cambiar + 'la cancion' + 'el nuevo genero'!")
            console.log(" ")
            console.log("-AGREGAR + 'artista' + 'nombre de su cancion': Agregar una cancion a tu playlist.")
            console.log(" ");  
            console.log("  Te aconsejamos que para una mejor organizacion siempr pongas el artista primero!")
            console.log(" ")
            console.log("-PLAYLIST: podes matar las ansias y ver como esta quedando tu playlist!")
            console.log(" ")
            console.log("Gracias por elegir Prehispofity, algun dia nos modernizaremos ♥.")
            console.log(" ");  
            console.log("///////////////////////////////////////////////////////////////////////")
            const readlineSync = require('readline-sync'),
            operaciones = comando
            index = readlineSync.keyInSelect(comando, 'Que quiere hacer?');
        
        let datos = readlineSync.question(`Ingrese los numeros a ${comando[index]}: `);
        
        break;

    default:
       

        console.log(" ");  
            console.log("///////////////////////////////////////////////////////////////////////")
            console.log(" ");  
            console.log("Vuelva a escribir 'node app.js para listar comandos! ");
            console.log("No hace falta que escriba los comando en mayusculas :D! ");  
            console.log(" ");  
            console.log("///////////////////////////////////////////////////////////////////////")
        break
       
    }
