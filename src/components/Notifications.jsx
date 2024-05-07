import { SnackbarProvider, enqueueSnackbar, closeSnackbar } from 'notistack'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


export function notify(type, variant, message){
    //notistack variant = warning, error, success, info, default
    //swal variant = warning, error, success, info, question

    switch (type) {
        case 'toast': enqueueSnackbar(message, { variant: variant }); break;
        case 'alert': Swal.fire(message,'',variant); break;
        default: break;
    }
}


export function Notifications(){
    return <SnackbarProvider 
        maxSnack={3}
        dense={true} 
        autoHideDuration={5000} 
        anchorOrigin={{ vertical: 'top', horizontal: 'center', }} 
        action={(snackbarId) => (
            <button className='m-2 font-bold' onClick={() => closeSnackbar(snackbarId)}>
              X
            </button>
        )}    
    />
}