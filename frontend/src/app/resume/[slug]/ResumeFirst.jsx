"use client";
import React from 'react';
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdWork,
  MdSchool,
  MdStar,
  MdLanguage,
  MdVerified,
  MdBusiness,
  MdCalendarToday,
  MdLink
} from 'react-icons/md';

const ResumeDisplay = ({ resumeData }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* Resume Container */}
      <div className="max-w-4xl mx-auto">
        {/* Resume Paper */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                </h1>
                <p className="text-blue-100 text-lg opacity-90">
                  {resumeData.experience[0]?.title || 'Professional'}
                </p>
                <p className="text-blue-200 text-sm mt-2 max-w-2xl">
                  {resumeData.summary || 'Experienced professional seeking new opportunities'}
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 min-w-[250px]">
                <div className="space-y-3">
                  {resumeData.personalInfo.email && (
                    <div className="flex items-center gap-3">
                      <MdEmail className="text-blue-200" />
                      <span className="text-sm">{resumeData.personalInfo.email}</span>
                    </div>
                  )}
                  
                  {resumeData.personalInfo.phone && (
                    <div className="flex items-center gap-3">
                      <MdPhone className="text-blue-200" />
                      <span className="text-sm">{resumeData.personalInfo.phone}</span>
                    </div>
                  )}
                  
                  {(resumeData.personalInfo.city || resumeData.personalInfo.country) && (
                    <div className="flex items-center gap-3">
                      <MdLocationOn className="text-blue-200" />
                      <span className="text-sm">
                        {resumeData.personalInfo.city}
                        {resumeData.personalInfo.city && resumeData.personalInfo.country && ', '}
                        {resumeData.personalInfo.country}
                      </span>
                    </div>
                  )}
                  
                  {resumeData.personalInfo.linkedin && (
                    <div className="flex items-center gap-3">
                      <MdBusiness className="text-blue-200" />
                      <span className="text-sm">{resumeData.personalInfo.linkedin}</span>
                    </div>
                  )}
                  
                  {resumeData.personalInfo.portfolio && (
                    <div className="flex items-center gap-3">
                      <MdLink className="text-blue-200" />
                      <span className="text-sm">{resumeData.personalInfo.portfolio}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Professional Summary */}
                {resumeData.summary && (
                  <Section title="Professional Summary" icon={<MdStar className="text-blue-600" />}>
                    <p className="text-gray-700 leading-relaxed">
                      {resumeData.summary}
                    </p>
                  </Section>
                )}

                {/* Work Experience */}
                {resumeData.experience.some(exp => exp.title || exp.company) && (
                  <Section title="Work Experience" icon={<MdWork className="text-blue-600" />}>
                    <div className="space-y-6">
                      {resumeData.experience.map((exp, index) => (
                        (exp.title || exp.company) && (
                          <div key={index} className="border-l-2 border-blue-200 pl-4 py-1">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                              <div>
                                <h3 className="font-bold text-lg text-gray-800">{exp.title}</h3>
                                <p className="text-gray-600 font-medium">{exp.company}</p>
                                {exp.description && (
                                  <p className="text-gray-700 mt-2 text-sm">{exp.description}</p>
                                )}
                              </div>
                              <div className="mt-2 md:mt-0">
                                <span className="inline-flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                  <MdCalendarToday size={14} />
                                  {exp.starting_month && formatDate(exp.starting_month)}
                                  {' - '}
                                  {exp.currentwork ? 'Present' : (exp.ending_month && formatDate(exp.ending_month))}
                                </span>
                              </div>
                            </div>
                            {(exp.city || exp.country) && (
                              <p className="text-gray-500 text-sm mt-1">
                                <MdLocationOn size={14} className="inline mr-1" />
                                {exp.city}
                                {exp.city && exp.country && ', '}
                                {exp.country}
                              </p>
                            )}
                          </div>
                        )
                      ))}
                    </div>
                  </Section>
                )}

                {/* Education */}
                {resumeData.education.some(edu => edu.degree || edu.school) && (
                  <Section title="Education" icon={<MdSchool className="text-blue-600" />}>
                    <div className="space-y-6">
                      {resumeData.education.map((edu, index) => (
                        (edu.degree || edu.school) && (
                          <div key={index} className="border-l-2 border-green-200 pl-4 py-1">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                              <div>
                                <h3 className="font-bold text-lg text-gray-800">{edu.degree}</h3>
                                <p className="text-gray-600 font-medium">{edu.school}</p>
                                {edu.honors && (
                                  <p className="text-green-600 font-medium text-sm mt-1">
                                    <MdVerified size={14} className="inline mr-1" />
                                    {edu.honors}
                                  </p>
                                )}
                              </div>
                              <div className="mt-2 md:mt-0">
                                {edu.year && (
                                  <span className="inline-flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                    {edu.year}
                                  </span>
                                )}
                              </div>
                            </div>
                            {edu.location && (
                              <p className="text-gray-500 text-sm mt-1">
                                <MdLocationOn size={14} className="inline mr-1" />
                                {edu.location}
                              </p>
                            )}
                          </div>
                        )
                      ))}
                    </div>
                  </Section>
                )}
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                
                {/* Skills */}
                {[...resumeData.skills.technical, ...resumeData.skills.professional]
                  .some(skill => skill.trim()) && (
                  <Section title="Skills" icon={<MdVerified className="text-blue-600" />}>
                    <div className="space-y-4">
                      {/* Technical Skills */}
                      {resumeData.skills.technical.filter(s => s.trim()).length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2 text-sm uppercase tracking-wider">
                            Technical
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {resumeData.skills.technical
                              .filter(skill => skill.trim())
                              .map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                          </div>
                        </div>
                      )}

                      {/* Professional Skills */}
                      {resumeData.skills.professional.filter(s => s.trim()).length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2 text-sm uppercase tracking-wider">
                            Professional
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {resumeData.skills.professional
                              .filter(skill => skill.trim())
                              .map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Section>
                )}

                {/* Certifications */}
                {resumeData.certifications.some(cert => cert.trim()) && (
                  <Section title="Certifications" icon={<MdVerified className="text-blue-600" />}>
                    <ul className="space-y-2">
                      {resumeData.certifications
                        .filter(cert => cert.trim())
                        .map((cert, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <MdVerified className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{cert}</span>
                          </li>
                        ))}
                    </ul>
                  </Section>
                )}

                {/* Languages */}
                {resumeData.languages.some(lang => lang.name) && (
                  <Section title="Languages" icon={<MdLanguage className="text-blue-600" />}>
                    <div className="space-y-3">
                      {resumeData.languages
                        .filter(lang => lang.name)
                        .map((lang, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-gray-700">{lang.name}</span>
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {lang.level}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div 
                                className="bg-blue-600 h-1.5 rounded-full"
                                style={{
                                  width: lang.level === 'Native' ? '100%' :
                                         lang.level === 'Fluent' ? '90%' :
                                         lang.level === 'Intermediate' ? '70%' :
                                         lang.level === 'Basic' ? '40%' : '60%'
                                }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </Section>
                )}

                {/* Projects */}
                {resumeData.projects?.some(proj => proj.title) && (
                  <Section title="Projects" icon={<MdBusiness className="text-blue-600" />}>
                    <div className="space-y-4">
                      {resumeData.projects
                        .filter(proj => proj.title)
                        .map((proj, index) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold text-gray-800">{proj.title}</h4>
                            {proj.description && (
                              <p className="text-gray-600 text-sm mt-1">{proj.description}</p>
                            )}
                            {proj.technologies && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {proj.technologies.split(',').map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded"
                                  >
                                    {tech.trim()}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </Section>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="text-center text-gray-500 text-sm">
              <p>Generated with Resume Builder • Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => window.print()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Print Resume
          </button>
          <button
            onClick={() => {
              // Implement download as PDF functionality
              alert('PDF download functionality would be implemented here');
            }}
            className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, icon, children }) => (
  <section className="space-y-4">
    <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
      {icon}
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
    <div>{children}</div>
  </section>
);

// Export with dynamic loading
export default function ResumeFirst({ resumeData }) {
  
  if (!resumeData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading resume...</p>
        </div>
      </div>
    );
  }

  return <ResumeDisplay resumeData={resumeData} />;
}