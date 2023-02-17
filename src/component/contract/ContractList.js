import { useSelector} from "react-redux";
import { fetchContracts, getContractStatus, selectAllContract } from "./contractSlice";
import ContractItem from "./ContractItem";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function ContractList() {
    
    
    //const contract = useSelector((state)=>selectProjectByIdentifier(state,String(contractId))) 
    const contracts = useSelector(selectAllContract);
    const dispatch = useDispatch();    
    const contractStatus = useSelector(getContractStatus);
    
    console.log(contracts)
    
    useEffect(()=>{
        
            dispatch(fetchContracts())
            
        
    },[dispatch]);

    
    //dispatch(fetchContracts)



    let content;
    console.log(contractStatus)
        content = contracts.map(
            (contract) => (
                <ContractItem
                    id={contract.id}
                    conDescription={contract.conDescription}
                    contractDate={contract.contractDate} 
                    caseStatus={contract.caseStatus} 
    
                />)
    
        );  
    
    return content;

}

export default ContractList;