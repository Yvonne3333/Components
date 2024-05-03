import { Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  body?: React.ReactElement;
  title?: string;
  setModal: Dispatch<SetStateAction<boolean>>;
  onSubmit: () => void;
  onGoBack?: () => void;
  disabled?: boolean;
  loading?: boolean;
  btnText?: string;
  btnText2?: string;
}

const Modal: React.FC<ModalProps> = ({
  body,
  title,
  setModal,
  onSubmit,
  disabled,
  loading,
  btnText,
  btnText2,
  onGoBack,
}) => {
  const handleCloseModal = () => {
    setModal(false);
    document.body.style.overflowY = "auto";
    if (onGoBack) {
      onGoBack();
    }
  };
  return (
    <div
      className="
          fixed
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          inset-0 
          w-full
          h-full
          z-[100]
          modal
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        "
    >
      <div className="w-full h-full">
        <div
          className={`
          relative
          w-[90%]
          md:w-4/6
          lg:w-4/6
          my-[30px]
          mx-auto 
          h-auto 
          `}
        >
          {/*content*/}
          <div
            className={`
            translate
            duration-150
            h-full
           
          `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              p-4
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
              text-[12px]
            "
            >
              <IoMdClose
                onClick={() => handleCloseModal()}
                className="cursor-pointer hover:text-red-600 mt-4"
                size={18}
              />
              <div className="mt-5">
                <p className="text-center font-semibold">{title}</p>
                {body}
                <div className="flex w-full justify-between">
                  {btnText && (
                    <button
                      disabled={disabled}
                      className={`${
                        disabled
                          ? "opacity-40 hover:bg-blue-500 hover:text-white"
                          : "opacity-100  hover:text-blue-500 hover:bg-transparent"
                      } bg-blue-500 border border-blue-500 mb-5 flex items-center justify-center duration-300 text-white py-1 w-[20%]`}
                      onClick={onSubmit}
                    >
                      {loading ? (
                        <p className="loader" />
                      ) : (
                        <p> {btnText !== undefined ? `${btnText}` : "Save"} </p>
                      )}
                    </button>
                  )}
                  {btnText2 && (
                    <button
                      disabled={disabled}
                      className={`${
                        disabled
                          ? "opacity-40 hover:bg-red-700 hover:text-white"
                          : "opacity-100  hover:text-red-700 hover:bg-transparent"
                      } bg-red-700 border border-red-700 mb-5 flex items-center justify-center duration-300 text-white py-1 w-[20%]`}
                      onClick={handleCloseModal}
                    >
                      <p> {btnText2 !== undefined ? `${btnText2}` : ""} </p>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
