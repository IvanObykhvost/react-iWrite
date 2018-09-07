import moment from "moment";

export function CheckFalseOrTrue(object) {
    if(object){
        return true
    }
    return false;
}

export function CheckImage(image) {
    if(image){
        return image
    }
    return "http://getdrawings.com/img/user-silhouette-icon-3.png";
}


export function getDateFormat(date){
    // const date = new Date(date);
    return moment(date).format('LL');
}

export function createMarkup(message){
    return { __html: message }
}