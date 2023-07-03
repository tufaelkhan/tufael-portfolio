import toy1 from '../../assets/toy1.png'
import toy2 from '../../assets/toy2.png'
import toy3 from '../../assets/toy3.png'
import toy4 from '../../assets/toy4.png'

const ToysProject = () => {
    return (
        <div>
                        {/* toys school */}
                        <div className="hero w-full">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center sm:text-left lg:text-left w-1/2 font-serif p-14">
      <h1 className="text-3xl font-bold mb-3">Happy Education!</h1>
      <ul>
        <li>Any one can see All Toys</li>
        <li>A user login then, he/she added a new toys</li>
        <li>User login he/she see toys details</li>
        <li>User see he/she added all toys</li>
      </ul>
      <div className='mt-5 flex'>

      <a href="https://happy-education.web.app/" className='btn btn-outline btn-secondary mr-5' target='blank'>Live site</a>
      <a href="https://github.com/tufaelkhan/toys-seals-client" className='btn btn-outline btn-secondary mr-5' target='blank'>Client site</a>
      <a href="https://github.com/tufaelkhan/toys-sealer-server" className='btn btn-outline btn-secondary mr-5' target='blank'>Server site</a>
      </div>
    </div>
    <div className="card flex-shrink-0 w-[53%] border-4 border-black">
     <div className='flex'>
     <img src={toy3} style={{height: 150}} alt="" />
<img src={toy4} style={{height: 150}} alt="" />
     </div>
     <div className='flex'>
     <img src={toy1} style={{height: 150}} alt="" />
<img src={toy2} style={{height: 150}} alt="" />
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ToysProject;