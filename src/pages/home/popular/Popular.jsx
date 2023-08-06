import { useState} from "react";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/content-wrapper/ContentWrapper";
import SwitchTabs from "../../../components/switch-tabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";
const Popular=()=>{

    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return(
       <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">What's Popular</span>
          <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
       </div>
    )
}
export default Popular;