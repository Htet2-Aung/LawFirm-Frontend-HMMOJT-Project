import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import Slider from "react-slick";
import { fetchCategories, getCategoryError, getCategoryStatus, selectAllCategory } from "../component/category/categorySlices";
import CaseInfo from "./CaseInfo";



function CaseInfoList(props){
    const dispatch = useDispatch();
    const searchValue = props.searchValue;

    const categories = useSelector(selectAllCategory) 
    
    const categoryStatus = useSelector(getCategoryStatus);
    const error = useSelector(getCategoryError);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };

    useEffect(()=>{
        if(categoryStatus === 'idle'){
            dispatch(fetchCategories())
        }
    },[categoryStatus,dispatch]);

    let content;

    if(categoryStatus === 'loading'){
        content = (<p>Loading......</p>)
    }
    if(categoryStatus === 'failed'){
        content = (<p>{error}</p>)
    }

    if(categoryStatus === 'succeeded'){
        content = categories.map(
            (category)=>(
                    <CaseInfo
                        categoryName={category.categoryName}
                        description={category.description}
                    />
                    ));
;
            }

    return (<Slider {...settings}>{content}</Slider>);
}
export default CaseInfoList;