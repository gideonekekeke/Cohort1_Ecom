import React from 'react'
import pic from "../assets/download-removebg-preview.png"
import {Link} from"react-router-dom"

const HomePage:React.FC = () => {
  return (
    <div className='bg-[#E5E9EC] text-[#191919] h-[650px] w-screen p-[20px]  flex mt-10 justify-around z-10 '>
       <div className='p-[50px] '>
       <h1 className=' font-serif font-extrabold text-9xl w-[200px] mt-16'>Summer Collection</h1>
       
       <p className='w-[400px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, expedita tempora tenetur temporibus dicta nesciunt in asperiores corrupti fuga aut ad quibusdam unde hic suscipit eius libero et, voluptates ea.</p>
      <Link to="/shoppage">
      <button className='bg-white w-[250px] h-[60px] mt-6'>SHOP NOW</button>
      </Link>
       </div>
       <div className='h-[600px]  w-[500px] bg-[#E0E4E7]'>
        <img className='object-cover h-[600px]  ' src={pic}/>
       </div>
       

    </div>
  )
}

export default HomePage