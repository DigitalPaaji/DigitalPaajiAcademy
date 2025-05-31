'use client';
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';

function Popup({ closeMenu }) {
      const [formData, setFormData] = useState({
        name: '',
            phone: '',
        email: '',
        interest:'',
        hear:'',
        qualification:'',
        message: '',
        recaptchaToken: '',
      });
    
      const [errors, setErrors] = useState({});
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [isFormTouched, setIsFormTouched] = useState(false);
      const [selectedServices, setSelectedServices] = useState([]);
    
    // const handleCheckoxChange = (service)=>{
    //   setSelectedServices((prev)=>
    //   prev.includes(service) ? prev.filter((s)=>s!==service) : [...prev, service]
    // );
    // };
    
      // Handle input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      // Validation function
      const validate = () => {
        const tempErrors = {};
    
        if (!formData.name) tempErrors.name = 'Name is required';

        if (!formData.phone) tempErrors.phone = 'Phone number is required';
        else if (!/^\+?\d{10,15}$/.test(formData.phone))
          tempErrors.phone = 'Phone number must be valid (e.g., +1234567890)';
        if (!formData.email) tempErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email))
          tempErrors.email = 'Email is invalid';
        if (!formData.qualification) tempErrors.qualification = 'Please Select your Qualification.';
        if (!formData.hear) tempErrors.hear = 'Please Select an Option';


      
        if (!formData.interest) tempErrors.interest = 'Please Select a Course.';
        if (!formData.recaptchaToken) tempErrors.recaptchaToken = 'Please complete the reCAPTCHA';
    
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
      };
    

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsFormTouched(true);
    
      const updatedFormData = { ...formData, service: selectedServices };
    
      setFormData(updatedFormData); // Update state
    
        const isValid = validate();
        if (!isValid) return;
    
        setIsSubmitting(true);
    
        try {
          const response = await fetch('https://digitalpaajiacademy.onrender.com/send-mail', {
         
    
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
          if (response.ok) {
            toast.success(data.message || 'Your message has been sent successfully!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setFormData({
              
                name: '',
               
                phone: '',
                email: '',
                interest:'',
                hear:'',
                qualification:'',
                message: '',
                recaptchaToken: '',
              
            });
            setIsFormTouched(false);
            setSelectedServices([]);
    
   setTimeout(() => {
    closeMenu();
  }, 1000); 

          } else {
            toast.error(data.error || 'Something went wrong!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          toast.error('Failed to send your message. Please try again.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } finally {
          setIsSubmitting(false);
        }
      };
 
  return (
    <div onClick={(e)=>e.stopPropagation()}
    >
      <div className="poppins fixed inset-0 bg-[#000000d7] flex justify-center items-center z-[99999] ">
        <div className="">
    <div
  className="custom-scrollbar p-8  xl:px-8 pt-8 pb-0 border-2 border-black bg-[#ede7db] rounded-lg w-[300px] sm:w-[300px] h-[500px] md:w-[600px] md:h-[640px] 2xl:h-[730px] overflow-scroll xl:w-[900px] relative"
  style={{
    background: `radial-gradient(circle at top left, rgba(22, 51, 147, 0.5), transparent 50%),
                 radial-gradient(circle at top right, rgba(22, 51, 147, 0.5), transparent 50%),
                 #ede7db`,
  }}
>


  
         
          <AiOutlineClose
            className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-600"
            onClick={closeMenu}
          />









<div className="">
      <ToastContainer style={{ zIndex: 999999999 }} />
    
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        onSubmit={handleSubmit}
      >

        <div>
          <label className="bungeeHead block lg:text-lg mb-2 text-[#163393]">NAME *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="bg-[#ede7db]  w-full border px-4 py-2 focus:outline-none border-black font-normal"
          />
          {isFormTouched && errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>


        <div>
          <label className="bungeeHead block lg:text-lg mb-2 text-[#163393]">PHONE *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 2929 29xxx"
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black font-normal"
          />
          {isFormTouched && errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>


        <div>
          <label className="bungeeHead block lg:text-lg mb-2 text-[#163393]">EMAIL *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="youremail@domain.com"
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black font-normal"
          />
          {isFormTouched && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>


<div className="">
  <label className="bungeeHead block lg:text-lg mb-2 text-[#163393]">Qualification*</label>
  <select
    name="qualification"
    value={formData.qualification}
    onChange={handleChange}
    className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black font-normal"
  >
    <option value="" disabled >Select your Qualification</option>
    <option value="10">10</option>
    <option value="12">12</option>
    <option value="Diploma">Diploma</option>
    <option value="Graduate">Graduate</option>
    <option value="Post Graduate">Post Graduate</option>

    <option value="Other">Other</option>
  </select>
  {isFormTouched && errors.qualification && <p className="text-red-500 text-sm">{errors.qualification}</p>}
</div>



<div className="mt-4 ">
  <label className="block lg:text-lg mb-2 text-[#163393]">I&apos;m interested in*</label>
  <select
    name="interest"
    value={formData.interest}
    onChange={handleChange}
    className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black font-normal"
  >
    <option value="" disabled >Select a course</option>

    <optgroup label="SHORT TERM COURSES">
      <option value="Canva Graphic Mastery">Canva Graphic Mastery</option>
      <option value="Mobile VideoGraphy and Video Editing">Mobile VideoGraphy and Video Editing</option>
      <option value="Wordpress Website Creation">Wordpress Website Creation</option>
      <option value="Digital Business Launch with AI">Digital Business Launch with AI</option>
      <option value="Instagram and LinkedIn Marketing">Instagram and LinkedIn Marketing</option>
      <option value="Ecommerce and Dropshipping">Ecommerce and Dropshipping</option>
    </optgroup>

    <optgroup label="MID TERM COURSES">
      <option value="SEO Specialist Course">SEO Specialist Course</option>
      <option value="Social Media Specialist">Social Media Specialist</option>
      <option value="Performance Marketing Specialist">Performance Marketing Specialist</option>
      <option value="Digital Marketing Foundation">Digital Marketing Foundation</option>
    </optgroup>

    <optgroup label="PROFESSIONAL COURSES">
      <option value="Digital Marketing Specialist">Digital Marketing Specialist</option>
      <option value="Digital Marketing Masters">Digital Marketing Masters</option>
      <option value="Digital Marketing Professional">Digital Marketing Professional</option>
      <option value="Micro Diploma In Digital Marketing">Micro Diploma In Digital Marketing</option>
    </optgroup>
  </select>
  {isFormTouched && errors.interest && <p className="text-red-500 text-sm">{errors.interest}</p>}
</div>

<div className="mt-4">
  <label className="bungeeHead block lg:text-lg mb-2 text-[#163393]">How did you hear about us?*</label>
  <select
    name="hear"
    value={formData.hear}
    onChange={handleChange}
    className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black font-normal"
  >
    <option value="" disabled >Select an option</option>
    <option value="Google Search">Google Search</option>
    <option value="Social Media">Social Media</option>
    <option value="Word of Mouth">Word of Mouth</option>
    <option value="Referral from a Friend">Referral from a Friend</option>
    <option value="Other">Other</option>
  </select>
  {isFormTouched && errors.hear && <p className="text-red-500 text-sm">{errors.hear}</p>}
</div>




   
        <div className="md:col-span-2">
          <label className="bungeeHead block lg:text-lg mb-2 text-[#163393]">
          Please tell us how we can help you? </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Message"
            rows={2}
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black font-normal"
          ></textarea>
         
        </div>

{/* reCAPTCHA */}
<div className="md:col-span-2">
  <div className=" scale-[0.75] sm:scale-100 origin-top-left "> {/* Adjust width as needed */}
    <ReCAPTCHA
      sitekey='6Lf6QgArAAAAAChE4REclnrewFklc9miQbkqL_NZ'
      theme='light'
      
      onChange={(token) => setFormData({ ...formData, recaptchaToken: token })}
    />
    {isFormTouched && errors.recaptchaToken && (
      <p className="text-red-500 text-sm">{errors.recaptchaToken}</p>
    )}
  </div>
</div>


        {/* Submit Button */}
        <div className="md:col-span-2 flex flex-col gap-4 items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-lg font-medium w-full md:w-fit bg-[#163393] text-white px-6 py-4 rounded-md hover:bg-[#163393] transition duration-300"
          >
            <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
          </button>
        </div>
      </form>
    </div>










         
        </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;