import React from 'react';
import { useState } from 'react';
import UKG from '../assets/UKGLogo.png'
import UKGTeam from '../assets/UKGTeam.png'
import mercedes from '../assets/mercedesLogo.png'
import mercedesBuilding from '../assets/mercedesBuilding.png'
import MDC from '../assets/MDCLogo.png'
import MDCFriends from '../assets/friends.jpg'
import FeamAero from '../assets/FeamAeroLogo.png'
import Footer from '../components/Footer';
import experiencesData from '../data/experiences.json';
import { FiX } from "react-icons/fi";

function Experience() {
  // Image mapping
  const imageMap = {
    'UKGLogo.png': UKG,
    'UKGTeam.png': UKGTeam,
    'mercedesLogo.png': mercedes,
    'mercedesBuilding.png': mercedesBuilding,
    'MDCLogo.png': MDC,
    'friends.jpg': MDCFriends,
    'FeamAeroLogo.png': FeamAero
  };

  // Helper to format dates
  const formatDate = (dateStr) => {
    if (dateStr === 'Present') return 'Present';
    const [year, month] = dateStr.split('-');
    return `${month}/${year}`;
  };

  // Selected experience for modal
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' or 'asc'
  const [sortBy, setSortBy] = useState('startDate'); // 'startDate', 'endDate', 'alphabetical'

  const openExperience = (experience) => {
    setSelectedExperience(experience);
  };

  const closeExperience = () => {
    setSelectedExperience(null);
  };

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc');
  };

  // Sort experiences based on sortBy and sortOrder
  const sortedExperiences = [...experiencesData].sort((a, b) => {
    let compareA, compareB;

    if (sortBy === 'startDate') {
      compareA = new Date(a.startDate);
      compareB = new Date(b.startDate);
    } else if (sortBy === 'endDate') {
      compareA = a.endDate === 'Present' ? new Date() : new Date(a.endDate);
      compareB = b.endDate === 'Present' ? new Date() : new Date(b.endDate);
    } else if (sortBy === 'alphabetical') {
      compareA = a.company.toLowerCase();
      compareB = b.company.toLowerCase();
    }

    if (sortBy === 'alphabetical') {
      return sortOrder === 'desc' ? compareB.localeCompare(compareA) : compareA.localeCompare(compareB);
    } else {
      return sortOrder === 'desc' ? compareB - compareA : compareA - compareB;
    }
  });


  return (
    <div className="relative min-h-screen overflow-y-auto">

      {/*Main Container*/}
      <div className='bg-gradient-to-b from-mainTwo via-mainTwo to-black/25 w-screen h-full flex flex-col items-center justify-center
      pt-20 pb-10 px-3
      subAdj1:px-5
      sm:px-8
      md:px-10 md:pt-24
      lg:pt-44
      xl:px-12
      2xl:px-16
      '>

        {/* Wrapper for Grid and Controls */}
        <div className='relative w-[90%] max-w-[1200px] mt-10'>
          {/* Sort Controls - Fixed to Top Right, Outside Grid */}
          <div className='absolute top-0 right-0 flex flex-col gap-2 z-10 -translate-y-[calc(100%+0.5rem)]
          tiny:gap-2
          subAdj1:flex-row subAdj1:gap-3
          sm:gap-4
          '>
            {/* Sort By Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='bg-MainRedThree hover:bg-MainRedTwo text-white font-bold rounded cursor-pointer border-2 border-black
              py-1 px-2 text-sm
              subAdj1:py-2 subAdj1:px-3 subAdj1:text-base
              sm:py-2 sm:px-4
              '
            >
              <option value="startDate">Sort by Start Date</option>
              <option value="endDate">Sort by End Date</option>
              <option value="alphabetical">Sort Alphabetically</option>
            </select>

            {/* Sort Order Button */}
            <button
              onClick={toggleSortOrder}
              className='bg-MainRedThree hover:bg-MainRedTwo text-white font-bold rounded border-2 border-black
              py-1 px-2 text-sm
              subAdj1:py-2 subAdj1:px-3 subAdj1:text-base
              sm:py-2 sm:px-4
              '
            >
              {sortOrder === 'desc' ? '↓ Descending' : '↑ Ascending'}
            </button>
          </div>

          {/* Experience Container */}
          <div className='bg-mainFour grid h-fit rounded-lg border-MainRedTwo border-2
          grid-cols-2 gap-4 p-4 mt-2
          tiny:gap-5 tiny:p-5
          subAdj1:gap-6 subAdj1:p-6
          sm:grid-cols-2 sm:gap-8 sm:p-8
          lg:grid-cols-3 lg:gap-10 lg:p-10
          '>

        {/* Dynamically render experience cards */}
        {sortedExperiences.map((experience) => (
          <div
            key={experience.id}
            className='bg-main rounded-2xl border-black aspect-[1/1] border-[5px] align-middle p-3 cursor-pointer active:bg-gray-900
            lg:hover:bg-mainTwo
            '
            onClick={() => openExperience(experience)}
          >
            <div className='w-full h-full text-center rounded-2xl flex flex-col items-center justify-center text-MainRedThree font-bold p-[3.5]
            text-[3vw]
            md:text-[3vw]
            lg:text-[1.5vw]
            '>
              <div className='break-words w-full uppercase'>{experience.company}</div>
            </div>
          </div>
        ))}

          </div>

        </div>

      </div>

      {/* Experience Modal */}
      {selectedExperience && (
        <div className='bg-black/50 fixed z-40 flex h-full w-screen inset-0 overflow-y-auto
        pt-28
        justify-center
        '>

          <div className='bg-main rounded-3xl mt-10 mb-10 border-2 border-MainRedTwo overflow-hidden
          h-fit
          flex flex-col
          w-[95%] max-w-[500px]
          tiny:w-[90%]
          subAdj1:max-w-[600px]
          sm:w-[85%] sm:max-w-[700px]
          md:w-[80%] md:max-w-[800px]
          lg:w-[70%] lg:max-w-[900px]
          xl:w-[65%] xl:max-w-[1000px]
          2xl:w-[60%] 2xl:max-w-[1100px]
          '>

            <div className='min-h-[70px] flex items-center justify-center relative z-50 border-black border-b-2 bg-mainTwo py-2'>
              <div className='font-bold flex items-center justify-center uppercase w-full text-center leading-tight overflow-wrap-anywhere break-all text-white
              text-base px-12 max-w-[80%]
              tiny:text-lg
              subAdj1:text-xl subAdj1:px-14
              sm:text-2xl sm:px-16 sm:max-w-[85%]
              md:text-3xl md:px-12
              ' style={{wordBreak: 'break-all', overflowWrap: 'anywhere'}}>
                {selectedExperience.company}
              </div>
                <FiX className='border-white border-2 rounded-md absolute text-white bg-black/30 cursor-pointer hover:bg-black/60 z-50
                text-[40px] right-[10px]
                tiny:text-[45px]
                subAdj1:text-[50px] subAdj1:right-[15px]
                sm:text-[55px] sm:right-[20px]
                ' onClick={closeExperience}/>
            </div>

            {/* Experience Content */}
            <div className='p-5 text-white flex flex-col items-center'>

              {/* Company Logo Section */}
              {selectedExperience.logo && (
                <div className='mb-4 w-full max-w-[900px] flex justify-center'>
                  <img
                    src={imageMap[selectedExperience.logo]}
                    alt={`${selectedExperience.company} logo`}
                    className='h-24 w-auto object-contain
                    sm:h-32
                    md:h-40
                    '
                  />
                </div>
              )}

              {/* Position & Dates Section */}
              <div className='mb-4 w-full max-w-[900px] border-black border-2 rounded-md bg-mainThree'>
                <h3 className='text-2xl font-bold mb-2 text-center border-black bg-mainTwo border-b-2 p-2'>Position</h3>
                <div className='text-center p-4'>
                  <p className='text-xl font-semibold mb-2'>{selectedExperience.position}</p>
                  <p className='text-lg'><strong>Duration:</strong> {formatDate(selectedExperience.startDate)} - {formatDate(selectedExperience.endDate)}</p>
                  <p className='text-lg'><strong>Location:</strong> {selectedExperience.location}</p>
                </div>
              </div>

              {/* Responsibilities Section */}
              {selectedExperience.descriptions && selectedExperience.descriptions.length > 0 && (
                <div className='mb-4 w-full max-w-[900px] border-black border-2 rounded-md bg-mainThree'>
                  <h3 className='text-2xl font-bold mb-2 text-center border-black bg-mainTwo border-b-2 p-2'>Responsibilities</h3>
                  <div className='p-4'>
                    <ul className='list-disc list-inside space-y-2'>
                      {selectedExperience.descriptions.map((desc, idx) => (
                        <li key={idx} className='text-base'>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Skills Section */}
              {selectedExperience.skills && selectedExperience.skills.length > 0 && (
                <div className='mb-4 w-full max-w-[900px] border-black border-2 rounded-md bg-mainThree'>
                  <h3 className='text-2xl font-bold mb-2 text-center border-black bg-mainTwo border-b-2 p-2'>Skills & Technologies</h3>
                  <div className='p-4'>
                    <div className='flex flex-wrap gap-2'>
                      {selectedExperience.skills.map((skill, idx) => (
                        <span key={idx} className='bg-MainRedThree px-3 py-1 rounded-full text-sm font-semibold'>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Personal Notes Section */}
              {selectedExperience.personalNotes && selectedExperience.personalNotes.length > 0 && (
                <div className='mb-4 w-full max-w-[900px] border-black border-2 rounded-md bg-mainThree'>
                  <h3 className='text-2xl font-bold mb-2 text-center border-black bg-mainTwo border-b-2 p-2'>Personal Notes</h3>
                  <div className='p-4 space-y-4'>
                    {selectedExperience.images && selectedExperience.images[0] && (
                      <img src={imageMap[selectedExperience.images[0]]} alt={selectedExperience.company} className='w-full aspect-[2/1] object-cover border-black border-2 rounded'/>
                    )}
                    {selectedExperience.personalNotes[0] && (
                      <p className='text-base leading-relaxed'>{selectedExperience.personalNotes[0]}</p>
                    )}
                    {selectedExperience.images && selectedExperience.images[1] && (
                      <img src={imageMap[selectedExperience.images[1]]} alt={selectedExperience.company} className='w-full aspect-[2/1] object-cover border-black border-2 rounded'/>
                    )}
                    {selectedExperience.personalNotes[1] && (
                      <p className='text-base leading-relaxed'>{selectedExperience.personalNotes[1]}</p>
                    )}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      )}

      {/* Footer Container */}
      <Footer />
    </div>
  );
}

export default Experience;
