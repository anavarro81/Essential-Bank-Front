
import AccountDetails from '../Transfer/AccountDetails.jsx'
import AmountDetails from '../Transfer/AmountDetails.jsx'
import Confirmation from '../Transfer/Confirmation.jsx'
import Success from '../Transfer/Success'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import useTranfer from '../../Hooks/useTranfer';
import axios from 'axios'


const TransferStepContainer = () => { 

  let URL_BASE = ''
            
  if (import.meta.env.MODE == 'development') {
    URL_BASE = 'http://localhost:5000'
  } else {
    URL_BASE = import.meta.env.VITE_API_URL_PROD
  }

  const navigate = useNavigate()

  const [step, setStep] = useState(1)


  const [formData, setFormData] = useState({
    'Iban': '',
    'contactName': '',
    'bankName': '',
    'amount': 0
  })

  const [destAccount, setDestAccount] = useState();




  async function getAccountInfo(IBAN) {    

    console.log('estoy en getAccountInfo');
    console.log('IBAn::: ', IBAN);
    
    try {
      
      const response = await axios.get(`${URL_BASE}/accounts/get-account-by-IBAN/${IBAN}`)  
      
      console.table('response.data > ', response.data);


      // Existe en IBAN destino en la base de datos
      if (response.status == 200) {
        console.log('Entro en correcto...');
        setDestAccount(response.data)
        return (null)
      } else {        
        return 'El IBAN no es correcto o no exixte'
      }
    
    } catch (error) {
      
      console.log('Error: ', error);
      setIsValidForm(false)
      return error.response.data.error
    }
    
  }

  async function withdrawMoney() {

    console.log('descuento saldo ');
    try {

      const data = {amount: parseInt(formData.amount)}  
      
      const resp = await axios.put(`${URL_BASE}/accounts/withdraw-money/${destAccount._id}`, data)
      
      console.log('resp.status ', resp.status);
      console.log('resp.data ', resp.data);

      if (resp.status == 200) {
        console.log('Transferencia correcta');
      }
    
    } catch (error) {
      console.log('Error: ', error);
    }


  }


  const stepButtons = [
    { 'id': 1,  stepName: 'AccountDetails', buttonName: 'Siguiente'}, 
    { 'id': 2,  stepName: 'AmountDetails', buttonName:  'Siguiente'}, 
    { 'id': 3,  stepName: 'Confirmation', buttonName:   'Confirmar'}, 
    { 'id': 4,  stepName: 'Sucess', buttonName: 'Finalizar'}, 
  ]



  const [isValidForm, setIsValidForm] = useState(false)





  const updateFormData = (data) => {


    setFormData((prevFormData) => ({
      ...prevFormData,
      ...data,
    }));
    
   

  }


   
    
  const nextStep = () => {


    if (isValidForm) { 

      
      
      if (step <= 3 && stepButtons[step].stepName == 'Confirmation') {
        
        withdrawMoney()

        

      }
  
      setStep(step + 1)
    }

  }

  const prevStep = () => {
    setStep(step - 1)
  }





  const renderStepComponent = () => {
    switch (step) {

      case 1:
        return <AccountDetails updateFormData={updateFormData} setIsValidForm={setIsValidForm} getAccountInfo={getAccountInfo}/>

      case 2:
        return <AmountDetails updateFormData={updateFormData} setIsValidForm={setIsValidForm} accountInfo={destAccount}/>

      case 3:
        return <Confirmation data={formData} accountInfo={destAccount}/>

      case 4:
        
        return <Success data={formData} accountInfo={destAccount}/>

      default:
        return navigate('/home')

    }


  }



  return (
    <div>

      {renderStepComponent()}

      <div className='w-full px-6 pb-4 mt-auto'>
        <div className='flex justify-end gap-3 items-center'>
          
          { stepButtons[step-1].stepName != 'Sucess' 
            ? <button onClick={prevStep}> Atras </button>
            : <button> Compartir </button>
          }
          
          <button 
            className={` ${isValidForm ? 'bg-primary': 'bg-darkGrey'} text-white  py-2 px-8 rounded-lg shadow`} 
            onClick={nextStep}> {stepButtons[step-1].buttonName }  
          </button>



        </div>
      </div>


    </div>
  )
}

export default TransferStepContainer