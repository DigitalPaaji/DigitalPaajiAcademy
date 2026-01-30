"use client"
import React, { useState, useRef } from 'react';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe, 
  FaEdit, FaCheck, FaTimes, FaPrint, FaUser, FaBriefcase, 
  FaGraduationCap, FaAward, FaTools, FaUsers, FaPlus, FaTrashAlt, FaDownload 
} from 'react-icons/fa';
// import { IoLanguage } from 'react-icons/io5'; 
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResumeOne = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "Alex Johnson",
      title: "Senior Software Engineer",
      email: "alex.johnson@email.com",
      phone: "(123) 456-7890",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/alexjohnson",
      github: "github.com/alexjohnson",
      portfolio: "alexjohnson.dev"
    },
    summary: "Passionate software engineer with 8+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies.",
    experience: [
      {
        id: Date.now(),
        title: "Senior Software Engineer",
        company: "Tech Solutions Inc.",
        location: "San Francisco, CA",
        period: "2020 - Present",
        achievements: ["Led development of microservices", "Improved performance by 40%"]
      }
    ],
    education: [
      {
        id: Date.now() + 1,
        degree: "Bachelor of Science in Computer Science",
        school: "University of Texas",
        location: "Austin, TX",
        year: "2015",
        honors: "Magna Cum Laude"
      }
    ],
    skills: {
      technical: ["React", "Next.js", "TypeScript"],
      professional: ["Leadership", "Agile"]
    },
    certifications: ["AWS Solutions Architect"],
    languages: [{ name: "English", level: "Native" }]
  });

  const [activeChange, setActiveChange] = useState("");
  const [editingIndex, setEditingIndex] = useState({ section: "", index: null });
  const [tempValue, setTempValue] = useState("");
  const resumeRef = useRef();

  // --- CRUD LOGIC ---
  const addItem = (section, type = null) => {
    const newData = { ...resumeData };
    if (section === 'experience') {
      newData.experience.push({ id: Date.now(), title: "New Position", company: "Company", location: "City", period: "2024", achievements: ["Achievement 1"] });
    } else if (section === 'education') {
      newData.education.push({ id: Date.now(), degree: "New Degree", school: "University", location: "City", year: "2024", honors: "" });
    } else if (section === 'skills') {
      newData.skills[type].push("New Skill");
    } else if (section === 'certifications') {
      newData.certifications.push("New Certification");
    } else if (section === 'languages') {
      newData.languages.push({ name: "New Language", level: "Professional" });
    }
    setResumeData(newData);
  };

  const removeItem = (section, idOrIndex, type = null) => {
    const newData = { ...resumeData };
    if (section === 'experience') {
      newData.experience = newData.experience.filter(item => item.id !== idOrIndex);
    } else if (section === 'education') {
      newData.education = newData.education.filter(item => item.id !== idOrIndex);
    } else if (section === 'skills') {
      newData.skills[type] = newData.skills[type].filter((_, i) => i !== idOrIndex);
    } else if (section === 'certifications') {
      newData.certifications = newData.certifications.filter((_, i) => i !== idOrIndex);
    } else if (section === 'languages') {
      newData.languages = newData.languages.filter((_, i) => i !== idOrIndex);
    }
    setResumeData(newData);
  };

  const addAchievement = (expId) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === expId ? { ...exp, achievements: [...exp.achievements, "New achievement"] } : exp
      )
    }));
  };

  const removeAchievement = (expId, index) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === expId ? { ...exp, achievements: exp.achievements.filter((_, i) => i !== index) } : exp
      )
    }));
  };

  // --- EDITING LOGIC ---
  const startEdit = (section, field, index = null, currentValue = "") => {
    setActiveChange(section);
    setEditingIndex({ section: field, index });
    setTempValue(currentValue);
  };

  const saveEdit = () => {
    const { section, index } = editingIndex;
    let newData = { ...resumeData };

    if (section.startsWith('personal_')) {
      newData.personalInfo[section.replace('personal_', '')] = tempValue;
    } else if (section === 'summary') {
      newData.summary = tempValue;
    } else if (section.startsWith('exp_')) {
      const [_, id, field, achIdx] = section.split('_');
      newData.experience = newData.experience.map(exp => {
        if (exp.id === parseInt(id)) {
          if (field === 'ach') {
            const newAch = [...exp.achievements];
            newAch[parseInt(achIdx)] = tempValue;
            return { ...exp, achievements: newAch };
          }
          return { ...exp, [field]: tempValue };
        }
        return exp;
      });
    } else if (section.startsWith('edu_')) {
      const [_, id, field] = section.split('_');
      newData.education = newData.education.map(edu => edu.id === parseInt(id) ? { ...edu, [field]: tempValue } : edu);
    } else if (section.startsWith('skill_')) {
      const [_, type, idx] = section.split('_');
      newData.skills[type][parseInt(idx)] = tempValue;
    } else if (section.startsWith('cert_')) {
      newData.certifications[index] = tempValue;
    } else if (section.startsWith('lang_')) {
      const [_, idx, field] = section.split('_');
      newData.languages[parseInt(idx)][field] = tempValue;
    }

    setResumeData(newData);
    cancelEdit();
  };

  const cancelEdit = () => { setActiveChange(""); setEditingIndex({ section: "", index: null }); setTempValue(""); };

  const EditableField = ({ value, section, field, index = null, className = "", isTextArea = false }) => {
    const isEditing = activeChange === section && editingIndex.section === field && editingIndex.index === index;
    
    if (isEditing) {
      return (
        <div className="flex items-center gap-1 w-full">
          {isTextArea ? (
            <textarea value={tempValue} onChange={(e) => setTempValue(e.target.value)} className="w-full border-2 border-blue-400 rounded p-1 text-black outline-none" rows="3" autoFocus />
          ) : (
            <input value={tempValue} onChange={(e) => setTempValue(e.target.value)} className="w-full border-2 border-blue-400 rounded p-1 text-black outline-none font-normal" autoFocus />
          )}
          <div className="flex flex-col gap-1">
            <button onClick={saveEdit} className="bg-green-500 text-white p-1 rounded hover:bg-green-600"><FaCheck size={12}/></button>
            <button onClick={cancelEdit} className="bg-red-500 text-white p-1 rounded hover:bg-red-600"><FaTimes size={12}/></button>
          </div>
        </div>
      );
    }

    return (
      <div className="group relative inline-flex items-center w-full max-w-full overflow-hidden">
        <span className={`${className} truncate`}>{value || "Click to edit"}</span>
        <button onClick={() => startEdit(section, field, index, value)} className="ml-2 opacity-0 group-hover:opacity-100 transition text-blue-500 print:hidden">
          <FaEdit size={12} />
        </button>
      </div>
    );
  };

  const generatePDF = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, (canvas.height * pdfWidth) / canvas.width);
    pdf.save(`Resume_${resumeData.personalInfo.name}.pdf`);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 flex flex-col items-center gap-6">
      {/* Control Panel */}
      <div className="flex gap-4 print:hidden sticky top-4 z-50 bg-white/80 backdrop-blur p-3 rounded-xl shadow-xl border border-slate-200">
        <button onClick={generatePDF} className="flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium">
          <FaDownload size={16} /> Download PDF
        </button>
        <button onClick={() => window.print()} className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
          <FaPrint size={16} /> Print
        </button>
      </div>

      {/* Resume Paper */}
      <div ref={resumeRef} className="w-full ma bg-white shadow-2xl min-h-[297mm] p-12 flex flex-col gap-8 print:shadow-none print:p-0">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between border-b-4 border-slate-800 pb-6 gap-6">
          <div className="flex-1">
            <EditableField value={resumeData.personalInfo.name} section="h" field="personal_name" className="text-5xl font-black text-slate-800 tracking-tight block" />
            <EditableField value={resumeData.personalInfo.title} section="h" field="personal_title" className="text-xl text-blue-600 font-semibold mt-2 block" />
          </div>
          <div className="grid grid-cols-1 gap-2 text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2"><FaEnvelope size={14}/> <EditableField value={resumeData.personalInfo.email} section="c" field="personal_email" /></div>
            <div className="flex items-center gap-2"><FaPhone size={14}/> <EditableField value={resumeData.personalInfo.phone} section="c" field="personal_phone" /></div>
            <div className="flex items-center gap-2"><FaMapMarkerAlt size={14}/> <EditableField value={resumeData.personalInfo.location} section="c" field="personal_location" /></div>
            <div className="flex items-center gap-2 text-blue-500 font-bold"><FaGlobe size={14}/> <EditableField value={resumeData.personalInfo.portfolio} section="c" field="personal_portfolio" /></div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-10">
          {/* Main Column */}
          <div className="col-span-8 space-y-8">
            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold uppercase tracking-widest text-slate-800 border-b-2 border-slate-100 mb-4"><FaUser size={18}/> Summary</h3>
              <EditableField value={resumeData.summary} section="summary" field="summary" isTextArea className="text-slate-600 leading-relaxed italic" />
            </section>

            <section>
              <div className="flex justify-between items-center border-b-2 border-slate-100 mb-4">
                <h3 className="flex items-center gap-2 text-lg font-bold uppercase tracking-widest text-slate-800"><FaBriefcase size={18}/> Experience</h3>
                <button onClick={() => addItem('experience')} className="p-1 text-green-600 hover:bg-green-50 rounded print:hidden"><FaPlus size={18}/></button>
              </div>
              <div className="space-y-6">
                {resumeData.experience.map((exp) => (
                  <div key={exp.id} className="relative group/item">
                    <button onClick={() => removeItem('experience', exp.id)} className="absolute -left-8 top-1 opacity-0 group-hover/item:opacity-100 text-red-400 hover:text-red-600 print:hidden"><FaTrashAlt size={14}/></button>
                    <div className="flex justify-between font-bold text-slate-800">
                      <EditableField value={exp.title} section={`e_${exp.id}`} field={`exp_${exp.id}_title`} />
                      <EditableField value={exp.period} section={`e_${exp.id}`} field={`exp_${exp.id}_period`} className="text-sm text-blue-600" />
                    </div>
                    <div className="text-sm font-semibold text-slate-500 mb-2 flex gap-2">
                      <EditableField value={exp.company} section={`e_${exp.id}`} field={`exp_${exp.id}_company`} /> • 
                      <EditableField value={exp.location} section={`e_${exp.id}`} field={`exp_${exp.id}_location`} />
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-1">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="text-slate-600 text-sm group/ach relative">
                          <EditableField value={ach} section={`ea_${exp.id}_${i}`} field={`exp_${exp.id}_ach_${i}`} />
                          <button onClick={() => removeAchievement(exp.id, i)} className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover/ach:opacity-100 text-red-300 print:hidden"><FaTrashAlt size={10}/></button>
                        </li>
                      ))}
                      <button onClick={() => addAchievement(exp.id)} className="text-blue-400 text-xs font-bold mt-1 print:hidden hover:underline"> + Add Achievement</button>
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="col-span-4 space-y-8">
            <section>
              <div className="flex justify-between items-center border-b-2 border-slate-100 mb-4">
                <h3 className="flex items-center gap-2 text-lg font-bold uppercase tracking-widest text-slate-800"><FaTools size={16}/> Technical</h3>
                <button onClick={() => addItem('skills', 'technical')} className="text-green-600 print:hidden"><FaPlus size={14}/></button>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.technical.map((s, i) => (
                  <div key={i} className="group/s relative bg-slate-800 text-white px-3 py-1 rounded text-xs font-medium flex items-center">
                    <EditableField value={s} section={`st_${i}`} field={`skill_technical_${i}`} />
                    <button onClick={() => removeItem('skills', i, 'technical')} className="ml-1 opacity-0 group-hover/s:opacity-100 text-red-300 print:hidden"><FaTrashAlt size={10}/></button>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex justify-between items-center border-b-2 border-slate-100 mb-4">
                <h3 className="flex items-center gap-2 text-lg font-bold uppercase tracking-widest text-slate-800"><FaGraduationCap size={18}/> Education</h3>
                <button onClick={() => addItem('education')} className="text-green-600 print:hidden"><FaPlus size={14}/></button>
              </div>
              {resumeData.education.map(edu => (
                <div key={edu.id} className="mb-4 group/edu relative">
                  <button onClick={() => removeItem('education', edu.id)} className="absolute -left-6 top-0 opacity-0 group-hover/edu:opacity-100 text-red-400 print:hidden"><FaTrashAlt size={12}/></button>
                  <EditableField value={edu.degree} section={`ed_${edu.id}`} field={`edu_${edu.id}_degree`} className="font-bold text-slate-800 block leading-tight text-sm" />
                  <EditableField value={edu.school} section={`ed_${edu.id}`} field={`edu_${edu.id}_school`} className="text-xs text-slate-500 block" />
                  <EditableField value={edu.year} section={`ed_${edu.id}`} field={`edu_${edu.id}_year`} className="text-xs text-blue-600 font-bold" />
                </div>
              ))}
            </section>

            <section>
              <div className="flex justify-between items-center border-b-2 border-slate-100 mb-4">
                <h3 className="flex items-center gap-2 text-lg font-bold uppercase tracking-widest text-slate-800"><FaAward size={18}/> Certs</h3>
                <button onClick={() => addItem('certifications')} className="text-green-600 print:hidden"><FaPlus size={14}/></button>
              </div>
              <ul className="space-y-2">
                {resumeData.certifications.map((c, i) => (
                  <li key={i} className="text-xs font-semibold text-slate-600 group/c relative flex items-center gap-2">
                    <FaCheck size={10} className="text-blue-500 flex-shrink-0"/>
                    <EditableField value={c} section={`cert_${i}`} field={`cert_${i}`} index={i} />
                    <button onClick={() => removeItem('certifications', i)} className="opacity-0 group-hover/c:opacity-100 text-red-300 print:hidden"><FaTrashAlt size={10}/></button>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeOne;