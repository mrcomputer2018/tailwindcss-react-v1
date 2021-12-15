import React from 'react'
import ImageOne from '../images/egg1.jpg'
import ImageTwo from '../images/egg2.jpg'

export default function Content() {
    return (
        <>
            <div className='menu-card'>
                <img src={ ImageOne } alt="egg" className='image'/>
                <div className='center-content'>
                    <h2 className='text-2xl mb-2'>
                        Egg Muffins
                    </h2>
                    <p className='mb-2'>Crispy, delicious, and nutritious</p>
                    <span>$10,00</span>
                </div>
            </div>

            <div className='menu-card'>
                <img src={ ImageTwo } alt="egg" className='image'/>
                <div className='center-content'>
                    <h2 className='text-2xl mb-2'>
                        Egg Salad
                    </h2>
                    <p className='mb-2'>Crispy, delicious, and nutritious</p>
                    <span>$13,00</span>
                </div>
            </div>
        </>
    )
}
