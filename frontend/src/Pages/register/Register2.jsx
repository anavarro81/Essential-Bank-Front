import { Link } from "react-router-dom";

export default function Register2() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-white'>

            {/* Logo Essential Bank */}
            <div className='mb-8 text-center'>
                <h1 className='text-6xl font-bold text-blue-500'>Essential</h1>
                <h2 className='text-4xl font-bold text-blue-700'>Bank</h2>
            </div>

            {/* Bienvenida */}
            <div>
                <h2 className='text-4xl mb-8'>Verifica tu número telefónico</h2>
            </div>

            {/* Contenido de los inputs para el código SMS */}
            <div className='w-full max-w-xs'>

                <div className="flex flex-col items-center justify-center mb-14 md:text-center">
                    <p className="pb-2">
                        Te enviamos un código SMS al
                    </p>
                    <p className="text-3xl text-[#242054]">
                        +63 815 3465 798
                    </p>
                </div>

                <div className='flex justify-center mb-6'>
                    <div className='flex-shrink-0 w-12 h-12 mr-4 border rounded shadow bg-gray-200'>
                        <input
                            type='text'
                            className='w-full h-full bg-transparent text-gray-700 border-none focus:outline-none text-center'
                            placeholder=''
                        />
                    </div>
                    <div className='flex-shrink-0 w-12 h-12 mr-4 border rounded shadow bg-gray-200'>
                        <input
                            type='text'
                            className='w-full h-full bg-transparent text-gray-700 border-none focus:outline-none text-center'
                            placeholder=''
                        />
                    </div>
                    <div className='flex-shrink-0 w-12 h-12 mr-4 border rounded shadow bg-gray-200'>
                        <input
                            type='text'
                            className='w-full h-full bg-transparent text-gray-700 border-none focus:outline-none text-center'
                            placeholder=''
                        />
                    </div>
                    <div className='flex-shrink-0 w-12 h-12 mr-4 border rounded shadow bg-gray-200'>
                        <input
                            type='text'
                            className='w-full h-full bg-transparent text-gray-700 border-none focus:outline-none text-center'
                            placeholder=''
                        />
                    </div>
                </div>

                {/* Botones de Atras y Siguiente */}
                <div className='flex justify-end  text-center mt-16 '>

                    <Link to="/Register"> <button className='mt-2 px-4 py-2 text-black rounded transition-colors'> Atras </button></Link>

                    <Link to="/RegisterPaso3" > <button className='mt-2 px-4 py-2 bg-[#242054] text-white rounded transition-colors'> Siguiente</button> </Link>


                </div>
            </div>
        </div>
    );
}
