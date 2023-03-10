import React from 'react'


export default function FormToDo({
    actividad,
    setActividad,
    descripcion,
    setDescripcion,
    listActividades,
    setListActividades
}) {

    const guardar = (e) => {
        setListActividades([...listActividades, {
            id: Math.random() * 100,
            actividad: actividad,
            descripcion: descripcion
        }])
        setActividad(e.target.value)
        setDescripcion(e.target.value)

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Se a agregado un actividad correctamente'
          })
    
      
    }

    

    return (
        <div >
            <div className="card">
                <div className="mb-3">
                    <label htmlFor="actividad" className="form-label">Actividad</label>
                    <input type="text" value={actividad} className="form-control" id="actividad" onChange={(e) => setActividad(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <textarea className="form-control" value={descripcion} id="descripcion" rows="3" onChange={(e) => setDescripcion(e.target.value)}></textarea>
                </div>
                <button type='button' className="btn btn-success" onClick={guardar}>Guardar</button>
            </div>


        </div>
    )
}
