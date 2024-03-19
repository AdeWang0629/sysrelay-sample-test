import plusCircle from '../assets/plus-circle.png'
import { Link } from 'react-router-dom';
import { navItmes, breadcrumbs } from '../data';

const Index = ({selectedItem, selectedBread, setSelectedBread}) => {
    return (
        <div>
            <div className="flex pl-10 pt-6">
                <h1 className="text-2xl font-semibold">
                    {navItmes[selectedItem]}{breadcrumbs[selectedBread]}
                </h1>
            </div>
            <div className="overflow-x-auto pt-16">

                <div className="flex pl-10 pb-10">
                    <Link to={'/save'}>
                        <button className='flex bg-blue-600 p-2 rounded-3xl text-white w-48 justify-center' >
                            <img src={plusCircle} className='pr-1' alt='plusCircle'/> 
                            <span className='ml-5' onClick={() => setSelectedBread(1)}>新規登録</span>
                        </button>
                    </Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className="p-2 border-r-2 border-gray-300">操作</th>
                            <th className="p-2 border-r-2 border-gray-300">品番終了</th>
                            <th className="p-2 border-r-2 border-gray-300">ㄨ一力一</th>
                            <th className="p-2 border-r-2 border-gray-300">新旧</th>
                            <th className="p-2 border-r-2 border-gray-300">シリーズ</th>
                            <th className="p-2 border-r-2 border-gray-300">属性</th>
                            <th className="p-2 border-r-2 border-gray-300">車種</th>
                            <th className="p-2 border-r-2 border-gray-300">型式上2桁</th>
                            <th className="p-2 border-r-2 border-gray-300">部品番号</th>
                            <th className="p-2 border-r-2 border-gray-300">部品名称</th>
                            <th className="p-2 border-r-2 border-gray-300">区分 No</th>
                            <th className="p-2 border-r-2 border-gray-300">定価工賃</th>
                            <th className="p-2 border-r-2 border-gray-300">受注工賃</th>
                            <th className="p-2 border-r-2 border-gray-300">標準工数(時間)</th>
                            <th className="p-2 border-r-2 border-gray-300">外注費</th>
                            <th className="p-2 border-r-2 border-gray-300">標準工数(分)</th>
                            <th className="p-2 border-r-2 border-gray-300">SUABRU.D受注単価</th>
                            <th className="p-2 border-r-2 border-gray-300">D受注工賃</th>
                            <th className="p-2 border-r-2 border-gray-300">原单位</th>
                            <th className="p-2 border-r-2 border-gray-300">部品定価</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-40 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                            <td className="bg-gray-200 h-14"><input className="w-16 h-8 rounded-md"/></td>
                        </tr>
                        <tr>
                            <td className="p-5 border-b-2 border-gray-300">TheSli</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeBB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeBBBB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeBBBB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeBBBBBBBBBB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeBBB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                        </tr>
                        <tr>
                            <td className="p-5 border-b-2 border-gray-300">TheSli</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeBB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeBBBB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeBBBB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeBBBBBBBBBB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeBBB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                            <td className="p-5 border-b-2 border-gray-300">ChromeB</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Index;