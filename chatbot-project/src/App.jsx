import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import { NavBar } from './components/Nav';
import './App.css'

function App() {
    const [chatMessages, setChatMessages] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const GEMINI_API_URL = "https://script.google.com/macros/s/AKfycbwcdqB_CJAcgUQ7THHPiUnHbKrcd_vLa1FiWxL4tTc6emVcv4pmEyg56B9opxUYsh8c/exec";

    const clear = () => {
        setChatMessages([]);
    };


    const toggle = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
            <NavBar
                clear={clear}
                toggle={toggle}
            />
            <ChatMessages
                chatMessages={chatMessages}
            />
            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
                GEMINI_API_URL={GEMINI_API_URL}
            />

        </div>
    );
}

export default App
