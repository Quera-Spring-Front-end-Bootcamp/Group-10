import TicIcon from "../../components/icons/TicIcon";
import Button from "../../components/ui/Button";
import ColorPalette from "../../components/ui/ColorPalette";
import SwitchButton from "../../components/ui/SwitchButton";

function Settings(): JSX.Element {
  return (
    <div className="flex flex-col items-start justify-start pt-36 pr-12">
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pb-4">
        تنظیمات
      </h1>
      <div className="pt-8">
        <div className="flex flex-row justify-start items-end">
          <div className="flex flex-col">
            <p className="text-sm pb-2">انتخاب تم</p>
            <div className="flex justify-center items-center w-10 h-10 bg-primary rounded-full">
              <TicIcon />
            </div>
          </div>
          <ColorPalette />
        </div>
        <SwitchButton />
        <Button className="w-full mt-1" type="button">
          ثبت تغییرات
        </Button>
      </div>
    </div>
  );
}

export default Settings;
