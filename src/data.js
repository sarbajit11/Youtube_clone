export const API_KEY ='AIzaSyAV3PhWsKehe52Vepvm0UalITMdH3jVLk0';

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if (value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}