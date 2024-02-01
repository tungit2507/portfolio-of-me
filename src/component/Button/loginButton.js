
import SweetAlert2 from "../Alert/Sweetalert2";

const LoginBtn = () =>{

    const handleClick = () =>{
        SweetAlert2.success("Login Success")
    }

    return (
        <button onClick={handleClick} className="btn btn-primary">
            Login
        </button>
    )
}


export {LoginBtn}