import type { PropsWithChildren, ComponentProps } from "react";
import ReactModal from "react-modal";

type Props = Omit<
  ComponentProps<typeof ReactModal>,
  "closeTimeoutMS" | "isOpen" | "onRequestClose"
> & { visible: boolean; onClose?: () => void };

export default function Modal({
  children,
  className,
  visible,
  onClose,
}: PropsWithChildren<Props>) {
  return (
    <ReactModal
      className={`${
        className || ""
      } max-w-full bg-white rounded shadow-2xl md:max-w-lg w-full p-4`}
      overlayClassName="z-50 fixed bg-black bg-opacity-50 inset-0 flex items-center justify-center"
      closeTimeoutMS={300}
      onRequestClose={onClose}
      isOpen={visible}
    >
      {children}
    </ReactModal>
  );
}
