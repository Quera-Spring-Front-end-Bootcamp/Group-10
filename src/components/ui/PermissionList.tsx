import Card from "./Card";

function PermissionList() {
  return (
    <Card>
      <ul className="w-64">
        <li className="py-2">
          <p className="text-xs font-semibold pb-1">دسترسی کامل</p>
          <p className="text-[10px] font-normal text-blacklow">
            توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه
          </p>
        </li>
        <li className="py-2">
          <p className="text-xs font-semibold pb-1">دسترسی ویرایش</p>
          <p className="text-[10px] font-normal text-blacklow">
            توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند
            پروژه را حذف یا تسک جدید بسازد.
          </p>
        </li>
        <li className="py-2">
          <p className="text-xs font-semibold pb-1">دسترسی کامنت</p>
          <p className="text-[10px] font-normal text-blacklow">
            توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما
            توانایی ویرایش تنظیمات پروژه را ندارد.
          </p>
        </li>
        <li className="py-2">
          <p className="text-xs font-semibold pb-1">فقط دسترسی مشاهده</p>
          <p className="text-[10px] font-normal text-blacklow">
            توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.
          </p>
        </li>
      </ul>
    </Card>
  );
}

export default PermissionList;
