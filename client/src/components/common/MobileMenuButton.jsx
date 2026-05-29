import { FiMenu } from "react-icons/fi";

function MobileMenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden text-3xl text-white"
    >
      <FiMenu />
    </button>
  );
}

export default MobileMenuButton;