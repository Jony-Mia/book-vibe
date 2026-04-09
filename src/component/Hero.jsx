import React from 'react';
import heroBookImg from '@/assets/pngwing.png'
import { useNavigate } from 'react-router';

const Hero = () => {
    let listNavigate = useNavigate()
    return (
        <div className='mt-5' >
            <div className='flex justify-around md:flex-nowrap gap-4 flex-wrap-reverse bg-base-300 p-10 rounded-2xl items-center'>
                <div className='flex flex-col md:items-start items-center'>
                    <p className='capitalize md:text-left text-center text-2xl sm:text-3xl md:text-6xl font-bold md:leading-18'>Books to freshen up <br/> your bookshelf</p>
                    <br />
                    <button onClick={()=>listNavigate('/listed')} className='btn btn-lg bg-green-500 rounded-[10px] text-white px-6 py-5 font-mono'>View The List</button>
                </div>
                <div>
                    <img width={330} src={heroBookImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;