import React, { useEffect, useState, useContext } from 'react'
import { addDoc, collection, query, limit, onSnapshot, serverTimestamp, orderBy, startAfter } from "firebase/firestore";
import db from '../../firebase'
import { userContext } from '../../UserContext';
import { SndMsg, Form, Button, LogoutWrapp, Header, ChatRoom, Chats, TextWrap, Text } from './ChatboxElem'
import { AiOutlineSend } from 'react-icons/ai';
function Chatbox() {
    const { userData } = useContext(userContext)
    const [messages, setMessages] = useState('')
    const [chat, setChat] = useState([])
    const currentUid = userData.uid
    //Add
    const handleAdd = () => {
        try {
            const promise = async () => {
                const docRef = await addDoc(collection(db, "msg"), {
                    text: messages,
                    uid: userData.uid,
                    createdAt: serverTimestamp(),
                    pPhoto: userData.photoURL
                });
                console.log("Document written with ID: ", docRef.id);
            }
            promise();
            setMessages('')

        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
    //onPress Enter

    //Read
    useEffect(() => {
        const promise = async () => {
            const q = query(collection(db, "msg"), orderBy("createdAt"), limit());
            onSnapshot(q, (querySnapshot) => {
                const text = [];
                querySnapshot.forEach((doc) => {
                    text.push(doc.data());


                });
                setChat(text)
                if (userData.uid === chat.uid)
                    console.log("xhatsbihvuds", chat)
                console.log("uid chat", userData)
                scrollToBottom();

            });
        }
        promise();
        const scrollToBottom = () => {
            var div = document.getElementById("chats");
            div.scrollTop = div.scrollHeight - div.clientHeight;
        }
    }, [])
    return (
        <ChatRoom >
            <Chats id="chats" >
                {chat.map((item) => {
                    return (
                        <TextWrap sender={currentUid === item.uid ? true : false} >
                                <h1> {item.text} </h1>
                               <img src={item.pPhoto} />
                        </TextWrap>
                    )
                })}
            </Chats>
            <SndMsg>
                <Form  >
                    <input type="text" placeholder="Msg..." value={messages} onChange={(e) => setMessages(e.target.value)} />
                </Form>
                <Button onClick={handleAdd} ><AiOutlineSend /></Button>
            </SndMsg>
        </ChatRoom >
    )
}

export default Chatbox
