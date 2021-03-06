const MyMessage = ({message}) =>{
    console.log(message)
    if(message?.attachments?.length > 0){
        return(
            <img src={message.attachments[0].file} 
            alt='message-attachment' 
            className='message-image' 
            style={{float:'right'}}/>
        )
    }
    return(
        <div className='message' style={{float:'right',marginRight:'18px', color:'#184E77', fontWeight:'bold', backgroundColor:'#52B69A'}}>
            <h6>{message.sender.username}</h6>
            {message.text}
        </div>
    )
}

export default MyMessage;