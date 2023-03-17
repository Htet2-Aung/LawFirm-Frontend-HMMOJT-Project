import { useSelector } from "react-redux";
import { fetchContracts, getContractStatus, selectAllContract, selectContractsByCaseStatus, selectContractsByDes, selectContractsByLawyerName, selectContractsByUsername } from "./contractSlice";
import ContractItem from "./ContractItem";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getToken, getUser } from "../auth/authSlice";
import { fetchAppointmentAdmin } from "../appointment/appointmentSlice";
import { fetchUser } from "../user/usersSlice";

function ContractList(props) {

    const dispatch = useDispatch()
    const token = useSelector(getToken)
    console.log("In the Contract List Token :" + token)

    const user = useSelector(getUser)
    console.log("In the Contract List : user is" + user.username)

    const contractStatus = useSelector(getContractStatus)
    console.log("In the contract List : contract status is" + contractStatus)

    const contractAll = useSelector(selectAllContract)
    console.log("Contract List SelectAll Appointmet: " + contractAll)

    const contractsUsername = useSelector((state) => selectContractsByUsername(state, user.username))
    console.log("In the Contract List , contractsUsername by user name is" + contractsUsername);

    const contractsLawyername = useSelector((state) => selectContractsByLawyerName(state, user.username))
    console.log("In the Contract List , contractsLawyername is" + contractsLawyername);


    //const contract = useSelector((state)=>selectProjectByIdentifier(state,String(contractId))) 
    //     const searchValue = props.searchValue;
    //     console.log("in conract list searchValue is "+ searchValue)
    //     var searchStatus;
    //     if(searchValue.toLocaleLowerCase()==="yes")
    //     {
    //        searchStatus=true;
    //     }
    //     else if(searchValue.toLocaleLowerCase()==="no"){
    //         searchStatus=false;
    //     }else{
    //         searchStatus="";
    //     }
    //    const contracts = useSelector((state)=>selectContractsByCaseStatus(state,searchStatus))  

    //     //const contractStatus = useSelector(getContractStatus);

      

   

    useEffect(() => {
        console.log("Contract List Token:"+token)
        if(contractStatus === 'idle'){
           
                console.log("Admin see Contract List")
                dispatch(fetchContracts())
                dispatch(fetchAppointmentAdmin())
                dispatch(fetchUser())
        }
        },[contractStatus,dispatch])


        let content, contracts;
        let index=1;
        console.log("In the contract List with object"+contracts)

        if(user.role==='Admin')
            contracts=contractAll
        else if(user.role==='User')
            contracts=contractsUsername
        else
            contracts=contractsLawyername

        if(contractStatus === 'loading'){
            content = (<p>Loading....</p>)
        }
        console.log("In the contract List: "+contractStatus)
        if(contractStatus === 'succeeded'){
            content = contracts.map(
                (contract) => (
                   
                    <ContractItem
                        no={index++}
                        contractDate={contract.contractDate}
                        username={contract.username}
                        lawyerName={contract.lawyerName}
                        id={contract.id}
                        conDescription="contract description ..."                        
                        caseStatus={contract.caseCreated}
                        paymentStatus={contract.paymentStatus}
        
                    />)
        
            );

            if(contractStatus === 'failed'){
                content = (<p>error</p>);
            }
     

        }
        useEffect(()=>{
            dispatch(fetchAppointmentAdmin())
        
        },[dispatch])

    return content;

}

export default ContractList;