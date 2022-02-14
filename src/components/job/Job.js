import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'


const StyleTitle = styled.h3`
color: hsl(180, 29%, 50%)`

const StyleDiv = styled.div`
display: inline-block;
padding: 20px`

const StyleImg = styled.img`
width: 220px`

const StyleParr = styled.p`
color: gray;
font-size: x-large`

const StyleFilt = styled.p`
color: hsl(180, 29%, 50%) ;
background-color: hsl(180, 52%, 96%);
font-weight: 500;
`

const StyleDiv2 = styled.div`
float: right;
padding: 100px 60px
`

const Job = (props) => {


    return (
        <Card style = {{margin:'0px 0px 50px 0px'}} >
    <Card.Body>
        <StyleDiv>
            <StyleImg src={props.img} alt="logo" />
        </StyleDiv>
        <StyleDiv>
            <StyleTitle>{props.empresa}</StyleTitle>
            <h2>{props.cargo}</h2>
            <StyleParr>{props.publicacion} • {props.tiempo} • {props.ubicacion} </StyleParr>

        </StyleDiv>
        <StyleDiv2>
            <StyleFilt> {props.filtros} </StyleFilt>
        </StyleDiv2>


    </Card.Body>
        </Card >
    )
}

export default Job