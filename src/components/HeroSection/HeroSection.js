import React, { useContext, useEffect } from 'react'
import { userContext } from '../../UserContext'
import { getAuth } from "firebase/auth";
import Chatbox from '../Chatbox/Chatbox'
import { HeroWrap,  Chats } from './HeroSectionElement'
import Profile from '../UserProfile/Profile';

const HeroSection = () => {
    const { userData } = useContext(userContext)

    return (
        <HeroWrap>
            <Profile />
            <Chats>
                <Chatbox />
            </Chats>
        </HeroWrap>
    )
}

export default HeroSection
