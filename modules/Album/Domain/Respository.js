/**
 * 
 * Esta clase funciona a modo de contrato o interface para la capa de infraestructura
 * 
 */

class AlbumRepository {
    list () {
        console.log('Debe implementar como listar albums')
    }

    create(data) {
        console.log('Debe implementar como crear un album')
    }

    retrieve(id) {
        console.log('Debe implementar como obtener un album')
    }

    delete(id) {
        console.log('Debe implementar como eliminar un album')
    }


}

module.exports = AlbumRepository