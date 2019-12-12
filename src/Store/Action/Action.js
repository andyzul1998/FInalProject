import {ChangeHandler,ChangeImage,HandlerUpload} from './actionType';

export function changeHandler(name,value){
    return{
        type:ChangeHandler,
        name,
        value
    }
}

export function changeImage(files){
    return{
        type:changeHan,
        files
    }   
}
export function handlerUpload(files){
    return{
        type:handlerUpload,
        files
    }   
}
