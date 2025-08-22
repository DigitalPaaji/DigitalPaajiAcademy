"use client";
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Image from "next/image";

// Dummy JSON data (4 students)
const students = [
  {
    code: "STU001",
    name: "Aman Sharma",
    fatherName: "Rajesh Sharma",
    course: "Full Stack Development",
    duration: "6 Months",
    certificate: "/Images/certificate.webp",
  },
  {
    code: "STU002",
    name: "Simran Kaur",
    fatherName: "Harpreet Singh",
    course: "Digital Marketing",
    duration: "3 Months",
    certificate: "/Images/certificate.webp",
  },
  {
    code: "STU003",
    name: "Rahul Verma",
    fatherName: "Suresh Verma",
    course: "Data Analysis",
    duration: "4 Months",
    certificate: "/Images/certificate.webp",
  },
  {
    code: "STU004",
    name: "Priya Mehta",
    fatherName: "Anil Mehta",
    course: "UI/UX Design",
    duration: "5 Months",
    certificate: "/Images/certificate.webp",
  },
];

export default function CertificatePage() {
  const [code, setCode] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const found = students.find((s) => s.code === code.trim().toUpperCase());
    if (found) {
      setStudent(found);
      setError("");
    } else {
      setStudent(null);
      setError("❌ Invalid Student Code. Please try again.");
    }
  };

  const downloadPDF = async () => {
    if (!student) return;

    const input = document.getElementById("certificate-img");
    const canvas = await html2canvas(input, { useCORS: true });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "mm", "a4"); // landscape for certificates
    const imgWidth = 297; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(`${student.code}_certificate.pdf`);
  };

  return (
    <div className="flex flex-col items-center justify-center  p-6 my-40">
      <h1 className="poppins text-md xl:text-2xl font-bold mb-6">Student Certificate Verification</h1>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Student Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border px-4 py-2 rounded-lg w-64 focus:outline-none"
        />
<button
  onClick={handleSearch}
  className="relative overflow-hidden text-lg w-full md:w-auto
             bg-gradient-to-r from-[#020813] to-[#061022] 
             text-white px-6 py-2 rounded-lg shadow-md 
             transition-all duration-500 ease-out 
             hover:scale-105  cursor-pointer"
>
  Search
</button>

      </div>

      {error && <p className="text-red-800 mt-4">{error}</p>}

      {student && (
        <div className="mt-6 p-4 shadow rounded-lg w-full max-w-4xl text-end">
      
          <Image
          width={440}
          height={440}
            id="certificate-img"
            src={student.certificate}
            alt="Certificate"
            className="mt-4 w-full h-auto object-cover rounded-lg"
          />
          <button
            onClick={downloadPDF}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}
