'use client';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
    toast('You lose')
}
    const Popup = () => {
        
        return(
            <>
            <div>
                <button onClick={notify}></button>
            </div>
            <ToastContainer/>
            </>
            )
        
    }


export default Popup;