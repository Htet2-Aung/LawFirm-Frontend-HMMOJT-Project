import classes from "./CaseInfo.module.css";
function CaseInfo(props) {
    return (

        <div class="service">
        <div class="container">
                    <div class="service-item">
                        <div class="service-icon">
                        <i className='fas fa-balance-scale' ></i>
                        </div>
                        <h3>{props.categoryName}</h3>
                        <p>
                            {props.description}
                        </p>
            </div>
        </div>
    </div>

    );
}
export default CaseInfo;