import { Sumary } from "../Sumary";
import { TransactionsTable } from "../transactionsTable";
import { Container } from "./styles";


export function Dashboard(){
    return(
       <Container>
          <Sumary/>
          <TransactionsTable/>
       </Container>
    );
}