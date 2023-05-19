import React from "react";
import Button from "./ui/Button";

function AnonymousHeader() {
  return (
    <div className="p-8 flex flex-row justify-between">
      <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        کوئرا تسک منیجر
      </span>
      <div className="gap-2 flex flex-row items-center">
        <span>ثبت‌نام نکرده‌ای؟</span>
        <Button>ثبت‌نام</Button>
      </div>
    </div>
  );
}

export default AnonymousHeader;
