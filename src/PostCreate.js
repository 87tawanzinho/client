import axios from 'axios'
import React, { useState } from 'react'
 
export default () => {
    const [title, setTitle] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault()
    
       const result =  await axios.post('http://localhost:4000/posts', {
            title
        })
        console.log(result)
        setTitle('')

    }


    return <div>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label>Title</label>
                <input className='form-control' value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
}