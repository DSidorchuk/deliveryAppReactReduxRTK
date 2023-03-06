import Spinner from "../components/spinner/Spinner";
import Error from "../components/error/Error";

export const setContent = (loadingStatus, createContent, list = null) => {
    switch(loadingStatus) {
        case 'loading':
            return <Spinner/> ;
        case 'error':
            return <Error/>;
        case 'idle':
            return createContent(list)
        default:
            throw new Error('Unexpected process state');
    }
}


// This function is used to create content in depends of loading status it returns Spinner, Error or if request to server was succesful it uses callback function in which specified how create content and which component return.