import { forwardRef, useRef } from "react";

const MyInput = forwardRef((props, ref) => {
  const { value, onChange, inputRef } = props;

  return (
    <input
      className="flex w-96 h-14 mt-10 rounded-lg text-xl pl-6 font-bold outline-none"
      ref={inputRef}
      value={value}
      onChange={onChange}
    />
  );
});

export function ComponentRef(props) {
  const inputRef = useRef(null);

  const focus = () => {
    // alert("Focusing...");
    inputRef.current?.focus();
  };

  const select = () => {
    inputRef.current?.select();
  };

  return (
    <div className="w-42" ame="flex flex-col">
      <h1>Forwarding Refs</h1>
      <MyInput inputRef={inputRef} />
      <div className="flex justify-center space-x-4">
        <button
          className="mt-6 text-xl font-bold bg-orange-500"
          onClick={focus}
        >
          Focus
        </button>
        <button
          className="mt-6 text-xl font-bold bg-blue-500"
          onClick={select}
        >
          Select All
        </button>
      </div>
    </div>
  );
}
