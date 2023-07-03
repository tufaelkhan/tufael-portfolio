
const Footer = () => {
    return (
        <footer className='bg-teal-900 text-white pb-5'>
        <div className="footer pt-5 mt-12 pb-5 text-black">
  <div className='justify-center'>
    <div className='flex items-center pl-14'>
    <p className='uppercase text-2xl text-white font-bold'>tufael khan portfolio</p>
    </div>
    <p className='uppercase pl-14 text-white text-1xl'>Creating Cutting-Edge Web <br /> Solutions with MERN Stack Prowess</p>
  </div> 
  <div className="text-2xl pl-5">
    <span className="footer-title text-white">contact</span> 
    <div className="grid grid-flow-col gap-4 text-white">
        <a href="https://www.facebook.com/" target="blank">FaceBook</a> ||
        <a href="https://github.com/tufaelkhan" target='blank'>GitHub</a> ||
        <a href="https://www.linkedin.com/in/tufael-khan-705194280/" target='blank'>LinkedIn</a>
    </div>
  </div>
</div>
    <p className='mb-5 mx-auto text-center'>Copyright © 2023 - Tufael Khan. All right reserved</p>
        </footer>
    );
};

export default Footer;