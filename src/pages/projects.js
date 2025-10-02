import React from 'react';
import { useState, useEffect } from 'react';
import { FiX  } from "react-icons/fi";
import Footer from '../components/Footer';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' or 'asc'

  useEffect(() => {
    // Fetch repositories from GitHub API
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Albertoh16/repos?sort=updated&per_page=100');
        const data = await response.json();
        setRepositories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc');
  };

  const sortedRepositories = [...repositories].sort((a, b) => {
    const dateA = new Date(a.updated_at);
    const dateB = new Date(b.updated_at);
    return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
  });

  const openProject = (repo) => {
    setSelectedProject(repo);
  }

  const closeProject = () => {
    setSelectedProject(null);
  }

  return (
    <div className="relative min-h-screen overflow-y-auto">

      {/* Main Container */}
      <div className='bg-mainTwo w-screen h-full flex flex-col items-center justify-center
      pt-10 pb-10 pl-5 pr-5
      md:pl-10 md:pr-10
      lg:pt-44
      '>

        {/* Sort Button Container */}
        <div className='w-full max-w-[1200px] flex justify-end mb-4'>
          <button
            onClick={toggleSortOrder}
            className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Sort: {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
          </button>
        </div>

        {/* Repository Container */}
        <div className='bg-mainFour grid gap-10 p-10 h-fit rounded-lg
        w-full grid-cols-1
        sm:w-[900px] sm:grid-cols-2
        lg:grid-cols-3
        xl:w-[1200px]
        '>

          {loading ? (
            <div className='text-mainRed text-2xl col-span-full text-center'>Loading repositories...</div>
          ) : (
            sortedRepositories.map((repo, index) => (
              <div
                key={repo.id}
                className='bg-main rounded-2xl border-black aspect-[1/1] border-[5px] align-middle p-3 cursor-pointer active:bg-gray-900
                lg:hover:bg-mainTwo
                h-full
                '
                onClick={() => openProject(repo)}
              >
                <div className='w-full h-full text-center rounded-2xl flex flex-col items-center justify-center text-MainRedThree font-bold p-5
                text-lg
                sm:text-xl
                md:text-2xl
                xl:text-3xl
                '>
                  <div className='break-words w-full uppercase'>{repo.name}</div>
                </div>
              </div>
            ))
          )}

        </div>

      </div>
    
        {selectedProject && (
          <div className='bg-black/50 fixed z-40 flex h-full w-screen inset-0 overflow-y-auto overscroll-contain touch-pan-y
          pt-28
          justify-center
          '>

            <div className='bg-main rounded-3xl mt-10 mb-10 border-2 border-MainRedTwo overflow-hidden
            h-fit
            w-[50%]
            flex flex-col
            '>

              <div className='h-[70px] flex items-center justify-center relative z-50 border-black border-b-2 bg-mainTwo'>
                <div className='h-full font-bold flex items-center justify-center p-10
                text-5xl text-white uppercase 
                '>
                  {selectedProject.name}
                </div>
                <FiX className='border-white border-2 rounded-md absolute text-white right-[20px] bg-black/30 text-[55px] cursor-pointer hover:bg-black/60 z-50' onClick={closeProject}/>
              </div>

              {/* Project Content */}
              <div className='p-5 text-white flex flex-col items-center'>

                {/* Description Section */}
                <div className='mb-4 w-full max-w-[900px] border-black border-2 rounded-md bg-mainThree'>
                  <h3 className='text-2xl font-bold mb-2 text-center border-black bg-mainTwo border-b-2 p-2'>Description</h3>
                  <p className='text-center p-2'>{selectedProject.description || 'No description available'}</p>
                </div>

                {/* Repository Details Section */}
                <div className='mb-4 w-full max-w-[900px] border-black border-2 rounded-md bg-mainThree'>
                  <h3 className='text-2xl font-bold mb-3 text-center border-black bg-mainTwo border-b-2 p-2'>Repository Details</h3>
                  <div className='grid grid-cols-2 gap-3 justify-items-center p-4'>
                    <p><strong>Primary Language:</strong> {selectedProject.language || 'Not specified'}</p>
                    <p><strong>Repository Size:</strong> {(selectedProject.size / 1024).toFixed(2)} MB</p>
                    <p><strong>Stars:</strong> {selectedProject.stargazers_count.toLocaleString()}</p>
                    <p><strong>Forks:</strong> {selectedProject.forks_count.toLocaleString()}</p>
                    <p><strong>Watchers:</strong> {selectedProject.watchers_count.toLocaleString()}</p>
                    <p><strong>Open Issues:</strong> {selectedProject.open_issues_count.toLocaleString()}</p>
                    <p><strong>Default Branch:</strong> {selectedProject.default_branch}</p>
                    <p><strong>License:</strong> {selectedProject.license?.name || 'None'}</p>
                    <p><strong>Visibility:</strong> {selectedProject.visibility || 'N/A'}</p>
                    <p><strong>Network Count:</strong> {selectedProject.network_count?.toLocaleString() || '0'}</p>
                    <p><strong>Subscribers:</strong> {selectedProject.subscribers_count?.toLocaleString() || '0'}</p>
                    <p><strong>Has Downloads:</strong> {selectedProject.has_downloads ? 'Yes' : 'No'}</p>
                  </div>
                </div>

                {/* Dates Section */}
                <div className='mb-4 w-full max-w-[900px] border-black border-2 rounded-md bg-mainThree'>
                  <h3 className='text-2xl font-bold mb-2 text-center border-black bg-mainTwo border-b-2 p-2'>Dates</h3>
                  <div className='text-center p-2'>
                    <p><strong>Created:</strong> {new Date(selectedProject.created_at).toLocaleDateString()} at {new Date(selectedProject.created_at).toLocaleTimeString()}</p>
                    <p><strong>Last Updated:</strong> {new Date(selectedProject.updated_at).toLocaleDateString()} at {new Date(selectedProject.updated_at).toLocaleTimeString()}</p>
                    <p><strong>Last Pushed:</strong> {new Date(selectedProject.pushed_at).toLocaleDateString()} at {new Date(selectedProject.pushed_at).toLocaleTimeString()}</p>
                  </div>
                </div>

                {/* Repository Status Section */}
                <div className='mb-4 w-full max-w-[900px] border-black border-2 rounded-md bg-mainThree'>
                  <h3 className='text-2xl font-bold mb-2 text-center  border-black bg-mainTwo border-b-2 p-2'>Repository Status</h3>
                  <div className='flex flex-wrap gap-2 justify-center p-2'>
                    {selectedProject.private && <span className='bg-red-600 px-2 py-1 rounded text-sm'>Private</span>}
                    {!selectedProject.private && <span className='bg-green-600 px-2 py-1 rounded text-sm'>Public</span>}
                    {selectedProject.fork && <span className='bg-yellow-600 px-2 py-1 rounded text-sm'>Forked</span>}
                    {selectedProject.archived && <span className='bg-gray-600 px-2 py-1 rounded text-sm'>Archived</span>}
                    {selectedProject.has_issues && <span className='bg-blue-600 px-2 py-1 rounded text-sm'>Issues Enabled</span>}
                    {selectedProject.has_wiki && <span className='bg-purple-600 px-2 py-1 rounded text-sm'>Wiki Enabled</span>}
                    {selectedProject.has_pages && <span className='bg-pink-600 px-2 py-1 rounded text-sm'>GitHub Pages</span>}
                  </div>
                </div>

                {selectedProject.topics && selectedProject.topics.length > 0 && (
                  <div className='mb-4'>
                    <h3 className='text-xl font-bold mb-2'>Topics</h3>
                    <div className='flex flex-wrap gap-2'>
                      {selectedProject.topics.map((topic, index) => (
                        <span key={index} className='bg-indigo-600 px-3 py-1 rounded-full text-sm'>
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.homepage && (
                  <div className='mb-4'>
                    <h3 className='text-xl font-bold mb-2'>Homepage</h3>
                    <a
                      href={selectedProject.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='text-blue-300 hover:text-blue-100 underline break-all'
                    >
                      {selectedProject.homepage}
                    </a>
                  </div>
                )}

                <div className='mt-4 mb-4 flex justify-center gap-4'>
                  <a
                    href={selectedProject.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block border-black border-2'
                  >
                    View on GitHub
                  </a>
                  {selectedProject.clone_url && (
                    <button
                      onClick={() => navigator.clipboard.writeText(selectedProject.clone_url)}
                      className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block border-black border-2'
                    >
                      Copy Clone URL
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>
        )}

      {/* Footer Container */}
      <div className='h-[200px] w-[100%] relative bg-mainThree min-w-[320px] flex mt-auto
      '>
          <Footer />
      </div>
    </div>
  );
}

export default Projects;