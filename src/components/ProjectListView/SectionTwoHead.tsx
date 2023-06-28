function SectionTwoHead({titleInfo}: any) {
    
    return (
        <div className="w-full flex">
            <div className="flex justify-center items-center px-2 ml-auto">
              <p className="bg-orange-600 text-base font-medium text-white text-center rounded-lg p-1">
                   {titleInfo.boards[1].name}
              </p>
              <p className="text-xs text-center p-1 ml-auto">2 تسک</p>
            </div>
            <div className="w-[60%] flex justify-center items-center px-2">
                <ul className="w-full flex justify-between items-center">
                    {titleInfo.title.map((item:any)=>(
                        <li className="text-base font-medium px-4"
                         key={item.id}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SectionTwoHead;