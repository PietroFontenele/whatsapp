import './ChatIntro.css';
import IntroConnection from '../../assets/intro-connection-light.jpg';

const ChatIntro = () => {
    return (
        <div className='chatIntro'>
            <img src={IntroConnection} alt="" />
            <h1>Mantenha seu celular conectado</h1>
            <h2>O Whatsapp conecta ao seu telefone para sincroneasdasdsar suas mensagens.<br/>Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-fi.</h2>
        </div>
    )
}
export default ChatIntro