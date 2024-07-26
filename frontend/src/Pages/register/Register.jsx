//import { useState } from 'react';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";    

export default function Register3() {

    const [form, setForm] = useState({
        name: '',
        dni: '',
        email: '',
        phoneNumber: '',
        birthDate: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           
            const response = await fetch('http://localhost:8080/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            if (response.ok) {
                navigate('/RegisterPaso2', { state: { email: form.email } });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


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
                <h2 className='text-4xl mb-8'> Crea tu nueva cuenta </h2>
            </div>



            <div className='w-full max-w-xs'>
                <form onSubmit={handleSubmit}>
                {/* Nombre completo input*/}
                <label className='block mb-2 text-sm font-bold text-gray-700'>Nombre completo</label>
                <div className='flex items-center mb-6 border rounded shadow  bg-greyDesign'>

                    <input type='text' name='name' value={form.name} onChange={handleChange} className='w-full p-2 leading-tight  bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline' placeholder='' />
                </div>

                {/* no de documento input*/}
                <label className='block mb-2 text-sm font-bold text-gray-700'>Documento de identidad</label>
                <div className='flex items-center mb-6 border rounded shadow  bg-greyDesign'>

                    <input type='text' name='dni' value={form.dni} onChange={handleChange} className='w-full p-2 leading-tight  bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline' placeholder='' />
                </div>

                {/* correo electronico input*/}
                <label className='block mb-2 text-sm font-bold text-gray-700'>Correo electronico</label>
                <div className='flex items-center mb-6 border rounded shadow  bg-greyDesign'>

                    <input type='text' name='email' value={form.email} onChange={handleChange} className='w-full p-2 leading-tight  bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline' placeholder='' />
                </div>

                {/*fecha de nacimiento input*/}
                <label className='block mb-2 text-sm font-bold text-gray-700'>Fecha de nacimiento</label>
                <div className='flex items-center mb-6 border rounded shadow  bg-greyDesign'>
                    {/* <BiUser className='m-2' /> */}
                    <input type='date' name='birthDate' value={form.birthDate} onChange={handleChange} className='w-full p-2 leading-tight  bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline' placeholder='' />
                </div>

                {/*numero de telefono input*/}
                <label className='block mb-2 text-sm font-bold text-gray-700'>Numero de telefono</label>
                <div className='flex items-center mb-6 border rounded shadow  bg-greyDesign'>

                    <input type='text' name='phoneNumber' value={form.phoneNumber} onChange={handleChange} className='w-full p-2 leading-tight  bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline' placeholder='' />
                </div>
                




                <div className='flex justify-end  text-center mt-4'>
                    <button className='mt-2 mr-2 px-4 py-2 text-black rounded  transition-colors'> <Link to="/"> Atras </Link></button>
                    <button type='submit' className='mt-2 px-4 py-2 bg-[#242054] text-white rounded  transition-colors'> Siguiente </button>
                </div>
                </form>
            </div>
        </div>
    );
}