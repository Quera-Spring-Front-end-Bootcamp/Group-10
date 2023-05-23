import React, { PropsWithChildren, useState } from "react";
import { Switch } from "@headlessui/react";

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {}

function SwitchButton({ children, className, ...props }: Props) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex py-16">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`
          relative inline-flex bg-white h-[25px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-gray transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-[-24px]" : "translate-x-[-1.5px]"}
            pointer-events-none absolute inset-y-[0.25px] inline-block h-[21px] w-[26px] transform rounded-full ${
              enabled ? "rounded-r-none" : "rounded-e-none"
            } ${enabled ? "bg-gray" : "bg-primary"} shadow-lg ring-0 transition-all duration-1000 ease-in-out`}
        />
      </Switch>
      <p className="mx-3.5">حالت شب</p>
    </div>
  );
}

export default SwitchButton;
