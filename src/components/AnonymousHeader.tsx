import Button from "./ui/Button";

function AnonymousHeader() {
  return (
    <header className="p-8 flex flex-row justify-between items-center fixed w-screen">
      <span className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        کوئرا تسک منیجر
      </span>
      <div className="gap-2 flex flex-row items-center">
        <span className="hidden sm:block">ثبت‌نام نکرده‌ای؟</span>
        <Button>ثبت‌نام</Button>
      </div>
    </header>
  );
}

export default AnonymousHeader;
