import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Department() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  const departments = [
    {
      id: 1,
      title: "Biochemistry and Immunology Department",
      content:
        "The Biochemistry and Immunology Department is equipped with fully automated analyzers to deliver precise biochemical and immunological testing with high accuracy and reliability."
    },
    {
      id: 2,
      title: "Haematology & Clinical Path Department",
      content:
        "This department provides complete hematological and clinical pathology services including blood counts, coagulation studies, and peripheral smear examinations."
    },
    {
      id: 3,
      title: "Microbiology and Serology Department",
      content:
        "Our Microbiology and Serology Department performs culture, sensitivity, and serological testing using advanced diagnostic methodologies."
    },
    {
      id: 4,
      title: "Histopathology Department",
      content:
        "The Histopathology Department specializes in tissue diagnosis supported by experienced pathologists and state-of-the-art equipment."
    },
    {
      id: 5,
      title: "Molecular Department",
      content:
        "This department focuses on molecular diagnostics including PCR-based testing, genetic analysis, and advanced molecular techniques."
    }
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 pt-6 text-sm text-gray-500">
        Home / <span className="text-gray-700">Department</span>
      </div>

      {/* Page Title */}
      <h1 className="text-center text-4xl font-bold mt-6 text-[#16353f]">
        DEPARTMENT
      </h1>

      {/* Accordion */}
      <div className="max-w-6xl mx-auto mt-10 bg-white border">
        {departments.map((dept) => (
          <div key={dept.id} className="border-b last:border-b-0">
            <button
              onClick={() => toggle(dept.id)}
              className="w-full flex items-center gap-3 px-6 py-4 text-left"
            >
              <span className="text-red-600 text-2xl font-bold">
                {open === dept.id ? "−" : "+"}
              </span>
              <span className="text-red-600 font-semibold text-lg">
                {dept.title}
              </span>
            </button>

            {open === dept.id && (
              <div className="px-12 pb-6 text-gray-700 text-sm leading-relaxed">
                {dept.content}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Info Section */}
      <div className="max-w-5xl mx-auto mt-12 text-center px-4 text-[#16353f] space-y-6 text-sm font-medium">
        <p>
          With all of this each floor of the laboratory is fully equipped with
          high intensity Air Conditioners, Cold Room, Refrigerators, Incubators,
          Autoclaves and proper cold storage for each department to support the
          smooth functioning of the laboratory.
        </p>

        <p>
          <span className="font-semibold">Power Sources :</span> Redundant Power
          sources through BSES Commercial Meters With Online Ups And Generators
        </p>

        <p>
          <span className="font-semibold">Internet Sources :</span> Redundant
          internet leased lines with Airtel, ACT, Reliance and other service
          providers.
        </p>

        <p>
          We are Microsoft and Linux Certified LAB, having GPL and Proprietary
          licensed products from multiple vendors.
        </p>
      </div>
    </div>
  );
}
