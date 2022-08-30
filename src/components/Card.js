import React from 'react'

export default function Card(props) {
    const divStyle = {
        width: '25rem'
    }

    return (
        // <div className='row justify-content-center'>
        //     <div className="card" style={divStyle}>

        //         <ul className="list-group list-group-flush">

                    <li className="list-group-item">
                        <input className="form-check-input me-4" type="checkbox" 
                            value="" id="checkbox" />
                        <label className="form-check-label" htmlFor="checkbox" onClick={() => 
                            props.handleTodoClick(props.toDoItem)}>{props.toDoItem}
                        </label>
                    </li> 

        //         </ul>
                
        //     </div>
        // </div>
    )
}

