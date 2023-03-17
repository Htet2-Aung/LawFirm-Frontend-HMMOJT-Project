import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import Lawyer from "./Lawyer";

import { fetchUser, getUserStatus, selectLawyerByRole } from "../component/user/usersSlice";
import Slider from "react-slick";

function LawyerProfile() {
    const dispatch = useDispatch()
    const lawyers = useSelector(selectLawyerByRole)
    const lawyerStatus = useSelector(getUserStatus)
    var settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 2,
    };

    useEffect(()=>{
        if(lawyerStatus === 'idle'){
            dispatch(fetchUser())
        }
    },[lawyerStatus,dispatch])

    let content;

        if(lawyerStatus === 'loading'){
            content = (<p>Loading....</p>)
        }
        if(lawyerStatus === 'succeeded'){
            content = lawyers.map(
              (lawyer)=>(
                <Lawyer 
                    id={lawyer.id}
                    imageURL={lawyer.imageURL}
                    accountName={lawyer.accountName}
                    field={lawyer.field}
                />
              ));
        }

        return (<Slider {...settings}>{content}</Slider>);

    
}
export default LawyerProfile;