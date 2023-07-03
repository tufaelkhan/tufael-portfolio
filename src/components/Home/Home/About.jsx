import img from '../../../assets/port.png'
import { Zoom, Slide } from "react-awesome-reveal";

const About = () => {
    return (
        <div>
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <Zoom>

    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
    </Zoom>
    <Slide>

    <div className='text-1xl font-sans pl-5 mr-3'>
      <p className="py-2"><strong className='text-2xl'>I`m Tufael Khan,</strong> a 23-year-old MERN stack web developer hailing from the beautiful city of Chandpur, Bangladesh. I am thrilled to showcase my passion for technology</p>
      <p className="py-2"><strong className='text-2xl'>Having completed my diploma in Computer Science and Technology,</strong>  I have gained a solid foundation in programming and a deep understanding of the principles that drive the digital world. With a specialization in the MERN stack, which encompasses MongoDB, Express.js, React.js, and Node.js, I am equipped with the skills to create dynamic and user-friendly web applications.</p>
      <p className="py-2"><strong className='text-2xl'>Throughout my educational journey,</strong> I have acquired a strong foundation in computer science principles and programming languages. My specialized focus on the MERN stack - MongoDB, Express.js, React.js, and Node.js - has empowered me to build robust and scalable web solutions that prioritize user experience.</p>
      <p className="py-2"><strong className='text-2xl'>Thank you,</strong> for visiting my about section, and I look forward to connecting with you and exploring the possibilities of working together on exciting web development projects.</p>
      <button className='btn btn-primary'>read more</button>
    </div>
    </Slide>
  </div>
</div>
        </div>
    );
};

export default About;