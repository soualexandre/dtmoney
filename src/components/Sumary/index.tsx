import {Container} from './styles'
import iconImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
export function Sumary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconImg} alt=" icon" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img src={outcomeImg} alt="out icon" />
                </header>
                <strong>R$500,00</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total icon" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}