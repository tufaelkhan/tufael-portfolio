import myImage from '../../../assets/port.png'
import { Zoom, Fade } from "react-awesome-reveal";
import resume from '../../../assets/tufael-khan-resume-full-stack-web-developer (1).pdf'
import { FaDownload, FaLongArrowAltRight  } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <div className="hero mb-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <Zoom>
          <img src={myImage} className="max-w-sm rounded-lg shadow-2xl" />
            </Zoom>
          <div>
            <Fade>
            <h1 className="text-4xl font-bold">Hello, I am <span className='text-purple-400 text-6xl'>Tufael Khan</span> <br />full stack <span className='text-purple-400 text-6xl'>Web</span> Developer</h1>
            <p className="py-6">Crafting Next-Level Web Applications with MERN Stack Expertise</p>
            <div className='flex'>
            <button className="btn btn-info mr-5 text-1xl">

              <Link to='/contact'><p className='flex'><span className='mr-2'>Hire me</span><span><FaLongArrowAltRight/></span></p>   </Link>
              </button>
           <a href={resume} download='../../../assets/tufael-khan-resume-full-stack-web-developer (1).pdf'>
           <button className="btn btn-info text-1xl">Download Resume <FaDownload/> </button>
           </a>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    );
};

export default Banner;