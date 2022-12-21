import React from 'react'

export default function Tarjetas({
    listActividades,
    setListActividades
}) {

    const borrar = (id) => {
        setListActividades(listActividades.filter((actividad) => {
            return actividad.id !== id
        }))
    }
    return (

        <div>
            <h2 className='titulo'>Listado de actividades</h2>
            {listActividades.map((actividad) =>
                <div key={actividad.id}>
                    <div className="card card-tarjeta">
                        <b htmlFor="">Actividad</b>
                        {actividad.actividad}
                        <br />
                        <b htmlFor="">Descripción</b>
                        {actividad.descripcion}
                        <button type='button' className="btn btn-danger" onClick={() => borrar(actividad.id)}>
                            Borrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
