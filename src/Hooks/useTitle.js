import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Dream Travel - ${title}`
    },[title])
};

export default useTitle;