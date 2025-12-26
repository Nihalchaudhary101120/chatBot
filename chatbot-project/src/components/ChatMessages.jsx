import {useRef,useEffect} from 'react'
import {ChatMessage} from './ChatMessage'


export function ChatMessages({chatMessages}) {
           
           // const chatMessages = array[0];   //const [chatMessages, setChatMessages] = React.useState([]);
                                      
          //  const setChatMessages = array[1];  // same as above 
            const chatMessagesRef = useRef(null); // save the components


            useEffect(()=>{   // its a hook show changed  
             const containerElem = chatMessagesRef.current;
             if(containerElem){
                containerElem.scrollTop=containerElem.scrollHeight;
             }
            },
            [chatMessages]  // dependencies
            );


            return (
                <div className="chat-messages-container"
                ref={chatMessagesRef}
                >
                    
                    {chatMessages.map((chatMessage) => {
                        return (
                            <ChatMessage
                                message={chatMessage.message}
                                sender={chatMessage.sender}
                                key={chatMessage.id}
                            />
                        );

                    })}
                </div>
            ); 
        }
 