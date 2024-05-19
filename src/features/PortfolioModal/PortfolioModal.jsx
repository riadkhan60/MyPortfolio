import useModalContext from "../../contexts/PortfolioModalContext/useModalContext";
import ModalContent from "./ModalContent";

function PortfolioModal() {
  const { openModal } = useModalContext();

  return openModal && <ModalContent />;
}

export default PortfolioModal;
