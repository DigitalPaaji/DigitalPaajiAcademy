"use client";
import React, { useRef, useState } from "react";
import {
  FaUserAlt,
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaGlobeAmericas,
} from "react-icons/fa";
import {
  MdAdd,
  MdCode,
  MdSummarize,
  MdEmail,
  MdGroups,
  MdClose,
  MdPhone,
  MdLocationCity,
  MdWork,
  MdLocationOn,
  MdDateRange,
  MdDelete,
  MdAddCircle,
  MdSchool,
  MdStars,
  MdCheckCircle,
  MdArrowBack,
  MdArrowForward,
  MdDownload,
  MdTitle,
} from 'react-icons/md';
import TemplateOne from "./allresumes/TemplateOne";
import TemplateTwo from "./allresumes/TemplateTwo";
import TemplateThree from "./allresumes/TemplateThree";
import TemplateFour from "./allresumes/TemplateFour";
import TemplateFive from "./allresumes/TemplateFive";
import TemplateSix from "./allresumes/TemplateSix";

import { useReactToPrint } from "react-to-print";
const ResumeForm = ({ slug }) => {
  const [resumeData, setResumeData] = useState({
  personalInfo: {
    firstName: "Rohit",
    lastName: "Sharma",
    city: "Pune",
    country: "India",
    email: "rohit.sharma.dev@gmail.com",
    phone: "+91 98765 43210",

    title: "Full Stack Developer",
  },

  summary:
    "Full Stack Developer with 3+ years of experience building scalable web applications using React, Next.js, Node.js, and MongoDB. Passionate about clean code, performance optimization, and creating great user experiences.",

  experience: [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "TechNova Solutions",
      city: "Bangalore",
      country: "India",
      starting_month: "Jan 2022",
      ending_month: "Present",
      currentwork: true,
      description:
        "Developed and maintained full-stack applications using React, Node.js, and MongoDB. Implemented REST APIs, authentication systems, and optimized application performance.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Webify Labs",
      city: "Mumbai",
      country: "India",
      starting_month: "Jun 2020",
      ending_month: "Dec 2021",
      currentwork: false,
      description:
        "Built responsive UI components using React and Tailwind CSS. Collaborated with designers and backend teams to deliver high-quality web products.",
    },
  ],

  education: [
    {
      id: 3,
      degree: "Bachelor of Computer Engineering",
      school: "Savitribai Phule Pune University",
      location: "Pune, India",
      year: "2016 – 2020",
      honors: "First Class with Distinction",
    },
  ],

  skills: {
    technical: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "MySQL",
      "Tailwind CSS",
      "Git",
    ],
    professional: [
      "Problem Solving",
      "Team Collaboration",
      "Time Management",
      "Communication",
    ],
  },

  certifications: [
    "Full Stack Web Development – Udemy",
    "React Advanced Certification – Coursera",
  ],

  languages: [
    {
      name: "English",
      level: "Professional",
    },
    {
      name: "Hindi",
      level: "Native",
    },
    {
      name: "Marathi",
      level: "Native",
    },
  ],

  projects: [
    {
      id: 4,
      title: "Real Estate Management Platform",
      description:
        "A full-featured web platform for managing property listings, users, and inquiries with admin dashboard.",
      technologies: "Next.js, Node.js, MongoDB, Tailwind CSS",
      link: "https://github.com/rohitsharma/real-estate-app",
    },
    {
      id: 5,
      title: "Live Chat Application",
      description:
        "Real-time chat application with authentication, typing indicators, and online status.",
      technologies: "React Native, Node.js, Socket.io, MongoDB",
      link: "https://github.com/rohitsharma/live-chat-app",
    },
  ],

  other: [
    {
      heading: "Achievements",
      des: "Recognized as Employee of the Month for outstanding project delivery.",
      list: ["Employee of the Month", "Top Performer 2023"],
    },
    {
      heading: "Interests",
      des: "Passionate about learning new technologies and contributing to open-source.",
      list: ["Open Source", "Tech Blogging", "UI/UX Design"],
    },
  ],
});


const pdfRef = useRef(null);

