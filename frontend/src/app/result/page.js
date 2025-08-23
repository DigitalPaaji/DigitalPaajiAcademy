"use client";
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedButton from "../components/AnimatedButton";

// Dummy JSON data (4 students)
const students = [


  {
    code: "PTA/DM/25/001",
    certificate: "/Images/1.jpg",
  },
  {
    code: "PTA/DM/25/002",
    
    certificate: "/Images/2.jpg",
  },
  {
    code: "PTA/DM/25/003",
   
    certificate: "/Images/3.jpg",
  },
  {
    code: "PTA/DM/25/004",

    certificate: "/Images/4.jpg",
  },
    {
    code: "PTA/GD/25/001",
   
    certificate: "/Images/5.jpg",
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
      <h1 className="poppins text-2xl text-center xl:text-3xl font-bold mb-6">Student Certificate Verification</h1>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <input
          type="text"
          placeholder="Enter Student Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border px-4 py-2 rounded-lg focus:outline-none"
        />
<button
  onClick={handleSearch}
  className="relative overflow-hidden text-lg w-auto
             bg-gradient-to-r from-[#020813] to-[#061022] 
             text-white px-6 py-2 rounded-lg shadow-md 
             transition-all duration-500 ease-out 
             hover:scale-105  cursor-pointer"
>
  Search
</button>

      </div>

      {error && <p className="text-red-800 mt-4 text-center ">{error}</p>}

      {student && (
        <div className="mt-6 w-full max-w-4xl text-end">
      
 <motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: "auto", opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="overflow-hidden"
>
  <Image
    width={440}
    height={440}
    id="certificate-img"
    src={student.certificate}
    alt="Certificate"
    className="w-full h-auto lg:h-[700px] object-contain rounded-lg"
  />
</motion.div>
              {/* Enroll Now Button */}

 <AnimatedButton downloadPDF={downloadPDF} />


         
          {/* <button
            onClick={downloadPDF}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Download PDF
          </button> */}
        </div>
      )}
    </div>
  );
}
