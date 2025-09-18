import React, { useState } from 'react'
import { createShortUrl } from '../api/shortUrl.api';

const UrlForm = () => {
  const [url,setUrl]=useState('http://www.google.com');
  const [shortUrl,setShortUrl]=useState('');
  const [copied,setCopied]=useState(false);
  const handleSubmit=async()=>{
    const shortUrl=await createShortUrl(url);
    setShortUrl(shortUrl);
  }
  

  const [isLoading, setIsLoading] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(shortUrl)
      .then(() =>{setCopied(true)
        setTimeout(() => setCopied(false), 2000)})
      .catch(err => console.error('Failed to copy:', err))
  }
  return (
    <>
    <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-2">
              <input 
                type="url" 
                name="url"
                value={url}
                onInput={(e)=>setUrl(e.target.value)}
                required
                placeholder="Enter your long URL here..." 
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                disabled={isLoading}
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-70"
              >
                Shorten URL
              </button>
            </div>
          </div>
          
          {shortUrl ? (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Your shortened URL:</p>
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  readOnly 
                  value={shortUrl}
                  className="flex-1 p-2 bg-white border border-gray-300 rounded-lg"
                />
                <button 
                  onClick={copyToClipboard}
                  className={`${
                    copied 
                      ? 'bg-green-500 text-white' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  } font-medium py-2 px-4 rounded-lg transition-colors`}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Your shortened URL will appear here</p>
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  readOnly 
                  placeholder="https://short.url/abcdef" 
                  className="flex-1 p-2 bg-white border border-gray-300 rounded-lg"
                />
                <button 
                  onClick={copyToClipboard}
                  className={`${
                    copied 
                      ? 'bg-green-500 text-white' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  } font-medium py-2 px-4 rounded-lg transition-colors`}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          )}
    </>
  )
}

export default UrlForm
