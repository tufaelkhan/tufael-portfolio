import { Zoom } from "react-awesome-reveal";

const Skills = () => {

    return (
        <div>

              <h3 className="text-3xl mb-7 font-extrabold uppercase underline  ml-20 mt-10"><span className='mr-4'>Skills</span> <span></span></h3>
           <div className="lg:flex mx-auto ml-16">
            <Zoom>
            <div className="bg-slate-700 text-white mr-10 pl-10 pr-10 pb-10 rounded-3xl border-4 border-blue-600 mb-3">
              <h3 className="text-2xl mb-7 font-semibold uppercase ml-20 mt-10"><span className='mr-4'>Frontend</span> <span></span></h3>
                <p>
                    <span className="text-2xl font-semibold mr-5">HTML</span>
                    <span><progress className="progress progress-warning w-56 mr-5" value="100" max="100">95% </progress></span>
                    <span className="text-2xl font-semibold mr-5"> 95%</span>
                </p>
                <p>
                    <span className="text-2xl font-semibold mr-5">CSS3</span>
                    <span><progress className="progress progress-warning w-56 mr-5" value="100" max="100">80% </progress></span>
                    <span className="text-2xl font-semibold mr-5"> 80%</span>
                </p>
                <p>
                    <span className="text-2xl font-semibold mr-5">BOOTSTRAP</span>
                    <span><progress className="progress progress-warning w-56 mr-5" value="100" max="100">80% </progress></span>
                    <span className="text-2xl font-semibold mr-5"> 80%</span>
                </p>
                <p>
                    <span className="text-2xl font-semibold mr-5">TAILWIND</span>
                    <span><progress className="progress progress-warning w-56 mr-5" value="100" max="100">75% </progress></span>
                    <span className="text-2xl font-semibold mr-5"> 75%</span>
                </p>
                <p>
                    <span className="text-2xl font-semibold mr-5">DAISY UI</span>
                    <span><progress className="progress progress-warning w-56 mr-5" value="100" max="100">75% </progress></span>
                    <span className="text-2xl font-semibold mr-5"> 75%</span>
                </p>
                <p>
                    <span className="text-2xl font-semibold mr-5">JAVASCRIPT</span>
                    <span><progress className="progress progress-warning w-56 mr-5" value="100" max="100">70% </progress></span>
                    <span className="text-2xl font-semibold mr-5"> 70%</span>
                </p>
                <p>
                    <span className="text-2xl font-semibold mr-5">REACT</span>
                    <span><progress className="progress progress-warning w-56 mr-5" value="100" max="100">80% </progress></span>
                    <span className="text-2xl font-semibold mr-5"> 80%</span>
                </p>
                <p>
                    <span className="text-2xl font-semibold mr-5">FIREBASE</span>
                    <span><progress className="progress progress-warning w-56 mr-5" value="100" max="100">50% </progress></span>
                    <span className="text-2xl font-semibold mr-5"> 50%</span>
                </p>
            
            </div>
            <div className="bg-slate-700 text-white mr-10 pl-10 pr-10 pb-10 rounded-3xl border-4 border-blue-600">
              <h3 className="text-2xl mb-7 font-semibold uppercase ml-20 mt-10"><span className='mr-4'>backend</span> <span></span></h3>
                <p>
                    <span className="text-2xl font-semibold mr-5">NODE</span>
                    <span><progress className="progress progress-warning w-56 mr-5" value="100" max="100">60% </progress></span>
                    <span className="text-2xl font-semibold mr-5"> 60%</span>
                </p>
                <p>
                    <span className="text-2xl font-semibold mr-5">EXPRESS</span>
                    <span><progress className="progress progress-warning w-56 mr-5" value="100" max="100">60% </progress></span>
                    <span className="text-2xl font-semibold mr-5"> 60%</span>
                </p>
                <p>
                    <span className="text-2xl font-semibold mr-5">MONGODB</span>
                    <span><progress className="progress progress-warning w-56 mr-5" value="100" max="100">50% </progress></span>
                    <span className="text-2xl font-semibold mr-5"> 50%</span>
                </p>
            </div>
          
            </Zoom>
           </div>
        </div>
    );
};

export default Skills;