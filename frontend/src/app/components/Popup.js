'use client';
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';

function Popup({ handleMenu }) {
    const Services = [
        "Website Development",
        "SEO (Search Engine Optimization)",
        "PPC/Google Ads",
        "Social Media Marketing",
        "Content Marketing",
        "Graphic Designing",
        "App Development",
        "Other",
      ]
    
    
      const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        phone: '',
        email: '',
        company:'',
        website:'',
        business:'',
        service:[],
        message: '',
        recaptchaToken: '',
      });
    
      const [errors, setErrors] = useState({});
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [isFormTouched, setIsFormTouched] = useState(false);
      const [selectedServices, setSelectedServices] = useState([]);
    
    const handleCheckoxChange = (service)=>{
      setSelectedServices((prev)=>
      prev.includes(service) ? prev.filter((s)=>s!==service) : [...prev, service]
    );
    };
    
      // Handle input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      // Validation function
      const validate = () => {
        const tempErrors = {};
    
        if (!formData.fname) tempErrors.fname = 'First name is required';
        // if (!formData.lname) tempErrors.lname = 'Last name is required';
        if (!formData.phone) tempErrors.phone = 'Phone number is required';
        else if (!/^\+?\d{10,15}$/.test(formData.phone))
          tempErrors.phone = 'Phone number must be valid (e.g., +1234567890)';
        if (!formData.email) tempErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email))
          tempErrors.email = 'Email is invalid';
      
        if (!formData.message) tempErrors.message = 'Message is required';
        if (selectedServices.length === 0) tempErrors.service = 'Please select at least one service.';
        if (!formData.recaptchaToken) tempErrors.recaptchaToken = 'Please complete the reCAPTCHA';
    
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
      };
    
      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsFormTouched(true);
    
      // Ensure selectedServices is included in formData
      const updatedFormData = { ...formData, service: selectedServices };
    
      setFormData(updatedFormData); // Update state
    
        const isValid = validate();
        if (!isValid) return;
    
        setIsSubmitting(true);
    
        try {
          const response = await fetch('https://digital-paaji.onrender.com/send-mail', {
          // const response = await fetch('http://localhost:8000/send-mail', {
    
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
              
                fname: '',
                lname: '',
                phone: '',
                email: '',
                company:'',
                website:'',
                business:'',
                service:[],
                message: '',
                recaptchaToken: '',
              
            });
            setIsFormTouched(false);
            setSelectedServices([]);
    
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
    <div>
      <div className="fixed inset-0 bg-[#000000d7] flex justify-center items-center z-50">
        <div className="p-1 bg-[#163393d7]">
        <div className=" custom-scrollbar p-8  bg-[#ede7db] rounded-lg w-[300px] sm:w-[300px] h-[500px] md:w-[600px] md:h-[500px] xl:h-[720px] overflow-scroll xl:w-[900px]  relative"
        // style={{backgroundImage:"url('/Images/popupbg.webp')"}}
        >
          {/* Close Icon in Top Right Corner */}
          <AiOutlineClose
            className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-600"
            onClick={handleMenu} // Close the menu when clicking the icon
          />









<div className="">
      <ToastContainer style={{ zIndex: 999999999 }} />
      {/* <h3 className="bungeeHead mb-10 text-[30px] text-[#cc5f4d] xl:text-[40px]">
        Let&apos;s get in touch
      </h3> */}

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        onSubmit={handleSubmit}
      >
        {/* First Name */}
        <div>
          <label className="bungeeHead block lg:text-lg mb-2">NAME *</label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          />
          {isFormTouched && errors.fname && <p className="text-red-500 text-sm">{errors.fname}</p>}
        </div>



        {/* Phone */}
        <div>
          <label className="bungeeHead block lg:text-lg mb-2">PHONE *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 2929 29xxx"
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          />
          {isFormTouched && errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="bungeeHead block lg:text-lg mb-2">EMAIL *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="youremail@domain.com"
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          />
          {isFormTouched && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

   {/* location */}
   <div className="">
          <label className="bungeeHead block lg:text-lg mb-2">
          Location </label>
          <textarea
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter Your location Name"
            rows={1}
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          ></textarea>
          {/* {isFormTouched && errors.location && <p className="text-red-500 text-sm">{errors.location}</p>} */}
        </div>


{/* Dropdown for "I'm interested in" */}
<div className="mt-4">
  <label className="bungeeHead block lg:text-lg mb-2">I&apos;m interested in*</label>
  <select
    name="interest"
    value={formData.interest}
    onChange={handleChange}
    className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
  >
    <option value="" disabled>Select a course</option>

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
{/* Dropdown for "How did you hear about us?" */}
<div className="mt-4">
  <label className="bungeeHead block lg:text-lg mb-2">How did you hear about us?*</label>
  <select
    name="interest"
    value={formData.interest}
    onChange={handleChange}
    className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
  >
    <option value="" disabled>Select an option</option>
    <option value="Google Search">Google Search</option>
    <option value="Social Media">Social Media</option>
    <option value="Word of Mouth">Word of Mouth</option>
    <option value="Referral from a Friend">Referral from a Friend</option>
    <option value="Other">Other</option>
  </select>
  {isFormTouched && errors.interest && <p className="text-red-500 text-sm">{errors.interest}</p>}
</div>




        {/* Message */}
        <div className="md:col-span-2">
          <label className="bungeeHead block lg:text-lg mb-2">
          Please tell us how we can help you? *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Message"
            rows={2}
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          ></textarea>
          {isFormTouched && errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

{/* reCAPTCHA */}
<div className="border-2 border-black overflow-hidden flex justify-center items-center w-full">
  <div className="w-[280px]"> {/* Adjust width as needed */}
    <ReCAPTCHA
      sitekey='6LfoGd8qAAAAANWvQKJiISV63MNjHqqRy54ORMJ-'
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