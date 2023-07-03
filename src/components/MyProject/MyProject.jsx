import lan1 from '../../assets/lan1.png'
import lan2 from '../../assets/lan2.png'
import lan3 from '../../assets/lan3.png'
import lan4 from '../../assets/lan4.png'
import ToysProject from './ToysProject';
import RecipeProject from './RecipeProject';

const MyProject = () => {
    return (
        <div className='md:mr-5'>
            {/* language school */}
            <div className="hero w-full">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center sm:text-left lg:text-left w-1/2 font-serif md:pl-10">
      <h1 className="text-3xl font-bold mb-3">Language School!</h1>
      <ul>
        <li>Without Login Anyone can see all classes and teachers</li>
        <li>A student login can select Classes</li>
        <li>student see his/her own dashboard</li>
        <li>student can pay individual class</li>
        <li>Instructor Add new class and update class</li>
        <li>Admin see all users. Admin can user role update</li>
        <li>Admin can send feedback</li>
      </ul>
      <div className='mt-5 md:flex lg:flex'>

      <a href="https://language-school-e9e0d.web.app/" className='btn btn-outline btn-secondary mr-5 mb-2' target='blank'>Live site</a>
      <a href="https://github.com/tufaelkhan/language-school-client" className='btn btn-outline btn-secondary sm:mb-3 mr-5 mb-2' target='blank'>Client site</a>
      <a href="https://github.com/tufaelkhan/language-school-server" className='btn btn-outline btn-secondary mr-5' target='blank'>Server site</a>
      </div>
    </div>
    <div className="card flex-shrink-0 w-[55%] border-4 border-black">
   <div className=' md:flex lg:flex'>
     <img src={lan1} style={{height: 150}} alt="" />
<img src={lan2} style={{height: 150}} alt="" />
     </div>
     <div className=' md:flex lg:flex'>
     <img src={lan3} style={{height: 150}} alt="" />
<img src={lan4} style={{height: 150}} alt="" />
     </div>
    </div>
  </div>
</div>
<ToysProject></ToysProject>
<RecipeProject></RecipeProject>
        </div>
    );
};

export default MyProject;