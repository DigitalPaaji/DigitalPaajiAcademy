"use client";
import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedButton from "../components/AnimatedButton";

export default function CertificatePage() {
  const [students, setStudents] = useState([]);
  const [code, setCode] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  // ✅ Fetch students.json from public/data
  useEffect(() => {
    fetch("/Students.json")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch(() => {
        toast.error("⚠️ Failed to load student data");
      });
  }, []);

  const handleSearch = () => {
    const found = students.find(
      (s) => s.code.toUpperCase() === code.trim().toUpperCase()
    );
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

    const pdf = new jsPDF("landscape", "mm", "a4");
    const imgWidth = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(`${student.code}_certificate.pdf`);
    toast.success("Certificate downloaded successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 my-40">
      <ToastContainer position="top-right" style={{ zIndex: 99999 }} autoClose={3000} />
      <h1 className="poppins text-2xl text-center xl:text-3xl font-bold mb-6">
        Student Certificate Verification
      </h1>

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
             hover:scale-105 cursor-pointer"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-800 mt-4 text-center">{error}</p>}

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
          <AnimatedButton downloadPDF={downloadPDF} />
        </div>
      )}
    </div>
  );
}
