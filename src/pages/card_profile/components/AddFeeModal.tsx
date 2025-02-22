import CloseIcon from "../../../assets/icons/close.svg?react";
import BoxedPlusIcon from "../../../assets/icons/boxed_plus.svg?react";
import AddFeeForm from "./AddFeeForm";

interface AddFeeModalProps {
  onClose: () => void;
}

export default function AddFeeModal({ onClose }: AddFeeModalProps) {
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="m-auto my-7 h-fit w-full rounded-[10px] bg-white p-6 sm:my-[128px] sm:w-fit"
      onClick={handleModalClick}>
      <div className="flex w-full items-center gap-4 border-b border-[#EAECF0] pb-[21px]">
        <div className="rounded-[10px] border border-[#EAECF0] bg-white p-3 shadow-[0px_1px_2px_#10182805]">
          <BoxedPlusIcon />
        </div>

        <div className="flex w-full items-start gap-1">
          <div className="w-full">
            <h2 className="font-satoshi text-lg leading-7 font-bold text-[#101828]">
              Add Fee
            </h2>
            <p className="font-satoshi text-sm leading-5 text-[#475467]">
              Fill in fee details.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer"
            aria-label="Close modal">
            <CloseIcon
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      <AddFeeForm />

      <div className="border-t border-[#EAECF0] pt-6">
        <button
          type="button"
          className="fee-btn-primary button-default w-full">
          Add Fee
        </button>
      </div>
    </div>
  );
}
