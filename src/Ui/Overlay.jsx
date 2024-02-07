import useMenuContext from "../contexts/useMenuContext";

function Overlay() {
  const { onCloseMenu } = useMenuContext();
  return (
    <div onClick={onCloseMenu} className=" fixed bottom-0 left-0 top-0 w-full opacity-[0.9] bg-[#1d1b19]"></div>
  );
}

export default Overlay;
