import styled from "styled-components";
export const ChatRoom = styled.div`
    display: flex;
    flex-direction: column;
    background: #2d2e30;
    height: 100%;
    width: 100%;
    
`;
export const Chats = styled.div`
    display: flex;
    flex-direction: column;
    background: #2d2e30;
    top: 0;
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;
    
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 210px;
    background: #e8eaed;
`;

export const SndMsg = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    background: #27282b;
`;
export const Form = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 50px;
    input{
        margin-left: 30px;
        width: 80%;
        height: 70%;
        border-style: none;
        border-radius: 50px;
        font-size: 20px;
    }
`;
export const Button = styled.div`
    color: #fff;
    width: 50px;
    height:40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    margin-right: 10%;
`;
export const LogoutWrapp = styled.div`
    position: absolute;
    right: 1rem;
`;
export const TextWrap = styled.div`
    display: flex;
    flex-direction: ${({ sender }) => (sender ? '' : 'row-reverse')};
    justify-content: ${({ sender }) => (sender ? 'end' : 'start')};
    align-items: center;
    h1{
        display: flex;
        align-items: center;
        margin-right: 10px;
        margin-left: 10px;
        background: ${({ sender }) => (sender ? '#ffffff' : '#ffffff')} ;
        border-radius: 30px;
        min-width: 40px;
        padding: 10px;
        height: 30px;
        margin-top: 20px;
    }
    img{
        border-radius: 50px;
        height: 30px;
    }
`;

