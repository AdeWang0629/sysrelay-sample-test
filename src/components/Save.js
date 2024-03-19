import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import eye from '../assets/eye.png'
import zoom_in from '../assets/zoom-in.png'
import { Link } from 'react-router-dom'
import { meka, newOld, attribute, navItmes, breadcrumbs } from '../data'

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const Save = ({selectedItem, selectedBread, setSelectedBread}) => {
    const [selectedMeka, setSelectedMeka] = useState(meka[0])
    const [selectedNewOld, setSelectedNewOld] = useState(newOld[0])
    const [selectedAttribute, setSelectedAttribute] = useState(attribute[0])

    return (
        <div>
            <div className="flex pl-10 pt-6">
                <h1 className="text-2xl font-semibold">
                    {navItmes[selectedItem]}{breadcrumbs[selectedBread]}
                </h1>
            </div>
            <div className="overflow-x-auto mt-10 py-5 px-5 bg-stone-300 mx-4">
                <div className="grid grid-cols-2">
                    <div className="col-span-1 pr-10">
                        <div className='flex items-center py-3'>
                            <Listbox value={selectedMeka} onChange={setSelectedMeka}>
                                {({ open }) => (
                                    <>
                                        <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 mt-2 w-1/5  flex">ㄨ一力一 <span style={{color: 'red'}}>*</span></Listbox.Label>
                                        <div className="relative mt-2 w-full">
                                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                                <span className="flex items-center">
                                                    <span className="ml-3 block truncate">{selectedMeka.name}</span>
                                                </span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </span>
                                            </Listbox.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {meka.map((item) => (
                                                        <Listbox.Option
                                                            key={item.id}
                                                            className={({ active }) =>
                                                            classNames(
                                                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                                            )
                                                            }
                                                            value={item}
                                                        >
                                                            {({ selected, active }) => (
                                                            <>
                                                                <div className="flex items-center">
                                                                <span
                                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                >
                                                                    {item.name}
                                                                </span>
                                                                </div>

                                                                {selected ? (
                                                                    <span
                                                                        className={classNames(
                                                                        active ? 'text-white' : 'text-indigo-600',
                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                        )}
                                                                    >
                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                    </span>
                                                                ) : null}
                                                            </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
                        </div>
                        <div className='flex items-center py-3'>
                            <Listbox value={selectedNewOld} onChange={setSelectedNewOld}>
                                {({ open }) => (
                                    <>
                                        <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 mt-2 w-1/5 flex">新旧</Listbox.Label>
                                        <div className="relative mt-2 w-full">
                                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                                <span className="flex items-center">
                                                    <span className="ml-3 block truncate">{selectedNewOld.name}</span>
                                                </span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </span>
                                            </Listbox.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {newOld.map((item) => (
                                                        <Listbox.Option
                                                            key={item.id}
                                                            className={({ active }) =>
                                                            classNames(
                                                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                                            )
                                                            }
                                                            value={item}
                                                        >
                                                            {({ selected, active }) => (
                                                            <>
                                                                <div className="flex items-center">
                                                                <span
                                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                >
                                                                    {item.name}
                                                                </span>
                                                                </div>

                                                                {selected ? (
                                                                    <span
                                                                        className={classNames(
                                                                        active ? 'text-white' : 'text-indigo-600',
                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                        )}
                                                                    >
                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                    </span>
                                                                ) : null}
                                                            </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
                        </div>
                        <div className='flex items-center py-3'>
                           <label className='w-1/5 flex items-center mt-2'>シリーズ</label>
                           <div className="relative mt-2 rounded-md shadow-sm  w-full">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  w-full"
                                    placeholder="---"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <img src={eye} width={'18px'} className='mr-2' alt='eye'/> 
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center py-3'>
                            <Listbox value={selectedAttribute} onChange={setSelectedAttribute}>
                                {({ open }) => (
                                    <>
                                        <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 mt-2 w-1/5 flex">属性 <span style={{color: 'red'}}>*</span></Listbox.Label>
                                        <div className="relative mt-2 w-full">
                                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 w-full">
                                                <span className="flex items-center">
                                                    <span className="ml-3 block truncate">{selectedAttribute.name}</span>
                                                </span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </span>
                                            </Listbox.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {attribute.map((item) => (
                                                        <Listbox.Option
                                                            key={item.id}
                                                            className={({ active }) =>
                                                            classNames(
                                                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                                            )
                                                            }
                                                            value={item}
                                                        >
                                                            {({ selected, active }) => (
                                                            <>
                                                                <div className="flex items-center">
                                                                <span
                                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                >
                                                                    {item.name}
                                                                </span>
                                                                </div>

                                                                {selected ? (
                                                                    <span
                                                                        className={classNames(
                                                                        active ? 'text-white' : 'text-indigo-600',
                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                        )}
                                                                    >
                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                    </span>
                                                                ) : null}
                                                            </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
                        </div>
                        <div className='flex items-center py-3'>
                           <label className='w-1/5 flex items-center mt-2'>車種<span style={{color: 'red'}}>*</span></label>
                           <div className="relative mt-2 rounded-md shadow-sm w-full">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
                                    placeholder="---"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <img src={eye} width={'18px'} className='mr-2' alt='eye'/> 
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center py-3'>
                           <label className='w-1/5 flex items-center mt-2'>型式上2桁</label>
                           <div className="relative mt-2 rounded-md shadow-sm w-full">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
                                    placeholder="---"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <img src={eye} width={'18px'} className='mr-2' alt='eye'/> 
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center py-3'>
                           <label className='w-1/5 flex items-center mt-2'>部品番号<span style={{color: 'red'}}>*</span></label>
                           <div className="relative mt-2 rounded-md shadow-sm w-full">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
                                    placeholder="---"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <img src={eye} width={'18px'} className='mr-2' alt='eye'/> 
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center py-3'>
                           <label className='w-1/5 flex items-center mt-2'>部品名称<span style={{color: 'red'}}>*</span></label>
                           <div className="relative mt-2 rounded-md shadow-sm w-full">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
                                    placeholder="---"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <img src={eye} width={'18px'} className='mr-2' alt='eye'/> 
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center py-3'>
                           <label className='w-1/5 flex items-center mt-2'>部品名称<span style={{color: 'red'}}>*</span></label>
                           <div className="relative mt-2 rounded-md shadow-sm w-full">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
                                    placeholder="---"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <img src={zoom_in} width={'18px'} className='mr-2' alt='zoom_id'/> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div>
                            <p className='text-lg font-semibold py-10'>
                            《一般の場合は下記に工賃を登録》
                            </p>
                            <div className='flex'>
                                <div className='w-2/6 bg-blue-100 h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                    定価工賃 <span style={{color: 'red'}}>*</span>
                                </div>
                                <div className='w-4/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400 px-1' style={{borderWidth: '1px'}}>
                                    <input
                                        type="text"
                                        name="price"
                                        id="price"
                                        className="block rounded-md border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
                                    />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-2/6 bg-blue-100 h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                    受注工賃 <span style={{color: 'red'}}>*</span>
                                </div>
                                <div className='w-1/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                0
                                </div>
                                <div className='w-2/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                    標準工数(分)
                                </div>
                                <div className='w-1/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                0
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-2/6 bg-blue-100 h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                    標準工数(時間)
                                </div>
                                <div className='w-1/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                0
                                </div>
                                <div className='w-2/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                    外注費
                                </div>
                                <div className='w-1/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                0
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <p className='text-lg font-semibold py-10'>
                                【SUBARUディーラー工賃】
                            </p>
                            <div className='flex'>
                                <div className='w-2/6 bg-blue-100 h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                    SUABRU.D受注単価
                                </div>
                                <div className='w-1/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                0
                                </div>
                                <div className='w-2/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                    SUABRU.D受注単価
                                </div>
                                <div className='w-1/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                0
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-2/6 bg-blue-100 h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                    D受注工賃
                                </div>
                                <div className='w-1/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                0
                                </div>
                                <div className='w-2/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                    D受注工賃
                                </div>
                                <div className='w-1/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                0
                                </div>
                            </div>
                        </div>

                        <div className=" my-10 bg-gray-400" style={{height: '2px'}} >

                        </div>

                        <div className='flex'>
                            <div className='w-1/6 bg-blue-100 h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                原单位
                            </div>
                            <div className='w-5/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400 px-1' style={{borderWidth: '1px'}}>
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block rounded-md border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
                                />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-1/6 bg-blue-100 h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                原单位
                            </div>
                            <div className='w-2/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400 px-1' style={{borderWidth: '1px'}}>
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block rounded-md border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
                                />
                            </div>
                            <div className='w-1/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400' style={{borderWidth: '1px'}}>
                                D受注工賃
                            </div>
                            <div className='w-2/6 bg-white h-8 flex items-center justify-center text-sm border-gray-400 px-1' style={{borderWidth: '1px'}}>
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block rounded-md border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-5'>
                    <Link to='/'>
                        <button className='bg-blue-500 w-64 h-10 text-white font-semibold rounded-l-3xl' onClick={() => setSelectedBread(0)}>キャンセル</button>
                    </Link>
                    <button className='bg-white w-64 h-10 font-semibold rounded-r-3xl'>取得</button>
                </div>
            </div>
        </div>
    )
}

export default Save;