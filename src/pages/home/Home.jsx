import './style.scss'
import HeroBanner from './hero-banner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './top-rated/TopRated';
const Home=()=>{
    return(
        <div className='homePage'>
        <HeroBanner/>
        <Trending/>
        <Popular/>
        <TopRated/>
        </div>
    )
}
export default Home;