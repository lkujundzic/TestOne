import { useSearchParams } from "react-router-dom";

const useUrlWithPageParam = () => {
    const [searchParams] = useSearchParams();
    
    let currentPage = 1;
    let param = searchParams.get("page");

    if(param) {
        param = parseInt(param);
        currentPage = isNaN(param)? 1 : param;
    }

    return currentPage;
}

export default useUrlWithPageParam;