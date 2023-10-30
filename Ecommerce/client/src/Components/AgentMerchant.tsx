import React from 'react'
import {RxAvatar} from "react-icons/rx"

const AgentMerchant:React.FC = () => {
  return (
    <div>
        <div className='bg-white m-[40px] min-w-[700px] p-[30px] border text-[#E4E4E4]  rounded-[10px] min-h-[400px]'>
            <div className='flex gap-9 justify-center'>

                <div>
                <h3 className='text-[#939393] mb-4'>Time Range</h3>
                <select className='w-[350px] h-[70px] bg-white border text-[#E4E4E4] rounded-[8px]'>
                    <option>All</option>
                </select>
                </div>

                <div>
                    <h3 className='text-[#939393] mb-4'>By Amount</h3>
                <select className='w-[350px] h-[70px] bg-white border text-[#E4E4E4] rounded-[10px]'>
                    <option>All</option>
                </select>
                </div>

            </div>
            <div className='bg-[#F7FAFC] w-[900px] h-[100px]  p-7 ml-[50px] text-[#191919] flex items-center justify-evenly mt-10 '>

                <div className='h-[60px] w-[60px] rounded-[50px]  p-4 text-3xl mb-4 text-white  bg-[#FFC200]'>
                <div>{<RxAvatar  />}</div>
                </div>
                <h3 className='mr-[20px] font-semibold'>Muomaife Fredrick</h3>
                <div>
                    <h3>Total Savings</h3>
                    <span className='font-bold'
                >123,000</span>
                </div>
                <div>
                    <h3>Saving Type Daily</h3>
                    <span className='font-bold'>2,000</span>
                </div>
                <span className='font-light text-xs'>27th March 2023</span>

            </div>

            <div className='bg-[#F7FAFC] w-[900px] h-[100px]  p-7 ml-[50px] text-[#191919] flex justify-evenly mt-10 '>

            <div className='h-[60px] w-[60px] rounded-[50px] text-3xl p-4 mb-4 text-white  bg-[#E6544A]'>
                <div>{<RxAvatar  />}</div>
                </div>
                <h3 className='mr-[20px] font-semibold'>Melvin Ugwu</h3>
                <div>
                    <h3>Total Savings</h3>
                    <span className='font-bold'
                >123,000</span>
                </div>
                <div>
                    <h3>Saving Type Daily</h3>
                    <span className='font-bold'>2,000</span>
                </div>
                <span className='font-light text-xs'>27th March 2023</span>
                </div>

             <div className='bg-[#F7FAFC] w-[900px] h-[100px]  p-7 ml-[50px] text-[#191919] flex justify-evenly mt-10 '>
                   <div className='h-[60px] w-[60px] rounded-[50px] text-3xl p-4 mb-4 text-white  bg-[#58B0E0]'>
                 <div>{<RxAvatar  />}</div>
                </div>
               <h3 className='mr-[20px] font-semibold'>Ikechukwu Cletus</h3>
               <div>
              <h3>Total Savings</h3>
               <span className='font-bold'
               >123,000</span>
             </div>

         <div>
        <h3>Saving Type Daily</h3>
        <span className='font-bold'>2,000</span>
        </div>
         <span className='font-light text-xs'>27th March 2023</span>
         </div>


        <div className='bg-[#F7FAFC] w-[900px] h-[100px]  p-7 ml-[50px] text-[#191919] flex justify-evenly mt-10 '>
          <div className='h-[60px] w-[60px] rounded-[50px] text-3xl p-4 mb-4 text-white  bg-[#E6544A]'>
           <div>{<RxAvatar  />}</div>
           </div>
           <h3 className='mr-[20px] font-semibold'>Clinton Ekegbu</h3>
            <div>
             <h3>Total Savings</h3>
             <span className='font-bold'
            >123,000</span>
            </div>
             <div>
                <h3>Saving Type Daily</h3>
              <span className='font-bold'>2,000</span>
            </div>
          <span className='font-light text-xs'>27th March 2023</span>
          </div>

          <div className='bg-[#F7FAFC] w-[900px] h-[100px]  p-7 ml-[50px] text-[#191919] flex justify-evenly mt-10 '>

         <div className='h-[60px] w-[60px] rounded-[50px] text-3xl p-4 mb-4 text-white bg-[#58B0E0]'>
         <div>{<RxAvatar  />}</div>
        </div>
         <h3 className='mr-[20px] font-semibold'>Muomaife Fredrick</h3>
        <div>
        <h3>Total Savings</h3>
        <span className='font-bold'
        >123,000</span>
       </div>
         <div>
        <h3>Saving Type Daily</h3>
        <span className='font-bold'>2,000</span>
         </div>
         <span className='font-light text-xs'>27th March 2023</span>
        </div>

    <div className='bg-[#F7FAFC] w-[900px] h-[100px]  p-7 ml-[50px] text-[#191919] flex justify-evenly mt-10 '>

     <div className='h-[60px] w-[60px] rounded-[50px] text-3xl p-4 mb-4 text-white bg-[#FFC200]'>
       <div>{<RxAvatar  />}</div>
    </div>
    <h3 className='mr-[20px] font-semibold'>Muomaife Fredrick</h3>
    <div>
        <h3>Total Savings</h3>
        <span className='font-bold'
    >123,000</span>
    </div>
    <div>
        <h3>Saving Type Daily</h3>
        <span className='font-bold'>2,000</span>
    </div>
    <span className='font-light text-xs'>27th March 2023</span>
    </div>
     
     </div>

    </div>
  )
}

export default AgentMerchant