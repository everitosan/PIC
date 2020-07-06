/**
 * 
 * Esta clase funciona a modo de contrato o interface para la capa de infraestructura
 * 
 */

class PicRepository {
    create() {
        console.log('Debe implementar como crear un pic')
    }

    retrieve() {
        console.log('Debe implementar como obtener un pic')
    }

    delete() {
        console.log('Debe implementar como eliminar un pic')
    }


}

module.exports = PicRepository