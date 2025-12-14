import React, { useState } from "react";

export default function Covid() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What documents are to be presented for getting tested for 2019-novel Coronavirus (SARS-CoV-2)?",
      a: "A valid government ID and doctor prescription (if applicable) are required."
    },
    {
      q: "If I have symptoms and my doctor prescribes the test, can I get my family also tested?",
      a: "Yes, family members can also be tested as per government guidelines."
    },
    {
      q: "What are the ways to book 2019-novel Coronavirus (SARS-CoV-2) testing?",
      a: "You can book through the website, helpline, or visit the nearest collection center."
    },
    {
      q: "What kind of sample is to be given and what is the medium of collection?",
      a: "Nasopharyngeal and oropharyngeal swabs collected in viral transport medium."
    },
    {
      q: "Can I visit any of the nearest centres to book the test or give the samples?",
      a: "Yes, you may visit authorized collection centers."
    },
    {
      q: "What's the sample transportation process?",
      a: "Samples are transported in cold chain as per ICMR guidelines."
    },
    {
      q: "What are the guidelines on test report sharing with the Govt.?",
      a: "Reports are shared with government authorities as mandated."
    },
    {
      q: "By when can I get my report?",
      a: "Reports are usually available within 24–48 hours."
    },
    {
      q: "How do I access my report?",
      a: "Reports can be downloaded from the portal or sent via email/SMS."
    },
    {
      q: "How do I interpret my report?",
      a: "Consult your physician for correct interpretation of the report."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center py-12">
        <p className="text-sm text-gray-500">Home / COVID-19</p>
        <h1 className="text-4xl font-bold text-slate-800 mt-2">COVID-19</h1>

        <button className="mt-6 bg-indigo-800 text-white px-6 py-3 rounded-md font-semibold">
          BOOK A COVID 19 TEST HERE
        </button>
      </div>

      {/* Title */}
      <h2 className="text-center text-3xl font-bold text-indigo-700 mb-10">
        PROTECT YOUR LOVED ONES, FOLLOW DO&apos;S AND DON&apos;TS
      </h2>

      {/* Do's and Don'ts */}
      <div className="max-w-5xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-4">DO&apos;S</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Wash your hands frequently with soap and water for at least 20 seconds.</li>
              <li>Maintain social distancing of at least 6 feet from others.</li>
              <li>Wear a mask covering your nose and mouth when in public.</li>
              <li>Cover your mouth and nose with a tissue or elbow when coughing or sneezing.</li>
              <li>Stay home if you feel unwell and seek medical attention.</li>
            </ul>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-red-800 mb-4">DON&apos;TS</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Do not touch your face, especially eyes, nose, and mouth.</li>
              <li>Avoid close contact with people who are sick.</li>
              <li>Do not share personal items like utensils, towels, or bedding.</li>
              <li>Avoid crowded places and non-essential travel.</li>
              <li>Do not ignore symptoms; consult a doctor immediately.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-slate-800 mb-6">
          Frequently Asked Questions ( FAQ&apos;s )
        </h3>

        <div className="border border-gray-300 bg-white">
          {faqs.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              {/* Question */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center gap-4 px-6 py-4 text-left text-red-600 font-semibold"
              >
                <span className="text-2xl">
                  {openIndex === index ? "–" : "+"}
                </span>
                {item.q}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-16 pb-6 text-slate-700 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Banking Details */}
      <div className="mt-16">
        <div className="bg-red-600 text-white text-center py-3 font-bold">
          BANKING DETAILS
        </div>

        <div className="max-w-5xl mx-auto bg-white border border-gray-300 p-6">
          <h4 className="text-blue-800 font-semibold text-lg">ICICI BANK</h4>
          <p className="text-gray-700 mt-2">Account Name: CRL Diagnostics Pvt Ltd</p>
          <p className="text-gray-700">Account Number: 1234567890</p>
          <p className="text-gray-700">IFSC Code: ICIC0001234</p>
          <p className="text-gray-700">Branch: Connaught Place, New Delhi</p>
        </div>
      </div>
    </div>
  );
}
