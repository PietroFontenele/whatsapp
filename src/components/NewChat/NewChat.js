import './NewChat.css';
import { useState } from 'react'
import ArrowBack from '../../assets/ArrowBack.png';

export const NewChat = ({use, chatlist, show, setShow}) => {
    const [list, setList] = useState([
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Pietro Dos Santos Fontenele'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Pietro Dos Santos Fontenele'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Pietro Dos Santos Fontenele'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Pietro Dos Santos Fontenele'},
    ])
    const handleClose = () => setShow(false)
    return(
        <div className="newChat" style={{left: show?0:-460}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backButton">
                    <img src={ArrowBack} alt=''/>
                </div>
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" >
                        <img className='newChat--itemavatar' src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>            
        </div>
    )
}