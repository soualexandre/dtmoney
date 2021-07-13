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
            </div>
        </Container>
    );
}