const handlePrint = useReactToPrint({
  contentRef: pdfRef, 
  documentTitle: `digitalpaaji-resume-${Math.round(Math.random()*1000000)}`,
  removeAfterPrint: true,
});
 




  const [otherFields,setOtherFields]= useState({
    heading:"",
    des:"",
    list:[ ]

  })

  const [selectTab, setSelectTab] = useState("Personal_details");
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState({});

  const tabs = [
    { id: "Personal_details", label: "Personal", icon: <FaUserAlt />, step: 0 },
    { id: "experience", label: "Experience", icon: <FaBriefcase />, step: 1 },
    { id: "education", label: "Education", icon: <FaGraduationCap />, step: 2 },
    { id: "skills", label: "Skills", icon: <FaTools />, step: 3 },
    { id: "summary", label: "Summary", icon: <MdSummarize />, step: 4 },
     { id: "other", label: "Other", icon: <MdSummarize />, step: 4 },
    // { id: "preview", label: "Preview", icon: <MdCheckCircle />, step: 5 },
  ];

  const validateStep = () => {
    const newErrors = {};
    
    if (selectTab === "Personal_details") {
      if (!resumeData.personalInfo.firstName.trim()) newErrors.firstName = "First name is required";
      if (!resumeData.personalInfo.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!resumeData.personalInfo.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(resumeData.personalInfo.email)) newErrors.email = "Email is invalid";
      if (!resumeData.personalInfo.phone.trim()) newErrors.phone = "Phone is required";
    }
    
    if (selectTab === "experience") {
      resumeData.experience.forEach((exp, index) => {
        if (!exp.title.trim()) newErrors[`exp_title_${index}`] = "Job title is required";
        if (!exp.company.trim()) newErrors[`exp_company_${index}`] = "Company is required";
      });
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    
    const currentIndex = tabs.findIndex(tab => tab.id === selectTab);
    if (currentIndex < tabs.length - 1) {
      const nextTab = tabs[currentIndex + 1];
      setSelectTab(nextTab.id);
      setActiveStep(nextTab.step);
    }
  };

  const handlePrevious = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === selectTab);
    if (currentIndex > 0) {
      const prevTab = tabs[currentIndex - 1];
      setSelectTab(prevTab.id);
      setActiveStep(prevTab.step);
    }
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value,
      },
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleExperience = (e, id) => {
    const { name, value, type, checked } = e.target;
    const finalValue = type === "checkbox" ? checked : value;

    const filterData = resumeData.experience.map((item) =>
      item.id === id ? { ...item, [name]: finalValue } : item
    );

    setResumeData((prev) => ({ ...prev, experience: filterData }));
  };

  const addExperience = (e) => {
    e.preventDefault();
    const newExp = {
      id: Date.now(),
      title: "",
      company: "",
      city: "",
      country: "",
      starting_month: "",
      ending_month: "",
      currentwork: false,
      description: "",
    };
    setResumeData(prev => ({ ...prev, experience: [...prev.experience, newExp] }));
  };

  const removeExperience = (id) => {
    if (resumeData.experience.length > 1) {
      setResumeData(prev => ({
        ...prev,
        experience: prev.experience.filter(item => item.id !== id)
      }));
    }
  };

  const handleEducation = (e, id) => {
    const { name, value } = e.target;
    const updatedData = resumeData.education.map((item) =>
      item.id === id ? { ...item, [name]: value } : item
    );
    setResumeData((prev) => ({ ...prev, education: updatedData }));
  };

  const addEducation = (e) => {
    e.preventDefault();
    const newEdu = {
      id: Date.now(),
      degree: "",
      school: "",
      location: "",
      year: "",
      honors: "",
    };
    setResumeData(prev => ({ ...prev, education: [...prev.education, newEdu] }));
  };

  const removeEducation = (id) => {
    if (resumeData.education.length > 1) {
      setResumeData(prev => ({
        ...prev,
        education: prev.education.filter(item => item.id !== id)
      }));
    }
  };

  const handleAddSkill = (category, value) => {
    if (value.trim()) {
      setResumeData(prev => ({
        ...prev,
        skills: {
          ...prev.skills,
          [category]: [...prev.skills[category].filter(s => s.trim()), value.trim()]
        }
      }));
    }
  };

  const handleRemoveSkill = (category, indexToRemove) => {
    setResumeData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: prev.skills[category].filter((_, index) => index !== indexToRemove)
      }
    }));
  };

  const handleDownload = () => {
    // Implement download logic here
    console.log("Downloading resume data:", resumeData);
    alert("Resume download functionality to be implemented!");
  };
  const handelAddList = ()=>{
    setResumeData(prev=>({...prev,other:[...prev.other,otherFields]}))
setOtherFields({
    heading:"",
    des:"",
    list:[ ]

  })
  }
