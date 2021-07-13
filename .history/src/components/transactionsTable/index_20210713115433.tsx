import { Container } from "./styles";


export function TransactionsTable() {
    return(
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Ttulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Desenvolvimento de Sistemas</td>
                    <td className="seposit">R$12.000</td>
                    <td>Desenvolvimento</td>
                    <td>20/02/2021</td>
                </tr>
                <tr>
                    <td>Aluguél</td>
                    <td className="withdraw">R$12.000</td>
                    <td>Desenvolvimento</td>
                    <td>20/02/2021</td>
                </tr>
                
            </tbody>
        </table>
    </Container>
    );
}