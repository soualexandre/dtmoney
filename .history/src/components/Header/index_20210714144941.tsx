import LogoImg from '../../assets/logo.svg'
import {Container, Content} from './styles'
import {useState} from 'react'

export function Header(){

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function hadleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }
    function hadleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }

    return(
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