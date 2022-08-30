import { useState } from 'react'
import Card from './components/Card'
import Navbar from "./components/Navbar"

function App(props){
    
    const divStyle = {
        width: '25rem'
    }

    const [items, setItems] = useState([])

    function handleTodoClick(event){
        event.preventDefault()
        const item = event.target.listItem.value
        let newItems = [...items, item]
        setItems(newItems)
        event.target.listItem.value = ''
    }

    return (
        <>
            <Navbar />
            <h1 className="text-center mt-3">Don't Forget...</h1>
            <div className='container'>

                <div className='row'>
                <form onSubmit = {handleTodoClick}>
                    <input type='text' className='form-control' name='listItem' placeholder='What did I need to do..?' />
                    <input type='submit' className='btn btn-warning w-100 my-3' value='Add Item' />
                </form>
                </div>

                <div className='row justify-content-center'>
                    <div className="card" style={divStyle}>

                    <ul className="list-group list-group-flush">
                        {items.map((itm, idx) => <Card toDoItem={itm} key={idx} handleTodoClick={handleTodoClick}/>)}
                    </ul>

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default App