import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { resetCameraImage, selectCameraImage } from '../../features/cameraSlice'
import CloseIcon from '@material-ui/icons/Close';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './Preview.css'
function Preview() {

    const cameraImage = useSelector(selectCameraImage)
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        if(!cameraImage){
            history.replace("/")
        }
    }, [])


    const closePreview = ()=>{
        dispatch(resetCameraImage)
        history.replace("/") 
    }

    return (

        <div className="preview">
           
            <CloseIcon onClick={closePreview} className="preview__close"/>
            <img src={cameraImage} alt="" />
        </div>
    )
}

export default Preview
