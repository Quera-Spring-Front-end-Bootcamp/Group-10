import React, { PropsWithChildren } from "react";

const Button = ({
    children,
    ...props
}: PropsWithChildren<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>) => {
    return (
        <button
            {...props}
            className={`bg-btn text-center text-white p-2.5 gap-2.5 rounded-md flex justify-center items-center ${props.className}`}
        >
            {children}
        </button>
    );
};

export default Button;
