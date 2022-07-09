import React from "react";
import { PlusCircle, XCircle } from "phosphor-react";

const InputBox = ({
  open,
  value,
  handleChange,
  handleAdd,
  handleClose,
  label,
  addLabel,
}) => {
  const Input = open ? (
    <div className="mx-[10px]">
      <input
        className="w-full h-[50px] rounded-md px-2"
        multiple={true}
        minLength={3}
        placeholder="New Board Name"
        value={value}
        onChange={handleChange}
      />
      <div className="flex justify-center items-center">
        <p
          className="font-bold bg-green-500 text-white inline-block mx-[10px] my-[8px] p-2 rounded-sm cursor-pointer"
          onClick={handleAdd}
        >
          {label}
        </p>
        <p
          className="font-black bg-white text-white inline-flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer"
          onClick={() => handleClose(false)}
        >
          <XCircle size={48} color="#bb2525" weight="fill" />
        </p>
      </div>
    </div>
  ) : (
    <div className="cursor-pointer" onClick={() => handleClose(true)}>
      <p className="font-bold bg-slate-400 mx-[10px] my-[8px] p-2 rounded-sm inline-flex justify-center items-center">
        <PlusCircle size={28} color="#000000" weight="fill" /> {addLabel}
      </p>
    </div>
  );

  return Input;
};

export default InputBox;
