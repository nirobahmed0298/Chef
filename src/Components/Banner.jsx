// import banner from '../assets/Banner.png'
const Banner = () => {
    return (
        <div>
            <div className="bg-[url(banner)] h-94 text-center py-20">
              <h2 className="font-bold text-2xl">Discover an exceptional cooking class tailored for you!</h2> <br />
              <button className='px-4 py-3 rounded-full text-sm bg-[#0BE58A]'>Explore Now</button>
              <button className='px-4 py-3 rounded-full text-sm border-2 ml-2'>Our FeedBack</button>
            </div>
        </div>
    );
};

export default Banner;