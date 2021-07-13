import {Container} from './styles'
import iconImg from '../../assets/income.svg'
export function Sumary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconImg} alt="" />
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
    );
}