const hnadleRemoveOther=(ind)=>{
const allOther = resumeData.other.filter((_,index) =>index !=ind)
setResumeData(prev=>({...prev,other:allOther}))
}
const renderTemplate = () => {
  switch (slug) {
    case "resumeone":
      return <TemplateOne resumeData={resumeData} />;
    case "resumetwo":
      return <TemplateTwo resumeData={resumeData} />;
    case "resumethree":
      return <TemplateThree resumeData={resumeData} />;
    case "resumefour":
      return <TemplateFour resumeData={resumeData} />;
    case "resumefive":
      return <TemplateFive resumeData={resumeData} />;
    case "resumesix":
      return <TemplateSix resumeData={resumeData} />;
    default:
      return <div />; // ⬅️ IMPORTANT fallback
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {tabs.map((tab, index) => (
              <div key={tab.id} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    activeStep >= index
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-white border-gray-300 text-gray-400"
                  }`}
                >
                  {activeStep > index ? <MdCheckCircle size={20} /> : tab.icon}
                </div>
                {index < tabs.length - 1 && (
                  <div
                    className={`w-24 h-1 ${
                      activeStep > index ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-gray-600 font-medium">
            Step {activeStep + 1} of {tabs.length}: {tabs.find(t => t.id === selectTab)?.label}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Resume Builder
              </h2>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSelectTab(tab.id);
                      setActiveStep(tab.step);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      selectTab === tab.id
                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-200"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
              
              {/* Stats Card */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <h3 className="font-semibold text-gray-700 mb-2">Completion</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((activeStep + 1) / tabs.length) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {Math.round(((activeStep + 1) / tabs.length) * 100)}% Complete
                </p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <form onSubmit={(e) => e.preventDefault()}>
                  {selectTab === "Personal_details" && (
                    <PersonalDetailsSection
                      data={resumeData.personalInfo}
                      onChange={handlePersonalInfoChange}
                      errors={errors}
                    />
                  )}

                  {selectTab === "experience" && (
                    <ExperienceSection
                      experience={resumeData.experience}
                      onExperienceChange={handleExperience}
                      onAddExperience={addExperience}
                      onRemoveExperience={removeExperience}
                      errors={errors}
                    />
                  )}

                  {selectTab === "education" && (
                    <EducationSection
                      education={resumeData.education}
                      onEducationChange={handleEducation}
                      onAddEducation={addEducation}
                      onRemoveEducation={removeEducation}
                    />
                  )}

                  {selectTab === "skills" && (
                    <SkillsSection
                      skills={resumeData.skills}
                      onAddSkill={handleAddSkill}
                      onRemoveSkill={handleRemoveSkill}
                    />
                  )}

                  {selectTab === "summary" && (
                    <SummarySection
                      summary={resumeData.summary}
                      onChange={(e) => setResumeData(prev => ({...prev, summary: e.target.value}))}
                    />
                  )}

                  {selectTab === "preview" && (
                    <PreviewSection resumeData={resumeData} />
                  )}
                    {selectTab === "other" && (
                      <OtherSection hnadleRemoveOther={hnadleRemoveOther} other={resumeData.other} setOtherFields={setOtherFields} otherFields={otherFields} handelAddList={handelAddList}   />
                    // <PreviewSection resumeData={resumeData} />
                  )}
                </form>
              </div>

              {/* Navigation Buttons */}
              <div className="px-8 py-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between">
                  <button
                    onClick={handlePrevious}
                    disabled={activeStep === 0}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      activeStep === 0
                        ? "opacity-50 cursor-not-allowed bg-gray-200"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <MdArrowBack /> Previous
                  </button>
                  
                  {selectTab === "preview" ? (
                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg transition-all"
                    >
                      <MdDownload /> Download Resume
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg transition-all"
                    >
                      Next <MdArrowForward />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
 <div >
        <div ref={pdfRef} className="pdf-export">
  {renderTemplate()}
</div>
      </div>

 <div className="max-w-6xl mx-auto mb-6 flex justify-end px-4">
        <button
             onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold shadow-lg transition-all flex items-center gap-2"
        >
          Download PDF
        </button>
      </div>




    </div>

   
  );
};

// Component for Personal Details
const PersonalDetailsSection = ({ data, onChange, errors }) => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="border-b pb-4">
      <h3 className="text-2xl font-bold text-gray-800">
        Personal Details
      </h3>
      <p className="text-gray-600">
        Help recruiters get in touch with you
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField
        label="First Name"
        required
        icon={<FaUserAlt className="text-blue-500" />}
        name="firstName"
        value={data.firstName}
        onChange={onChange}
        error={errors.firstName}
        placeholder="John"
      />
      
      <InputField
        label="Last Name"
        required
        icon={<FaUserAlt className="text-blue-500" />}
        name="lastName"
        value={data.lastName}
        onChange={onChange}
        error={errors.lastName}
        placeholder="Doe"
      />
        <InputField
        label="Title"
        required
        type="text"
        icon={<MdTitle  className="text-blue-500" />}
        name="title"
        value={data.title}
        onChange={onChange}
        error={errors.title}
        placeholder="Title"
        myclass="col-span-2"
      />
      
      <InputField
        label="Email"
        required
        type="email"
        icon={<MdEmail className="text-blue-500" />}
        name="email"
        value={data.email}
        onChange={onChange}
        error={errors.email}
        placeholder="john.doe@example.com"
      />
      
      <InputField
        label="Phone"
        required
        type="tel"
        icon={<MdPhone className="text-blue-500" />}
        name="phone"
        value={data.phone}
        onChange={onChange}
        error={errors.phone}
        placeholder="+1 (555) 123-4567"
      />
      
      <InputField
        label="City"
        required
        icon={<MdLocationCity className="text-blue-500" />}
        name="city"
        value={data.city}
        onChange={onChange}
        error={errors.city}
        placeholder="New York"
      />
      
      <InputField
        label="Country"
        required
        icon={<FaGlobeAmericas className="text-blue-500" />}
        name="country"
        value={data.country}
        onChange={onChange}
        error={errors.country}
        placeholder="United States"
      />
      
     
    </div>
  </div>
);

// Component for Experience Section
const ExperienceSection = ({ experience, onExperienceChange, onAddExperience, onRemoveExperience, errors }) => (
  <div className="space-y-6">
    <div className="border-b pb-4">
      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <MdWork className="text-blue-600" /> Work Experience
      </h3>
      <p className="text-gray-600">Showcase your professional journey</p>
    </div>

    {experience.map((item, index) => (
      <div key={item.id} className="relative group p-6 bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
        {experience.length > 1 && (
          <button
            onClick={() => onRemoveExperience(item.id)}
            className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
            title="Remove experience"
          >
            <MdDelete size={22} />
          </button>
        )}

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Job Title"
              required
              name="title"
              value={item.title}
              onChange={(e) => onExperienceChange(e, item.id)}
              error={errors[`exp_title_${index}`]}
              placeholder="Senior Software Engineer"
            />
            
            <InputField
              label="Company"
              required
              name="company"
              value={item.company}
              onChange={(e) => onExperienceChange(e, item.id)}
              error={errors[`exp_company_${index}`]}
              placeholder="Google Inc."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="City"
              name="city"
              value={item.city}
              onChange={(e) => onExperienceChange(e, item.id)}
              placeholder="San Francisco"
            />
            
            <InputField
              label="Country"
              name="country"
              value={item.country}
              onChange={(e) => onExperienceChange(e, item.id)}
              placeholder="United States"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="month"
                name="starting_month"
                value={item.starting_month}
                onChange={(e) => onExperienceChange(e, item.id)}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="month"
                name="ending_month"
                value={item.currentwork ? "" : item.ending_month}
                onChange={(e) => onExperienceChange(e, item.id)}
                disabled={item.currentwork}
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                  item.currentwork ? "bg-gray-100 cursor-not-allowed" : "bg-white"
                }`}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={`current-${item.id}`}
              name="currentwork"
              checked={item.currentwork}
              onChange={(e) => onExperienceChange(e, item.id)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor={`current-${item.id}`} className="text-sm text-gray-700">
              I currently work here
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={item.description}
              onChange={(e) => onExperienceChange(e, item.id)}
              rows="3"
              className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="Describe your responsibilities and achievements..."
            />
          </div>
        </div>
      </div>
    ))}

    <button
      onClick={onAddExperience}
      className="w-full py-4 border-2 border-dashed border-blue-300 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
    >
      <MdAddCircle size={24} /> Add Another Experience
    </button>
  </div>
);

// Component for Education Section
const EducationSection = ({ education, onEducationChange, onAddEducation, onRemoveEducation }) => (
  <div className="space-y-6">
    <div className="border-b pb-4">
      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <MdSchool className="text-purple-600" /> Education
      </h3>
      <p className="text-gray-600">Add your academic background</p>
    </div>

    {education.map((item) => (
      <div key={item.id} className="relative group p-6 bg-gradient-to-br from-white to-purple-50 border border-purple-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
        {education.length > 1 && (
          <button
            onClick={() => onRemoveEducation(item.id)}
            className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
            title="Remove education"
          >
            <MdDelete size={22} />
          </button>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Degree / Field of Study"
            required
            icon={<MdSchool className="text-purple-500" />}
            name="degree"
            value={item.degree}
            onChange={(e) => onEducationChange(e, item.id)}
            placeholder="Bachelor of Science in Computer Science"
          />
          
          <InputField
            label="School / University"
            required
            icon={<MdWork className="text-purple-500" />}
            name="school"
            value={item.school}
            onChange={(e) => onEducationChange(e, item.id)}
            placeholder="Stanford University"
          />
          
          <InputField
            label="Location"
            icon={<MdLocationOn className="text-purple-500" />}
            name="location"
            value={item.location}
            onChange={(e) => onEducationChange(e, item.id)}
            placeholder="Stanford, CA"
          />
          
          <InputField
            label="Graduation Year"
            icon={<MdDateRange className="text-purple-500" />}
            name="year"
            value={item.year}
            onChange={(e) => onEducationChange(e, item.id)}
            placeholder="2020"
          />
          
          <div className="md:col-span-2">
            <InputField
              label="Honors / GPA / Achievements"
              icon={<MdStars className="text-yellow-500" />}
              name="honors"
              value={item.honors}
              onChange={(e) => onEducationChange(e, item.id)}
              placeholder="Summa Cum Laude, 3.9/4.0 GPA, Dean's List"
            />
          </div>
        </div>
      </div>
    ))}

    <button
      onClick={onAddEducation}
      className="w-full py-4 border-2 border-dashed border-purple-300 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
    >
      <MdAddCircle size={24} /> Add Another Education
    </button>
  </div>
);

// Component for Skills Section
const SkillsSection = ({ skills, onAddSkill, onRemoveSkill }) => (
  <div className="space-y-8">
    <div className="border-b pb-4">
      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <FaTools className="text-green-600" /> Skills
      </h3>
      <p className="text-gray-600">Highlight your technical and professional skills</p>
    </div>

    <SkillCategory
      title="Technical Skills"
      subtitle="Programming languages, frameworks, tools"
      icon={<MdCode className="text-green-600" />}
      colorClass="bg-green-100 text-green-800 border-green-200"
      accentColor="bg-gradient-to-r from-green-400 to-emerald-500"
      skills={skills.technical.filter(s => s.trim())}
      onAdd={(val) => onAddSkill('technical', val)}
      onRemove={(index) => onRemoveSkill('technical', index)}
    />

    <SkillCategory
      title="Professional Skills"
      subtitle="Soft skills, methodologies, leadership"
      icon={<MdGroups className="text-indigo-600" />}
      colorClass="bg-indigo-100 text-indigo-800 border-indigo-200"
      accentColor="bg-gradient-to-r from-indigo-400 to-purple-500"
      skills={skills.professional.filter(s => s.trim())}
      onAdd={(val) => onAddSkill('professional', val)}
      onRemove={(index) => onRemoveSkill('professional', index)}
    />
  </div>
);

// Component for Summary Section
const SummarySection = ({ summary, onChange }) => (
  <div className="space-y-6">
    <div className="border-b pb-4">
      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <MdSummarize className="text-orange-600" /> Professional Summary
      </h3>
      <p className="text-gray-600">Write a compelling summary about yourself</p>
    </div>

    <div className="relative">
      <textarea
        value={summary}
        onChange={onChange}
        rows="10"
        className="w-full px-4 py-4 bg-gradient-to-br from-white to-orange-50 border border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-300 text-gray-700 resize-none"
        placeholder="Experienced software engineer with 5+ years of expertise in full-stack development. Passionate about creating scalable solutions and leading cross-functional teams. Proven track record of delivering high-quality software products..."
      />
      <div className="absolute bottom-3 right-3 text-sm text-gray-400">
        {summary.length}/500 characters
      </div>
    </div>

    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-100">
      <h4 className="font-semibold text-gray-700 mb-2">💡 Tips for a great summary:</h4>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• Start with your professional title and years of experience</li>
        <li>• Mention key skills and specializations</li>
        <li>• Highlight major achievements or recognitions</li>
        <li>• Keep it concise and focused (3-5 sentences)</li>
        <li>• Use action verbs and quantifiable results</li>
      </ul>
    </div>
  </div>
);

// Component for Preview Section
const PreviewSection = ({ resumeData }) => (
  <div className="space-y-6">
    <div className="border-b pb-4">
      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <MdCheckCircle className="text-green-600" /> Resume Preview
      </h3>
      <p className="text-gray-600">Review your resume before downloading</p>
    </div>

    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
      <div className="space-y-6">
        <div className="border-b border-gray-700 pb-4">
          <h2 className="text-3xl font-bold">
            {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
          </h2>
          <div className="flex flex-wrap gap-4 mt-2 text-gray-300">
            <div className="flex items-center gap-1">
              <MdEmail size={16} /> {resumeData.personalInfo.email}
            </div>
            <div className="flex items-center gap-1">
              <MdPhone size={16} /> {resumeData.personalInfo.phone}
            </div>
            <div className="flex items-center gap-1">
              <MdLocationOn size={16} /> {resumeData.personalInfo.city}, {resumeData.personalInfo.country}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-300">Professional Summary</h3>
          <p className="text-gray-300">{resumeData.summary || "Add your professional summary"}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-300">Experience</h3>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold">{exp.title} • {exp.company}</h4>
              <p className="text-gray-400 text-sm">{exp.city}, {exp.country} • {exp.starting_month} - {exp.currentwork ? "Present" : exp.ending_month}</p>
              {exp.description && <p className="text-gray-300 mt-1">{exp.description}</p>}
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-300">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[...resumeData.skills.technical, ...resumeData.skills.professional]
              .filter(s => s.trim())
              .map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-900/50 rounded-full text-sm">
                  {skill}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
      <h4 className="font-semibold text-gray-800 mb-2">✅ Ready to Download!</h4>
      <p className="text-gray-600 text-sm">
        Your resume is ready. Click "Download Resume" to get your professionally formatted resume.
      </p>
    </div>
  </div>
);

// Reusable Input Field Component
const InputField = ({ label, required, icon, error,myclass="", ...props }) => (
  <div className={`space-y-1 ${myclass}`}>
    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
      {icon} {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      {...props}
      className={`w-full px-4 py-2.5 bg-white border ${
        error ? "border-red-300" : "border-gray-300"
      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// Enhanced Skill Category Component
const SkillCategory = ({ title, subtitle, icon, colorClass, accentColor, skills, onAdd, onRemove, }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault();
      onAdd(input.trim());
      setInput("");
    }
  };

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input.trim());
      setInput("");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          {icon} {title}
        </h4>
        {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a skill and press Enter..."
          className="flex-1 px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
        >
          <MdAdd size={20} />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 min-h-[48px]">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <div
              key={index}
              className={`relative group flex items-center gap-2 px-3 py-2 rounded-lg ${colorClass} border shadow-sm hover:shadow-md transition-all duration-200`}
            >
              <div className={`w-2 h-2 rounded-full ${accentColor}`} />
              <span className="font-medium">{skill}</span>
              <button
                onClick={() => onRemove(index)}
                className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
                title="Remove skill"
              >
                <MdClose size={16} />
              </button>
            </div>
          ))
        ) : (
          <div className="text-gray-400 italic text-sm">
            No skills added yet. Start typing above to add skills.
          </div>
        )}
      </div>


    </div>
  );
};

const OtherSection=({setOtherFields,otherFields,handelAddList,other,hnadleRemoveOther})=>{
const [fetures,setFetures]= useState("")

const handelFeature=(e)=>{
  if (e.key === 'Enter' && fetures.trim()) {
      e.preventDefault();
      setOtherFields(prev=>({...prev,list:[...prev.list,fetures]}))
      setFetures("");
    }
}

const handelDeleteList= (index)=>{
const getFilter = otherFields.list.filter((_,index2)=>index2 !==index);
setOtherFields(prev=>({...prev,list:getFilter}))
}



  return(<>

    <div>

<InputField  label="Heading" required={true} icon={<MdStars />} placeholder="Heading" value={otherFields.heading} onChange={(e)=>{
setOtherFields(prev=>({...prev,heading:e.target.value}))}} />

<InputField  label="Description"   placeholder="Description " value={otherFields.des} onChange={(e)=>{
setOtherFields(prev=>({...prev,des:e.target.value}))}} />

<InputField  label="fetures"  value={fetures}  placeholder="fetures " onChange={(e)=>setFetures(e.target.value)}  onKeyDown={(e)=>handelFeature(e)}  />
<div className="flex flex-wrap gap-3">
{otherFields.list.map((item,index)=>(
  <div key={index} className="flex items-center gap-1 bg-green-500/40 px-2 py-1 my-3 text-green-800 rounded-md">{item}
   <MdDelete  className="cursor-pointer" onClick={()=>handelDeleteList(index)}/>
    </div>
))}

<div className="flex justify-center w-full my-6">
 <div className="bg-green-600 text-white px-4 py-1 rounded-md cursor-pointer text-xl" onClick={handelAddList}> Add</div>
</div>
</div>
    </div>

    

{other.map((item, index) => {
  return (
    <div
      key={index}
      className="group relative mb-5 rounded-2xl border border-gray-800 
                
                 p-5 transition-all duration-300
                 hover:-translate-y-0.5 hover:border-blue-500/40
                 hover:shadow-lg hover:shadow-blue-500/10"
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
            {item.heading}
          </h3>
          <p className="mt-2 text-sm text-black leading-relaxed max-w-xl">
            {item.des}
          </p>
        </div>

        {/* Delete */}
        <button
          onClick={() => hnadleRemoveOther(index)}
          className="shrink-0 rounded-lg p-2 text-gray-500
                     hover:text-red-400 hover:bg-red-500/10
                     transition-all duration-200
                     opacity-80 group-hover:opacity-100"
          title="Delete item"
        >
          <MdDelete size={18} />
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {item?.list.map((itm, ind) => (
          <span
            key={ind}
            className="inline-flex items-center rounded-full
                       bg-gray-800/70 px-3 py-1
                       text-xs font-medium text-gray-300
                       border border-gray-700
                       hover:border-blue-400/40 hover:text-blue-300
                       transition-colors"
          >
            {itm}
          </span>
        ))}
      </div>

      {/* Accent line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px
                      bg-gradient-to-r from-transparent via-blue-500/30 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
})}



      </>
  )
}

export default ResumeForm;