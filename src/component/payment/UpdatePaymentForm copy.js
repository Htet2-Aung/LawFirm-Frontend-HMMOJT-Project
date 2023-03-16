import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPaymentById, updatePayment } from "./paymentSlice";

//for update
import { Link, useParams } from "react-router-dom";

function UpdatePaymentForm(props) {

    const { paymentId } = useParams()
    const payment = useSelector((state) => selectPaymentById(state, Number(paymentId)))
    console.log(paymentId)
    console.log(payment)
    //New
    const [id, setId] = useState(payment?.id);


    const [cardNumber, setCardNumber] = useState(payment?.cardNumber);
    const [expireDate, setExpireDate] = useState(payment?.expireDate);
    const [cvc, setCvc] = useState(payment?.cvc);
    const [holderName, setHolderName] = useState(payment?.holderName);
    const [totalCost, setTotalCost] = useState(payment?.totalCost);




    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card  bg-light">
                        <div className="card-body cardInfo">
                            <div className="row">
                                <div className="col-md-5">
                                    <h5 className="cardInfo">Card Number</h5>
                                </div>
                                <div className="col-md-1">
                                    <h5 className="cardInfo">:</h5>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="cardInfo">{cardNumber} </h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                    <h5 className="cardInfo">Expire Date</h5>
                                </div>
                                <div className="col-md-1">
                                    <h5 className="cardInfo">:</h5>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="cardInfo">{expireDate}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                    <h5 className="cardInfo">CVC</h5>
                                </div>
                                <div className="col-md-1">
                                    <h5 className="cardInfo">:</h5>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="cardInfo">{cvc}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                    <h5 className="cardInfo">Holder Name</h5>
                                </div>
                                <div className="col-md-1">
                                    <h5 className="cardInfo">:</h5>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="cardInfo">{holderName}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                    <h5 className="cardInfo">Total Cost</h5>
                                </div>
                                <div className="col-md-1">
                                    <h5 className="cardInfo">:</h5>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="cardInfo">{totalCost}</h5>
                                </div>


                            </div>
                        </div>
                        <div className="text-center mb-2">
                            <Link to="/payment/paymentTable">
                                <button className="btn btn-primary">Close</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>










    );

}
export default UpdatePaymentForm;