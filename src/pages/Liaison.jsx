import React, { useState } from "react";

const departments = [
  "Marketing",
  "PCR",
  "PCR",
  "R&D",
  "Tech",
];

const officerData = [
  { name: "Dhruv Duggal", image: "/DhruvDuggal.png" },
  { name: "Anmol Tewari", image: "/AnmolTewari.png" },
  { name: "Abhishek Sahoo", image: "/AbhishekSahoo.png" },
  { name: "Manshi Jaiswal", image: "/ManshiJaiswal.png" },
  { name: "Ayush Kshitij", image: "/AyushKshitij.png" },
];

const Liaison = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-black text-white py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Meet Our Liaison Officers
      </h2>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-wrap justify-center items-center gap-4">
        {departments.map((dept, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col items-center justify-center
              border border-white overflow-hidden
              transition-all duration-300 ease-in-out
              ${hoveredIndex === index
                ? "w-[200px] h-[300px] p-4"
                : "w-[60px] sm:w-[80px] md:w-[100px] h-[300px] p-0"}
            `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index ? (
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={officerData[index]?.image || "https://via.placeholder.com/96"}
                    alt={`${officerData[index]?.name || "Officer"} Profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl font-bold mb-1">{officerData[index]?.name || "Unknown"}</p>
                <p className="text-lg text-gray-300">{dept}</p>
              </div>
            ) : (
              <p className="text-3xl font-bold rotate-[-90deg] whitespace-nowrap">
                {dept}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center gap-6">
        {officerData.map((officer, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-gray-500 rounded-xl p-4 flex items-center justify-between shadow-md border border-neutral-700"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold">{officer.name}</h3>
              <p className="text-sm text-white">– {departments[index]}</p>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={officer.image}
                alt={officer.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Liaison;
