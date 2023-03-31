import React, { useReducer, useState } from 'react';


export default function Hook1() {

    const ACTIONS = {
        ADDTODO: 'add to do'
    }

    const newToDo = (name) => {
        return { date: Date.now(), name: name }
    }

    const reducer = (toDos, action) => {
        switch (action.type) {
            case ACTIONS.ADDTODO:
                return [...toDos, newToDo(action.payload.name)]
            default:
                return toDos
        }
    }

    const [toDos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADDTODO, payload: { name: name } })
    }

    console.log(toDos)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className='rounded-lg border-sky-400'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
        </div>
    );
}