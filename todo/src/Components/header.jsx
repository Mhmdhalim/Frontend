import React from 'react'
import moon from '../images/icon-moon.svg'
import sun from '../images/icon-sun.svg'

export default function Header({theme, light}) {

    return (
        <>
        <header className='flex flex-row justify-between w-full'>
            <div className="text-white uppercase tracking-[6px] text-3xl font-bold">Todo</div> 
                <div className="image">
                    {
                        !light ?  <img onClick={theme} src={moon} alt="moon" className={`theme w-6 cursor-pointer`}/> : <img onClick={theme} src={sun} alt="moon" className={`theme w-6 cursor-pointer`}/>
                    }
                </div> 
        </header>
        </>
    )
}
