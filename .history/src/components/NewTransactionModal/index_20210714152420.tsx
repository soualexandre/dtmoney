import Modal from 'react-modal'
import { Container } from './styles'
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <Container>
                <h2>Cadastrar Transação</h2>
            <input placeholder="Titulo"/>


            <input 
            type="Number"
            placeholder="Valor"
            
            />


            </Container>

        </Modal>
    );
}