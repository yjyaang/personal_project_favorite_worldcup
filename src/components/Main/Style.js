import styled from "styled-components";

export const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 90vh;

    .flex-1 {
        flex: 1;
    }
`

export const SelectArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SelectBtn = styled.button`
    width: 200px;
    height: 50px;
    margin: 20px;
`