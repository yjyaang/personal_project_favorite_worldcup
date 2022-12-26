import React from 'react'
// import styled from "styled-components"
import { FlexBox } from './Style';
import Video1 from '../../video/Video1';
import Video2 from '../../video/Video2';

const Main = () => {
    return (
        <FlexBox>
            <div className="flex-1">
                <div>A</div>
                <Video1 />
            </div>
            <div className="flex-1">
                <div>B</div>
                <Video2 />
            </div>
        </FlexBox>
    )
}

export default Main