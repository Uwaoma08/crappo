const Button = ({text, bgColor, showIcon})=>{
    return(
        <button className={`reg-btn ${bgColor ? bgColor : 'blue-bg-color'}`}>
            {text}
        {showIcon && <img className="arrow" src="../images/Arrow Right.svg"/>}
        </button>

    )
}

export default Button;