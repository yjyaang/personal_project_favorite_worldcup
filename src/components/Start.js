import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const Start = () => {
    return (
        <MainContainer>
            <div>카트라이더 리그 명장면 월드컵</div>
            <Link to="/main"><button>Start</button></Link>
        </MainContainer>
    )
}

export default Start