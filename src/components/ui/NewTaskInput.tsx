import React, { useState, PropsWithChildren } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import { string } from "yup";

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
    setName?: (name : string) => void
    action?: () => void;
}

function NewTaskInput({ action , setName , className, children, ...props }: Props) {
//   const [name, setName] = useState("");
  const [flag , setFlag] = useState(true)

  return (
    <div className="w-full">
      <TextInput
        onChange={(e) => {
          setName(e?.target.value);
          (e.target.value === ''? setFlag(true):setFlag(false))
        }}
        label="نام ورک اسپیس"
        containerClassName="w-full"
        className={`w-full mt-2`}
      />

      <Button disabled={flag} onClick={action}  className="w-full mt-[60px]">
        ادامه
      </Button>
    </div>
  );
}

export default NewTaskInput;
