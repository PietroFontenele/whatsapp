import './ChatList.css'

export const ChatList = ({ onClick, active, data }) => {
    return (
        <div
            className={`chatList ${active? 'active':''}`}
            onClick={onClick}>
            <div className='chatListItem'>
                <img className='chatListItem--avatar' src={data.image} alt="" />
                <div className='chatListItem--lines'>
                    <div className='chatListItem--line'>
                        <div className='chatListItem--name'>{data.title}</div>
                        <div className='chatListItem--date'>19:00</div>
                    </div>
                    <div className='chatListItem--line'>
                        <div className='chatListItem--lastMsg'>
                            <p>Casada?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}