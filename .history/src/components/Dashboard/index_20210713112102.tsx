import { Sumary } from "../Sumary";
import { Container } from "./styles";


export function Dashboard(){
    return(
       <Container>
          <Sumary/>
          <TransactionsTable/>
       </Container>
    );
}