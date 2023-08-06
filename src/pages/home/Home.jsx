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
        <div style={{height:'100vh'}}>.</div>
        </div>
    )
}
export default Home;