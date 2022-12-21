import React from 'react'
import { useState } from 'react'
import FormToDo from '../FormToDo/FormToDo'
import Tarjetas from '../Tarjetas/Tarjetas'
import './Todo.css'


export default function EjericioTodo() {
  const [actividad, setActividad] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [listActividades, setListActividades] = useState([])
  return (
    <div>


      <div className="row">
        <div className="col-xl">
          <br />
          <br />
          <br />
          <FormToDo
            actividad={actividad}
            setActividad={setActividad}
            descripcion={descripcion}
            setDescripcion={setDescripcion}
            listActividades={listActividades}
            setListActividades={setListActividades}

          />
        </div>
        <div className="col-xl">
          <Tarjetas
            listActividades={listActividades}
            setListActividades={setListActividades}
          />
        </div>
      </div>
    </div>


  )
}
