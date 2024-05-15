import useModalContext from "../../contexts/useModalContext";
import ModalContent from "./ModalContent";

function PortfolioModal() {
  const { openModal } = useModalContext();

  return openModal && <ModalContent />;
}

export default PortfolioModal;
