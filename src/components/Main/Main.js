import React, { useState, useEffect } from 'react'
// import styled from "styled-components"
import { FlexBox, SelectArea, SelectBtn } from './Style';
import Video1 from '../../video/Video1';
import Video2 from '../../video/Video2';
import Video3 from '../../video/Video3';
import Video4 from '../../video/Video4';

const items = [
    {
        name: '에볼루션 결승 에결 문호준vs유영혁',
        src: <Video1 />
    },
    {
        name: '2022 시즌 2 플레이오프 에결 유창현vs노준현',
        src: <Video2 />
    },
    {
        name: '2020 시즌 1 개인전 결승 SET 1 문호준',
        src: <Video3 />
    },
    {
        name: '2019 시즌 1 개인전 결승 문호준vs박인수',
        src: <Video4 />
    }
]

const Main = () => {
    const [clips, setClips] = useState([]);
    const [displays, setDisplays] = useState([]);
    useEffect(() => {
        items.sort(() => Math.random() - 0.5);
        setClips(items);
        setDisplays([items[0], items[1]]);
        console.log(items);
    }, [])

    return (
        <FlexBox>
            {displays.map(item => {
                return (
                <SelectArea className="flex-1" key={item.name}>
                    {item.src}
                    <SelectBtn>{item.name}</SelectBtn>
                </SelectArea>
                )
            })}
            {/* <SelectArea className="flex-1">
                <SelectBtn>A</SelectBtn>
                <Video1 />
            </SelectArea>
            <SelectArea className="flex-1">
                <SelectBtn>B</SelectBtn>
                <Video2 />
            </SelectArea> */}
        </FlexBox>
    )
}

export default Main