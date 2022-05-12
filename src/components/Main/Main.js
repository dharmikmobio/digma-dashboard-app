import React from 'react'
import styled from 'styled-components'
import Nav from './Nav.js'
import NewDepositBtn from './NewDepositBtn.js'


const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`


const Main = () => {
    return (
        <Container>
            <Nav />
            <NewDepositBtn />
        </Container>
    )
}

export default Main
