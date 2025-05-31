'use client';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';
import Image from 'next/image';
import Link from 'next/link';
function Form() {
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
    <div className='mx-6 xl:mx-0 flex items-center justify-center gap-12  xl:gap-0 flex-wrap xl:flex-nowrap py-24 xl:py-0'>
      <div className="w-full xl:w-1/2 flex flex-col gap-6 items-start text-left p-6 lg:pl-12 xl:pl-24">
        <h1 className="bungee-shade-regular font-bold text-4xl sm:text-5xl md:text-6xl 2xl:text-8xl  text-left">
          Don't Be Shy, <br /> Say Hi!
        </h1>
        <p className=" text-md mt-2 text-left ">
         Not just learning - you're unlocking a launchpad to your future. Let's turn skills into success. Want to be part of the fun? Join us and make every Friday unforgettable. Because at Paaji Academy, you don't just learn - you live the vibe. Surround yourself with creators, coders, and go-getters who push you to level up. From classroom to career - we’ve got your journey covered.

        </p>

        <div className="flex mt-4 flex-col md:flex-row items-start md:items-center justify-start gap-4"
          >
            <Image
              alt=""
              src="/Images/location.webp"
              width={48}
              height={48}
              className="w-10 lg:w-16 h-10 lg:h-16"
            />
            <div>
              <p className="laila-bold text-2xl  text-start">VISIT US</p>
              <p className="text-md  text-left ">
         We're always happy to see you! Drop by and connect with our friendly team.

 <br/> <strong>
2nd Floor, kissan Market, 78, Sirhind Rd, near Hemkunt Petrol Pump, Harinder Nagar, Patiala, Punjab 147001
         </strong>
        </p>
            </div>
          </div>
            <div className="flex mt-4 flex-col md:flex-row items-start md:items-center justify-start gap-4"
          >
            <Image
              alt=""
              src="/Images/call.webp"
              width={48}
              height={48}
              className="w-10 lg:w-16 h-10 lg:h-16"
            />
            <div>
              <p className="laila-bold text-2xl  text-start">CALL US</p>
              <p className=" text-md  text-left ">
        Have questions? Our warm and helpful team is just a call away.

 <br/> <strong>

+91 86996 40752
         </strong>
        </p>
            </div>
          </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-4 mt-4"
          >
            <Image
              alt=""
              src="/Images/chat.webp"
              width={48}
              height={48}
              className="w-10 lg:w-16 h-10 lg:h-16"
            />
            <div>
              <p className="laila-bold text-2xl  text-start">चैट WITH US</p>
              <p className=" text-md  text-left ">
         Prefer to type it out? We're just a message away and ready to help.
 <br/> <strong>

hello@digitalpaaji.com
         </strong>
        </p>
            </div>
          </div>
      </div>
      <div className='w-full xl:w-1/2 p-6 p-6 lg:p-12 xl:p-24  '>
            {/* <h3 className=" text-5xl font-semibold">
                  Contact us
                  </h3> */}
        <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10"
        onSubmit={handleSubmit}
      >

        <div>
          <label className="bungeeHead block lg:text-lg mb-2">NAME *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="  w-full border-b px-4 py-2 focus:outline-none border-black font-normal"
          />
          {isFormTouched && errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>


        <div>
          <label className="bungeeHead block lg:text-lg mb-2">PHONE *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 2929 29xxx"
            className=" w-full border-b px-4 py-2 focus:outline-none border-black font-normal"
          />
          {isFormTouched && errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>


        <div>
          <label className="bungeeHead block lg:text-lg mb-2">EMAIL *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="youremail@domain.com"
            className=" w-full border-b px-4 py-2 focus:outline-none border-black font-normal"
          />
          {isFormTouched && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>


<div className="">
  <label className="bungeeHead block lg:text-lg mb-2">Qualification*</label>
  <select
    name="qualification"
    value={formData.qualification}
    onChange={handleChange}
    className=" w-full border-b px-4 py-2 focus:outline-none border-black font-normal"
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
  <label className="block lg:text-lg mb-2">I&apos;m interested in*</label>
  <select
    name="interest"
    value={formData.interest}
    onChange={handleChange}
    className=" w-full border-b px-4 py-2 focus:outline-none border-black font-normal"
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
  <label className="bungeeHead block lg:text-lg mb-2">How did you hear about us?*</label>
  <select
    name="hear"
    value={formData.hear}
    onChange={handleChange}
    className=" w-full border-b px-4 py-2 focus:outline-none border-black font-normal"
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
          <label className="bungeeHead block lg:text-lg mb-2">
          Please tell us how we can help you? </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Message"
            rows={2}
            className=" w-full border-b px-4 py-2 focus:outline-none border-black font-normal"
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
        {/* <div className=" flex flex-col gap-4 items-center"> */}
          {/* <button
            type="submit"
            disabled={isSubmitting}
            className="text-lg font-medium bg-black w-full  text-white px-6 py-4 rounded-md hover:transition duration-300"
          >
            <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
           */}
          
               <button
                 type="submit"
            disabled={isSubmitting}
       
                className="relative z-20 cursor-pointer w-[200px] md:w-[350px] mx-auto md:mx-0 h-16 border-red-900 ">
            {/* Shadow/Base */}
            <div className="absolute top-[6px] left-[4px]  bg-white border-2 border-white w-full h-full rounded-md transition-all duration-100 cursor-pointer " />

            {/* Actual Button */}
            <div
             
              className="poppins  text-lg absolute top-0 left-0 w-full h-full bg-black text-white rounded-md flex items-center justify-center 
               active:translate-x-[2px] active:translate-y-[2px] transition-all duration-100"
            >
{isSubmitting ? 'Sending...' : 'Submit'}
            </div>
          </button>



          
          {/* </button> */}
        {/* </div> */}
      </form>
      </div>
    </div>
  )
}

export default Form
