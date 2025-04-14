export const ApplicationConstants = {
    USER_PERMISSIONS:'userPermissions'
}

export const extractTimefromDate = (date)=>{
    let h = date.getHours();
    let m = date.getMinutes();
    let ampm = h >= 12 ? "pm" : "am";
 
    h = h % 12; //reminder
    h = h ? h : 12;
 
    m = m.toString().padStart(2, "0");
   const formatedTimeString = (h.toString().length == 1 ? `0${h}`:h) + ":" + (m.toString().length == 1 ? `0${m}`:m) + " " + ampm;
   return formatedTimeString;
} 