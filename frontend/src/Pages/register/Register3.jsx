//import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Register3() {



    // Uso state para setear el paso en el que el usuario se encuentra en la barra del milestone   const [step, setStep] = useState(1);


    return (




        <div className='flex flex-col items-center justify-center min-h-screen bg-white'>

            {/* Logo Essential Bank */}
            <div className='mb-8 text-center'>
                <h1 className='text-6xl font-bold text-blue-500'>Essential</h1>
                <h2 className='text-4xl font-bold text-blue-700'>Bank</h2>
            </div>

            {/* Bievenido */}

            <div>
                <h2 className='text-4xl mb-8'> Crea tu usuario y clave </h2>
            </div>



            <div className='w-full max-w-xs'>

                {/* Usuario*/}
                <label className='block mb-2 text-sm font-bold text-gray-700'>Usuario</label>
                <div className='flex items-center mb-6 border rounded shadow  bg-greyDesign'>

                    <input type='text' className='w-full p-2 leading-tight  bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline' placeholder='' />
                </div>

                {/* clave de ingreso*/}
                <label className='block mb-2 text-sm font-bold text-gray-700'>Clave de ingreso</label>
                <div className='flex items-center mb-6 border rounded shadow  bg-greyDesign'>

                    <input type='text' className='w-full p-2 leading-tight  bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline' placeholder='' />
                </div>

                {/* conforma tu clave de ingreso*/}
                <label className='block mb-2 text-sm font-bold text-gray-700'>Confirma tu clave de ingreso</label>
                <div className='flex items-center mb-6 border rounded shadow  bg-greyDesign'>

                    <input type='text' className='w-full p-2 leading-tight  bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline' placeholder='' />
                </div>





                <div className='flex justify-end  text-center mt-4'>
                    <button className='mt-2 mr-2 px-4 py-2 text-black rounded  transition-colors'> <Link to="/RegisterPaso2"> Atras </Link></button>
                    <button className='mt-2 px-4 py-2 bg-[#242054] text-white rounded  transition-colors'>  <Link to=""> Siguiente </Link> </button>
                </div>
            </div>
        </div>
    );
}