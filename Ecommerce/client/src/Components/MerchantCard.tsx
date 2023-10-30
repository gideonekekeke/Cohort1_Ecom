import React from 'react'
import pic from "../assets/Rectangle_122__1_-removebg-preview.png"

const MerchantCard:React.FC = () => {
  return (
    <div className="">
        <div className='text-white w-[70px]  h-[70px]   rounded-[50px] bg-[#58B0E0] p-[10px] absolute ml-36 mt-[20px]'>
        {/* {<RxAvatar/>}         */}
        <img className="object-contain" src={pic}/>
        </div>
        <div className='bg-white h-[400px] w-[300px] mt-[20px] flex justify-center ml-10 p-10 '>
        
        <div className='bg-[#F7FAFC]  min-w-[300px] min-h-[300px] mt-[20px] rounded-2xl flex flex-col items-center '>

        <div className='text-[#3D3F3D]  mt-[50px] '>
            <h3 className=' text-2xl font-bold'>Samuel Omamuzo</h3>
            <div>
            <p>omamuzosam43@gmail.com</p>
            <span className='ml-[30px]'>09013456789</span>
            </div>
        </div>
        <div className='font-semibold flex gap-14 mt-6 '>
            <h2 className='text-[#22C55E]'>Activate</h2>
            <h2 className='text-[#E6544A]'>De-activate</h2>
        </div>
        <button className='mt-[20px] bg-[#22C55E]'>Grant Loan</button>
    

        </div>
    </div>

    </div>
  )
}

export default MerchantCard