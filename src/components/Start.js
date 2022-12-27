import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';

const StartContainer = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const StartTitle = styled.div`
    font-size: 48px;
`

const StartBtn = styled.button`
    width: 200px;
    height: 50px;
    font-size: 20px;
`

const Start = () => {
    return (
        <StartContainer>
            <StartTitle>카트라이더 리그 명장면 월드컵</StartTitle>
            <div>당신이 생각하는 최고의 명장면에 투표해 주세요!!</div>
            <Link to="/main"><StartBtn>Start</StartBtn></Link>
        </StartContainer>
    )
}

export default Start