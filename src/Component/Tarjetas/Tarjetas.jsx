import React from 'react'
import { useState } from 'react';


export default function Tarjetas({
    listActividades,
    setListActividades
}) {

    const [borrarAct, setBorrarAct] = useState(false)
    var today = new Date();
    const borrar = (id) => {
        if (borrarAct === false) {
            setBorrarAct(true);
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    setListActividades(listActividades.filter((actividad) => {
                        return actividad.id !== id
                    }))
                }
            })
        } else {
            setBorrarAct(false);
        }
    };



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
                        <b htmlFor="">Fecha y hora actual</b>
                        {today.toLocaleString()}
                        <button type='button' className="btn btn-danger" onClick={() => borrar(actividad.id)}>
                            Borrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
