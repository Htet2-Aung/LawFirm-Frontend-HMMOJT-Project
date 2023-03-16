import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPayment } from "./paymentSlice";
import { useParams,useNavigate } from "react-router-dom";
import cardIMG from "./card.jpg"
function AddPaymentForm(){
    const {contractId} = useParams();
    console.log(Number(contractId));
    const navigate = useNavigate();

    const [cardNumber,setCardNumber] = useState('');
    const [expireDate,setExpireDate] = useState('');
    const [cvc,setCvc] = useState('');
    const [holderName,setHolderName] = useState('');
    const [totalCost,setTotalCost] = useState('');
    const [addRequestStatus,setAddRequestStatus]= useState('idle')

    const onCardNumberChange = e => setCardNumber(e.target.value);
    const onExpireDateChange = e => setExpireDate(e.target.value);
    const onCvcChange = e => setCvc(e.target.value);
    const onHolderNameChange = e => setHolderName(e.target.value);
    const onTotalCostChange = e => setTotalCost(e.target.value);


    const canSave = [ cardNumber,expireDate,cvc,holderName,totalCost].every(Boolean) && addRequestStatus === 'idle'
    

    const dispatch = useDispatch();

    const onSubmit = (event)=>{
        event.preventDefault();

         
           if(canSave){
            try {
                setAddRequestStatus('pending')
                console.log("In the can save")

                dispatch(
                    
                    addNewPayment({
                    payment: {
                        cardNumber,
                        expireDate,
                        cvc,
                        holderName,
                        totalCost
                        },contractId
                    })).unwrap();
                navigate('/payment/paymentTable')
            } catch (error) {
                console.log(error)
                
            }finally{
                setAddRequestStatus('idle')
            }

          
        setCardNumber('')
        setExpireDate('')
        setCvc('')
        setHolderName('')
        setTotalCost('')
           }
           
        
        }
       
  
    return (
           <div className="bg-light container-fluid py-5">

            <div className="container">
            <div className="row">
                <div className="col">
                    <img src={cardIMG}></img>
                </div>
                <div className="col">
                <form onSubmit={ onSubmit }>
                                <div className="row g-3">
                                    
                                    <div className="col-12 ">
                                        <div className="row" id="date" data-target-input="nearest">
                                        <div className="col-md-11 ">
                                        <input type="text"
                                                name="cardNumber"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="Card Number" data-target="#date" data-toggle="datetimepicker"
                                                value={cardNumber}
                                        onChange = {onCardNumberChange} />
                                        </div>
                                        <div className="col-md-1 ">
                                        <i className="far fa-credit-card text-primary"></i>
                                        </div>
                                            
                                       
                                        </div>
                                    </div>

                                    <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="date"
                                                name="contractDate"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="Expire Date" data-target="#date" data-toggle="datetimepicker"
                                                value={expireDate}
                                        onChange = {onExpireDateChange} />
                                        </div>
                                    </div>

                                    <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                name="contractDate"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="CVC " data-target="#date" data-toggle="datetimepicker"
                                                value={cvc}
                                        onChange = {onCvcChange} />
                                     
                                        </div>
                                    </div>

                                    <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                name="contractDate"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="HolderName " data-target="#date" data-toggle="datetimepicker"
                                                value={holderName}
                                            onChange = {onHolderNameChange} />
                                        </div>
                                    </div>

                                    <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                name="contractDate"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="TotalCost " data-target="#date" data-toggle="datetimepicker"
                                                value={totalCost}
                                            onChange = {onTotalCostChange} />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                </div>
            </div>
                
            </div>

        </div>               
    );

}
export default AddPaymentForm