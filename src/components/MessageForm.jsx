import {useState} from 'react';

const MessageForm = () =>{
   const _handleSubmit = () =>{

    }
  const  _handleChange = () =>{

    }
    const [value,setValue] = useState('')
    return(
        <div>
            <form className='message-form' onSubmit={_handleSubmit}> 
                <input className='message-input' placeholder='Send a message...' value={value} onChange={_handleChange} onSubmit={_handleSubmit}></input>
            </form>
        </div>
    )
}

export default MessageForm;