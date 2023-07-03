import lan1 from '../../../assets/lan1.png'
import toy1 from '../../../assets/toy3.png'
import recipe1 from '../../../assets/recipe4.png'
import { Zoom, Fade } from "react-awesome-reveal";
import { FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div>
          <Link to='/myproject'>

            <h3 className="text-3xl mb-7 font-extrabold uppercase underline flex mx-auto ml-20"> <span className='mr-4'>Latest Projects</span> <span><FaShare/></span></h3>
          </Link>
            <Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3">
        <div className="card w-96 bg-base-100 shadow-xl hover:border border-blue-500 border-teal-700">
<Zoom>
  <figure><img src={lan1} alt="Shoes" /></figure>
</Zoom>
  <div className="card-body">
    <h2 className="card-title">Language School</h2>
    <div className="card-actions justify-end">

      <button className="btn btn-primary flex-col"><a href="https://language-school-e9e0d.web.app/" target='blank'>preview now</a></button>
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl hover:border border-blue-500 border-teal-700">
            <Zoom>

  <figure><img src={toy1} alt="Shoes" /></figure>
            </Zoom>
  <div className="card-body">
    <h2 className="card-title">Happy Education</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><a href="https://happy-education.web.app/" target='blank'>preview now</a></button>
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl hover:border border-blue-500 border-teal-700">
            <Zoom>

  <figure><img src={recipe1} alt="Shoes" /></figure>
            </Zoom>
  <div className="card-body">
    <h2 className="card-title">Bangladeshi Recipe</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><a href="https://bangladeshi-special-recipe.web.app/" target='blank'>preview now</a></button>
    </div>
  </div>
</div>
        </div>
            </Fade>
        </div>
    );
};

export default Project;