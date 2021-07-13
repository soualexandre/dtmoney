import LogoImg from '../../assets/logo.svg'
import {Container} from './styles'

export function Header(){
    return(
        <Container>
            <img src={LogoImg} alt="dtMoney" />
            <button type="button">
                Nova tranasação
            </button>
        </Container>
    );
}