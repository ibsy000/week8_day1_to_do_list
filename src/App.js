import { useState } from 'react'
import Card from './components/Card'
import Navbar from "./components/Navbar"

function App(props){
    
    const divStyle = {
        width: '25rem'
    }

    const submitStyle ={
        backgroundColor: '#ef476f'
    }

    const fontStyle = {
        fontFamily: 'Splash, cursive'
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
        <> {/* react fragment*/}
            <Navbar />
            <h1 className="text-center my-3 text-light display-1" style={fontStyle}>Don't Forget...</h1>
            <div className='container'>

                <div className='row'>
                <form className='form-group' onSubmit = {handleTodoClick}>
                    <input type='text' className='form-control' name='listItem' placeholder='What did I need to do..?' />
                    <input type='submit' className='btn w-100 my-3 bg-gradient' style={submitStyle} value='Add Item' />
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