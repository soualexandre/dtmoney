import LogoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import { useState } from 'react'
import Modal from 'react-modal';

export function Header() {


    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="dtMoney" />
                <button type="button" onClick={hadleOpenNewTransactionModal}>
                    Nova tranasação
                </button>
            </Content>
        </Container>
    );
}