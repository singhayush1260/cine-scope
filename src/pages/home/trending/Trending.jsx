import { useEffect, useState} from "react";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/content-wrapper/ContentWrapper";
import SwitchTabs from "../../../components/switch-tabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";
const Trending=()=>{

    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return(
       <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">Trending</span>
          <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
       </div>
    )
}
export default Trending;