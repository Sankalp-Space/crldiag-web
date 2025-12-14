import React, { useState } from "react";

export default function About() {
  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  const sections = [
    {
      id: 1,
      title: "DIRECTOR DESK",
      content:
        "With over 24 years experience in the Pathology Laboratory industry, Ravi Tomar brings a track record of success and entrepreneurship as the Founder and CMD of CRL Diagnostics Pvt. Ltd. Established in 2014, Mr. Tomar has steadily guided CRL from its origins as a Pathology Laboratory to a recognized innovator in areas such as being one of the best Pathology Labs in the industry. As a result, CRL has enjoyed year-over-year revenue growth and expansion since its inception. After 6 years of operations, CRL was twice recognized by Zee Business as one of the fastest growing and best Pathology Labs in North India. As Chairman and Managing Director, Mr. Tomar is responsible for overall corporate policy and strategy and for setting organizational priorities and goals. On a day-to-day basis, Mr. Tomar's focus is on the organization's strategic initiatives and investments. Prior to founding the Company, Mr. Tomar enjoyed a successful career at Renowned Pathology Labs. During his tenure, Mr. Tomar quickly established himself as a future young Vice President Sales and Marketing by leading the organization's efforts with some of its highest profile with renowned government and public customers such as the Indian Railways, Chain of Apollo Hospitals, and Ganga Ram Hospital. Mr. Tomar has also been a business leader in SAARC Countries. Mr. Tomar is the internal auditor for NABL. Mr. Tomar holds an MBA degree in Business Administration."
    },
    {
      id: 2,
      title: "BOARD OF DIRECTORS",
      content:
        "CRL sales team, a master Industry hand with extensive experience of running business Operations leads the Business development team. They are ably supported by a voracious Sales and Logistics team to support your day to dayInteractions and Trouble shooting. This team has been associated with large scale diagnostics industry and stabilized pathology labs at National level for over 24 years successfully."
    },
    {
      id: 3,
      title: "TECHNICAL TEAM AND ADVISERS",
      content:
        "CRL’s clinical team includes pathologists with training and practice exprience accress India. Its members provide a customize approach to diagnostics as a result of specialty training in disciplines such as Biochemisty, Hematology, Microbiology, Histopathology, Immunohistochemistry and Molecularpathology. Subspeciality experts in Dermatopathology, Gastrointestinal Pathology, Gynecologic pathology perform all histology assessment."
    },
    {
      id: 4,
      title: "VISION AND MISSION",
      content:
        "Vision<br />Committed to be the undisputed leader in providing world class diagnostic services, maintaining the highest ethical standards and quality.<br /><br />Mission<br />We shall achieve to be best in diagnostic testing, information and services to become India’s most valued company to patients, customers, colleagues, investors, business partners and the communities where we work and live in.<br /><br />We at CRL remain committed to meeting the changing and ever-growing diagnostic needs of the medical community.<br /><br />CRL continues to be a leader in offering wide range of diagnosis, prognosis and predictive genomics tests using state of the art knowledge and medical technology.<br /><br />CRL stands committed to realizing the vision and goal of making. CRL the first choice diagnostic company in India. CRL is the only diagnostic network in the country who has grown as fast as running 3 Regional Labs and 1500 Collection point’s in the Country within 4 Years.<br /><br />CRL employees, doctors, scientific and support staff all have a passion to perform. We recognize that we are only as good as the experience of every single customer or patient. We are committed to making the experience for all users of CRL services happy, satisfying and memorable. It is not always that we have good news to share when we test our patients. Our job is to report the facts as accurately and as rapidly as possible and with utmost respect and dignity.<br /><br />team includes pathologists with training and practice exprience accress India. Its members provide a customize approach to diagnostics as a result of specialty training in disciplines such as Biochemisty, Hematology, Microbiology, Histopathology, Immunohistochemistry and Molecularpathology. Subspeciality experts in Dermatopathology, Gastrointestinal Pathology, Gynecologic pathology perform all histology assessment."
    },
    {
      id: 5,
      title: "CORE VALUES",
      content:
        "To create the world we want, we must live it now. Guided by this belief, we commit to the following values:<br /><br />To build a work friendly environment.<br />Encourage growth in workplace.<br />Enhancing work.<br />To build a positive work field.<br />To be focused.<br />To appreciate the hard work of our employees.<br />To aim for progression.<br />Maintain healthy competition.<br />To respect the ethical and cultural values of everyone.<br />Always thrive for more.."
    },
    {
      id: 6,
      title: "FOCUS",
      content:
        "The very focus of the company is to maintain the standard<br /><br />Resource allocation<br />Creating the appropriate structure.<br />Assigning ownership and accountability.<br />Aligning the culture with strategy.<br />Control and performance measurement.<br />Feedback and reward systems"
    },
    {
      id: 7,
      title: "CORPORATE SOCIAL RESPONSIBILITY",
      content:
        "CSR of a company is a social responsibility of a company that will benefit the society.<br /><br />We are at CRL diagnostics Pvt Ltd are dedicated to serve the society at the best we can. It is our responsibility to pay back the society in every possible way we can.<br /><br />The CSR initiatives shall include the following activities.<br /><br />Vocational Education Programs in the healthcare delivery for Phlebotomists, Technicians and other similar vocations. These programs shall be conducted by the CRL at subsidized rates and could be enabled with support and certifications from accredited bodies. Initially CRL shall undertake to provide certification programs for Phlebotomists and DMLT certification. Concessions for women students may also be considered on merit.<br />Preventive Health Checkup Camps in underprivileged areas including villages, slum areas and other identified locations which are in the vicinity of the geographies that the Company operates in. There can be specific focus on women and children.<br />Promoting access to Healthcare including awareness programs, building awareness for healthier and hygienic living, cancer detection and disease prevention in general. Promote specific projects relating to lifestyle diseases including diabetes management, healthy heart and other non-communicable diseases.<br />Upliftment of Community through supporting projects for natural resource conservation, waste management, water management, providing safe drinking water, sanitation, vocational training and other such projects for the upliftment of community.<br />CRL drive Environmental Sustainability through plantation drives, protection of flora and fauna, promoting bio diversity, animal welfare and veterinary services, promoting alternative sources of energy and similar projects.<br />Promoting Programs for empowering women including specific vocational training and support to women welfare projects.<br />Welfare of Senior citizens, armed forces veterans, war widows and their dependents."
    }
  ];

  return (
    <div className="bg-white w-full pb-20">
      {/* Page Title */}
      <Navbar />

      {/* Top: Director text + Image */}
      <div className="max-w-6xl mx-auto mt-12 p-8 bg-[#0E0A47] text-white rounded-lg flex flex-col md:flex-row items-center gap-10">
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold">RAVI TOMAR</h2>
          <p className="text-xl mt-1">FOUNDER, CRL DIAGNOSTICS</p>

          <p className="mt-6 leading-relaxed text-sm opacity-90">
            With over 24 years of experience in the pathology laboratory
            industry, Ravi Tomar brings a proven record of success and visionary
            leadership as the Founder and CMD of CRL Diagnostics Pvt Ltd. He
            has played a major role in transforming diagnostic services with
            advanced technology and quality-driven processes.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-shrink-0">
          <img
            src="/dirimg.jpeg"
            className="w-[300px] h-[350px] object-cover rounded-md shadow-xl"
            alt="director"
          />
        </div>
      </div>

      {/* Accordion Section */}
      <div className="max-w-5xl mx-auto mt-14 space-y-4 px-4">

        {sections.map((sec) => (
          <div key={sec.id} className="border rounded-lg overflow-hidden">
            {/* Title */}
            <button
              onClick={() => toggle(sec.id)}
              className="w-full flex justify-between items-center p-4 bg-gray-100 text-[#0E0A47] font-semibold text-lg"
            >
              {sec.title}
              <span className="text-xl">
                {active === sec.id ? "−" : "+"}
              </span>
            </button>

            {/* Content */}
            {active === sec.id && (
              <div className="p-4 text-gray-700 text-sm leading-relaxed bg-white" dangerouslySetInnerHTML={{ __html: sec.content }} />
            )}
          </div>
        ))}

      </div>
      <Footer />
    </div>
  );
}
