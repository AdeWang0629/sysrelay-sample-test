const Navbar = () => {
    return (
        <div className="shadow-lg shadow-indigo-500/40 min-h-screen">
            <h1 className="text-4xl font-extrabold uppercase py-12">
                sysrelay
            </h1>

            <div className="px-6">
                <p className="flex text-xl text-slate-400 py-3 items-center">
                    SUBARUアクセサリマスタ登録
                </p>

                <div className="h-px bg-gray-500 w-4/5">
                </div>

                <p className="flex text-xl text-slate-400 py-3 items-center cursor-pointer">
                    SUBARUアクセサリ
                </p>
                <p className="flex text-xl text-slate-400 py-3 items-center cursor-pointer">
                    新工賃一覧画
                </p>
                <p className="flex text-xl text-slate-400 py-3 items-center cursor-pointer justify-between border-r-4 border-blue-500 pr-1">
                    受注金額未入力
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.50558 8.50564C6.20184 8.80938 6.20184 9.30184 6.50558 9.60558L11.95 15.05C12.2538 15.3538 12.7462 15.3538 13.05 15.05L18.4944 9.60558C18.7982 9.30184 18.7982 8.80938 18.4944 8.50564C18.1907 8.2019 17.6982 8.2019 17.3945 8.50564L12.5 13.4001L7.60552 8.50564C7.30178 8.2019 6.80932 8.2019 6.50558 8.50564Z" fill="#888888"/>
                    </svg>
                </p>
                <p className="flex text-xl text-slate-400 py-3 items-center cursor-pointer">
                    外注費未入力
                </p> 
                <p className="flex text-xl text-slate-400 py-3 items-center cursor-pointer">
                    アクセサリ価格一覧
                </p>
                <p className="flex text-xl text-slate-400 py-3 items-center cursor-pointer">
                    QQQ品番一覧
                </p>

                <div className="h-px bg-gray-500 w-4/5">
                </div>

                <p className="flex text-xl text-slate-400 py-3 items-center cursor-pointer">
                    設定
                </p>
                <p className="flex text-xl text-slate-400 py-3 items-center cursor-pointer">
                ログアウト
                </p>
            </div>

            <div className="ml-2 pt-52 lg:ml-7 flex items-center">
                <div className="bg-blue-500 w-14 h-14 rounded-full text-center flex items-center justify-center">
                    <span className="text-white">
                        HF
                    </span> 
                </div>

                
                <div className="ml-3 lg:ml-7">
                    <p className="text-xl font-medium">
                        Hideaki Fujimura
                    </p>
                    <p className="pt-1">
                        hello@whoofice.com
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;