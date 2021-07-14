import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
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
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button">
            <img src={closeImg} alt="fechar" />
            </button>

            <Container>
                <h2>Cadastrar Transação</h2>
                <input placeholder="Titulo" />


                <input
                    type="Number"
                    placeholder="Valor"
                />

                <input placeholder="Categoria" />
                <button type="submit">
                    Cadastrar
                </button>


            </Container>

        </Modal>
    );
}