import Modal from 'react-modal'


export function NewTransactionModal(){
   return(
    <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={hadleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
   ); 
}