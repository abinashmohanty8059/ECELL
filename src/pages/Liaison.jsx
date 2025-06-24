import React, { useState } from "react";
import { Link } from "react-router-dom";


const departments = [
  "Marketing",
  "PCR",
  "HR", // Changed to HR for example, assuming distinct departments
  "R&D",
  "Tech",
];

// Array of officer details (name and image path)
// You should map images to officers properly,
// e.g., using an array of objects or an object mapping names to image paths.
// For now, I'll use placeholders.
const officerData = [
  { name: "Dhruv Duggal", image: "/DhruvDuggal.png" },
  { name: "Anmol Tewari", image: "/AnmolTewari.png" },
  { name: "Abhishek Sahoo", image: "/AbhishekSahoo.png" },
  { name: "Manshi Jaiswal", image: "/ManshiJaiswal.png" },
  { name: "Ayush Kshitij", image: "/AyushKshitij.png" },
];


const Liaison = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track which box is hovered

  return (
    <section className="bg-black text-white py-16"> {/* Added py-16 for vertical spacing */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Meet Our Liaison Officers
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 px-4">
        {departments.map((dept, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col items-center justify-center
              border border-white overflow-hidden
              transition-all duration-300 ease-in-out
              ${
                hoveredIndex === index
                  ? "w-[200px] h-[300px] p-4" // Expanded width and added padding when hovered
                  : "w-[60px] sm:w-[80px] md:w-[100px] h-[300px] p-0" // Original narrow width, no padding for narrow
              }
            `}
            onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
            onMouseLeave={() => setHoveredIndex(null)}  // Reset on mouse leave
          >
            {hoveredIndex === index ? (
              // Content to display when hovered (Expanded state)
              <div className="flex flex-col items-center text-center">
                {/* Image Placeholder - replace with actual image */}
                <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden mb-4">
                  <img
                    // Use officerData[index].image for dynamic image
                    src={officerData[index] ? officerData[index].image : "https://via.placeholder.com/96/888888/FFFFFF?text=N/A"}
                    alt={`${officerData[index] ? officerData[index].name : "Officer"} Profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Use officerData[index].name for dynamic officer name */}
                <p className="text-xl font-bold mb-1">
                  {officerData[index] ? officerData[index].name : "Unknown Officer"}
                </p>
                <p className="text-lg text-gray-300">{dept}</p> {/* Department name */}
              </div>
            ) : (
              // Content to display when not hovered (Narrow state)
              // Ensure text is centered and visible within the narrow box
              <p className="text-3xl md:text-3xl font-bold rotate-[-90deg] whitespace-nowrap text-center">
                 {/* Removed origin-bottom-left for better centering */}
                 {/* Added translate-x-1/2 or similar if still off-center */}
                {dept}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Liaison;