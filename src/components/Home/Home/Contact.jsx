import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Fade, Zoom } from "react-awesome-reveal";
import { FaFacebookF, FaLinkedin, FaMailBulk, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8lqnk5a', 'template_zr2r00k', form.current, 'neL30gMG_srSB9Fpn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div>
            <h2 className='text-2xl text-center font-bold underline uppercase mt-10'>Contact me</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
<Fade>

            <div className='text-end pr-20 p-7'>
                <h3 className='flex justify-end items-center text-2xl font-serif mt-5'><span className='mr-3'><FaMailBulk/></span> <span>tufaelkhan247@gmail.com</span></h3>
                <h3 className='flex justify-end items-center text-2xl font-sans mt-5'><span className='mr-3'><FaPhoneAlt/></span> <span>(+880) 1880107803</span></h3>
                <h3 className='flex justify-end items-center text-2xl font-serif mt-5'><span className='mr-3'><FaLinkedin/></span> <span><a href="https://www.linkedin.com/in/tufael-khan-705194280/" target='blank'>LinkedIn</a></span></h3>
                <h3 className='flex justify-end items-center text-2xl font-serif mt-5'><span className='mr-3'><FaFacebookF/></span> <span><a href="https://www.facebook.com/" target='blank'>Facebook</a></span></h3>
            </div>
</Fade>
<Zoom>

      <div className='p-8'>
      <form ref={form} onSubmit={sendEmail} className='items-center'>
      <input type="text" name="name" className='rounded-full border border-white mb-5  w-[70%] p-4' placeholder='name'/><br />
      <input type="email" name="email"  className='rounded-full w-[70%] mb-5 p-4' placeholder='email'/><br />
      <textarea name="message" placeholder='message' className='rounded-full w-[70%] mb-5 p-4'  /><br />
      <input type="submit" className='btn btn-primary w-[70%] rounded-3xl' value="Send" />
      
    </form>
      </div>
</Zoom>
            </div>
        </div>
    );
};

export default Contact;