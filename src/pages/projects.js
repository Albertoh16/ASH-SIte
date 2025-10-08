import React from 'react';
import { useState, useEffect } from 'react';
import { FiX  } from "react-icons/fi";
import Footer from '../components/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' or 'asc'
  const [sortBy, setSortBy] = useState('updated'); // 'created', 'updated', 'alphabetical'
  const [readme, setReadme] = useState('');

  useEffect(() => {
    // Fetch repositories from GitHub API (including private repos)
    const fetchRepositories = async () => {
      try {
        // Using authenticated request to fetch both public and private repos
        // You need to set your GitHub Personal Access Token in an environment variable
        const token = process.env.REACT_APP_GITHUB_TOKEN; // Add your token to .env file

        const headers = token ? {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        } : {
          'Accept': 'application/vnd.github.v3+json'
        };

        const response = await fetch('https://api.github.com/users/Albertoh16/repos?per_page=100&sort=updated', {
          headers: headers
        });

        const data = await response.json();
        console.log('API Response:', data);
        console.log('Is Array?', Array.isArray(data));
        setRepositories(Array.isArray(data) ? data : []);
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

  // Remove duplicates, keeping the one with a homepage
  const uniqueRepos = Array.isArray(repositories) ? repositories.reduce((acc, repo) => {
    const existing = acc.find(r => r.name === repo.name);
    if (!existing) {
      acc.push(repo);
    } else if (repo.homepage && !existing.homepage) {
      // Replace with the one that has a homepage
      const index = acc.indexOf(existing);
      acc[index] = repo;
    }
    return acc;
  }, []) : [];

  const sortedRepositories = [...uniqueRepos]
    .filter(repo => repo.name !== 'AutoShortsCreator') // Exclude this repository
    .sort((a, b) => {
      let compareA, compareB;

      if (sortBy === 'created') {
        compareA = new Date(a.created_at);
        compareB = new Date(b.created_at);
      } else if (sortBy === 'updated') {
        compareA = new Date(a.updated_at);
        compareB = new Date(b.updated_at);
      } else if (sortBy === 'alphabetical') {
        compareA = a.name.toLowerCase();
        compareB = b.name.toLowerCase();
      }

      if (sortBy === 'alphabetical') {
        return sortOrder === 'desc' ? compareB.localeCompare(compareA) : compareA.localeCompare(compareB);
      } else {
        return sortOrder === 'desc' ? compareB - compareA : compareA - compareB;
      }
    });

  const openProject = async (repo) => {
    setSelectedProject(repo);
    setReadme('Loading README...');

    // Fetch README content
    try {
      const token = process.env.REACT_APP_GITHUB_TOKEN;
      const headers = token ? {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3.raw'
      } : {
        'Accept': 'application/vnd.github.v3.raw'
      };

      const response = await fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/readme`, {
        headers: headers
      });

      if (response.ok) {
        const readmeContent = await response.text();
        setReadme(readmeContent);
      } else {
        setReadme('No README available for this repository.');
      }
    } catch (error) {
      console.error('Error fetching README:', error);
      setReadme('Error loading README.');
    }
  }

  const closeProject = () => {
    setSelectedProject(null);
    setReadme('');
  }

  return (
    <div className="relative min-h-screen overflow-y-auto">

      {/* Main Container */}
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
              <option value="updated">Sort by Updated</option>
              <option value="created">Sort by Created</option>
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

          {/* Repository Container */}
          <div className='bg-mainFour grid h-fit rounded-lg border-MainRedTwo border-2
          grid-cols-2 gap-4 p-4 mt-2
          tiny:gap-5 tiny:p-5
          subAdj1:gap-6 subAdj1:p-6
          sm:grid-cols-2 sm:gap-8 sm:p-8
          lg:grid-cols-3 lg:gap-10 lg:p-10
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
              <div className='w-full h-full text-center rounded-2xl flex flex-col items-center justify-center text-MainRedThree font-bold p-[3.5]
              text-[3vw]
              md:text-[3vw]
              lg:text-[1.5vw]
              '>
                  <div className='break-words w-full uppercase'>{repo.name.replace(/-/g, ' ')}</div>
                </div>
              </div>
            ))
          )}

          </div>

        </div>

      </div>
    
        {selectedProject && (
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
                  {selectedProject.name}
                </div>
                <FiX className='border-white border-2 rounded-md absolute text-white bg-black/30 cursor-pointer hover:bg-black/60 z-50
                text-[40px] right-[10px]
                tiny:text-[45px]
                subAdj1:text-[50px] subAdj1:right-[15px]
                sm:text-[55px] sm:right-[20px]
                ' onClick={closeProject}/>
              </div>

              {/* Project Content */}
              <div className='p-5 text-white flex flex-col items-center'>

                {/* Description Section */}
                <div className='mb-4 w-full max-w-[900px] border-black border-2 rounded-md bg-mainThree'>
                  <h3 className='text-2xl font-bold mb-2 text-center border-black bg-mainTwo border-b-2 p-2'>Description</h3>
                  <div className='text-left p-4 overflow-auto max-h-[500px] prose prose-invert max-w-none
                    prose-headings:text-white prose-p:text-white prose-li:text-white prose-strong:text-white
                    prose-a:text-blue-400 prose-a:hover:text-blue-300 prose-code:text-pink-400
                    prose-pre:bg-gray-800 prose-pre:text-white prose-blockquote:text-gray-300'>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {readme || 'Loading README...'}
                    </ReactMarkdown>
                  </div>
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
                    {selectedProject.owner?.login === 'Albertoh16' ?
                      <span className='bg-orange-600 px-2 py-1 rounded text-sm'>Owner</span> :
                      <span className='bg-cyan-600 px-2 py-1 rounded text-sm'>Contributor</span>
                    }
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
                  <div className='mb-4 w-full max-w-[900px] border-black border-2 rounded-md bg-mainThree'>
                    <h3 className='text-2xl font-bold mb-2 text-center  border-black bg-mainTwo border-b-2 p-2'>Homepage</h3>
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
                    className='bg-MainRedThree hover:bg-MainRedTwo text-white font-bold py-2 px-4 rounded inline-block border-black border-2'
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

        {/* Footer Component */}
        <Footer />
    </div>
  );
}

export default Projects;