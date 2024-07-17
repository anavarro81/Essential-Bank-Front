

import { useState } from 'react'
import ServicesDetails from './ServicesDetails.jsx'
import AmountDetailsPay from './AmountDetailsPay.jsx'
import ConfirmationPay from './ConfirmationPay.jsx'
import SuccessPay from './SuccessPay.jsx'
// import useTranfer from '../../Hooks/useTranfer';



const PayStepContainer = () => {

    const [step, setStep] = useState(1)

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }





    const renderStepComponent = () => {
        switch (step) {

            case 1:
                return <ServicesDetails />

            case 2:
                return <AmountDetailsPay />

            case 3:
                return <ConfirmationPay />

            case 4:
                return <SuccessPay />

            default:
                return <div>Step not found</div>;

        }


    }



    return (
        <div>

            {renderStepComponent()}

            <div className='w-full px-6 pb-4'>
                <div className='flex justify-end gap-3 items-center'>

                    <button onClick={prevStep}> Atras </button>
                    <button className='bg-primary text-white  py-2 px-8 rounded-lg shadow' onClick={nextStep}> Siguiente </button>
                </div>
            </div>


        </div>
    )
}

export default PayStepContainer