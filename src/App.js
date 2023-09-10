//Dependeces
import React, { useState, } from "react";
import './App.css';
//IMG´s
import MoreVertIcon from './assets/MoreVertIcon.png';
import ChatIcon from './assets/Chat.png';
import DonutLargeIcon from './assets/DonutLargeIcon.png';
import SearchIcon from './assets/Search.png';
//Components
import { ChatList } from "./components/ChatList";
import ChatIntro from "./components/ChatIntro/ChatIntro";
import { ChatWindow } from "./components/ChatWindow/ChatWindow";
import { NewChat } from "./components/NewChat/NewChat";
import { Login } from "./components/FireBase/Login";

function App() {

  
  const [chatlist, setChatlist] = useState([
    {chatId: 1, title:'Fulano de Tal', image: "https://www.w3schools.com/howto/img_avatar2.png"},
    {chatId: 2, title:'Fulano de Tal', image: "https://www.w3schools.com/howto/img_avatar2.png"},
    {chatId: 3, title:'Fulano de Tal', image: "https://www.w3schools.com/howto/img_avatar2.png"},
    {chatId: 4, title:'Fulano de Tal', image: "https://www.w3schools.com/howto/img_avatar2.png"},
  ]);
  const [activeChat, setActiveChat ] = useState({});
  const [user, setUser] = useState(null);
  const [showNewChat, setShowNewChat] = useState(false);
  const handleNewChat = () => {
    setShowNewChat(true);
  }
  const handleLoginData = () => {
      if(user === null) {
        return<Login/>
      }
    
  };
  return (
    <div className="App-window">
      <div className="sidebar">
        <NewChat 
            chatlist={chatlist}
            user={user}
            show={showNewChat}
            
            setShow={setShowNewChat}
        />
      
        <header>
          <img className="header--avatar" src={user.avatar} alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <img src={DonutLargeIcon} alt="" />
            </div>
            <div onClick={handleNewChat} className="header--btn">
              <img src={ChatIcon} alt="" />
            </div>
            <div className="header--btn">
              <img src={MoreVertIcon} alt="" />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <img src={SearchIcon} alt="" />
            <input type="search" placeholder="Procurar ou começar uma conversa" />
          </div>
        </div>

        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatList
            key={key}
            data={item}
            active={activeChat.chatId === chatlist[key].chatId}
            onClick={()=>setActiveChat(chatlist[key])}
            />
          ))}
        </div>

      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
          <ChatWindow
              user={user}
          />
        }
        {activeChat.chatId === undefined &&
           <ChatIntro />
        }
      </div>
    </div>
  );
}
export default App;