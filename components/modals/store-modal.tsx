"user client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "../ui/modal"

export const StoreModal = () => {
    const storeModal = useStoreModal();
    return (
        <Modal
            title="Criar loja"
            description="Adicione uma nova loja para gerenciar produtos e categorias"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onCLose}
        >
            Criar formulario da loja
        </Modal>
    )
}