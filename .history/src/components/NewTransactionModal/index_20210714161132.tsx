import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { Container, TransactionsTypeContainer } from './styles'
import IconImg  from '../../assets/income.svg' 
import outcomeImg  from '../../assets/outcomeImg.svg' 
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
            type="button"
            onClick={onRequestClose}
            className="react-modal-close">
            <img src={closeImg} alt="fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar Transação</h2>
                <input placeholder="Titulo" />


                <input
                    type="Number"
                    placeholder="Valor"
                />

                <TransactionsTypeContainer>
                    <button
                    type="button"
                    ></button>
                </TransactionsTypeContainer>


                <input placeholder="Categoria" />
                <button type="submit">
                    Cadastrar
                </button>


            </Container>

        </Modal>
    );
}