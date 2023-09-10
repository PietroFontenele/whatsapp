import './ChatWindow.css';
import { useEffect, useState, useRef } from 'react';
import { MessageItem } from '../MessageItem/MessageItem';
import SearchIcon from '../../assets/Search.png';
import AttachFile from '../../assets/AttachFile.png';
import MoreVertIcon from '../../assets/MoreVertIcon.png';
import SendIcon from '../../assets/Send.png';
import MicIcon from '../../assets/Mic.png';


export const ChatWindow = ({user}) => {
    const body =useRef();

    const [text, setText] = useState('');
    const [list, setList] = useState([
        {author:123, body:'bla bla bla'},
        {author: 123, body:'bla bla'},
        {author: 1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author: 123, body:'bla bla'},
        {author: 1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author: 123, body:'bla bla'},
        {author: 1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author: 123, body:'bla bla'},
        {author: 1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author: 123, body:'bla bla'},
        {author: 1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author: 123, body:'bla bla'},
        {author: 1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author: 123, body:'bla bla'},
        {author: 1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author: 123, body:'bla bla'},
        {author: 1234, body:'bla bla bla bla'}
    ]);

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list])
    
    const handleSendClick =()=>{}

    return (
        <div className='chatWindow'>
            <div className='chatWindow--header'>
                <div className='chatWindow--headerinfo'>
                    <img className='chatWindow--avatar' src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                    <div className='chatWindow--name'>Pietro Dos Santos Fontenele</div>
                </div>

                <div className='chatWindow--headerButtons'>

                    <div className='chatWindow--btn'>
                        <img src={SearchIcon} alt="" />
                    </div>

                    <div className='chatWindow--btn'>
                        <img src={AttachFile} alt="" />
                    </div>


                    <div className='chatWindow--btn'>
                        <img src={MoreVertIcon} alt="" />
                    </div>


                </div>
            </div>
            <div ref={body} className='chatWindow--body'>
                {list.map((item, key) =>(
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>
            <div className='chatWindow--footer'>

                <div className='chatWindow--inputArea'>
                    <input 
                    className='chatWindow--input'
                     type="text"
                     placeholder='Mensagem'
                     value={text}
                     onChange={e=>setText(e.target.value)}

                    />
                </div>

                <div className='chatWindow--pos'>
                    {text === "" && 
                <div  className='chatWindow--btn'>
                        <img src={MicIcon} alt="" />
                    </div>
                    }
                    {text !== "" &&
                    <div onClick={handleSendClick} className='chatWindow--btn'>
                        <img src={SendIcon} alt="" />
                    </div>
                    }
                </div>

            </div>
        </div>
    )
}