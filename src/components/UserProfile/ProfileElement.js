import styled from "styled-components";

export const ProfileWrap = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    padding: 10px;
    background-color: #3100FF;
    color: #CEFF00;
`;
export const Dp = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    margin-left: 20px;
   img{
    border-radius: 30px;
   }
`;
export const Name = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    margin-left: 5px;
    font-size: 20px;
    font-style: italic;
`;