import { SnackbarProvider, enqueueSnackbar, closeSnackbar } from 'notistack'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


export function notify(message='', type='toast', variant=''){
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
        autoHideDuration={5000} 
        anchorOrigin={{ vertical: 'top', horizontal: 'center', }} 
        action={(snackbarId) => (
            <button className='font-bold m-2' onClick={() => closeSnackbar(snackbarId)}>
              X
            </button>
        )}    
    />
}