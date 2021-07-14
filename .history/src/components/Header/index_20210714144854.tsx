import LogoImg from '../../assets/logo.svg'
import {Container, Content} from './styles'
import {useState} from 'react'

export function Header(){

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function hadleOpenNewTransactionModal(){
        
    }
    function hadleCloseNewTransactionModal(){
        
    }

    return(
        <Container>
            <Content>
            <img src={LogoImg} alt="dtMoney" />
            <button type="button">
                Nova tranasação
            </button>
            </Content>
        </Container>
    );
}