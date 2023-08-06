import "./style.scss";
import { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../content-wrapper/ContentWrapper";
import Img from "../lazy-load-image/Img";
import PosterFallback from "../../assets/images/no-poster.png";
import CircleRating from "../circle-rating/CircleRating";
import Genres from "../genres/Genres";
const Carousel = ({ data, loading, endpoint }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;
    console.log(dir, container)

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.clientWidth + 20)
        : container.scrollLeft + (container.clientWidth + 20);

        console.log(scrollAmount)

    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  const showPrev = () => {
    let width = carouselContainer.current.clientWidth;
    console.log(width);
    carouselContainer.current.scrollLeft -= width;
    console.log('prev');
  };

  const showNext = () => {
    let width = carouselContainer.current.clientWidth;
    console.log(width);
    carouselContainer.current.scrollLeft += width;
    console.log('next');
  };

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };
  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => showPrev()}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => showNext()}
        />
        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div key={item.id} className="carouselItem">
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {dayjs(item.release_date || item.first_air_date).format(
                        "MMM D, YYYY"
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};
export default Carousel;