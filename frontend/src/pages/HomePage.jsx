import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="p-12 text-center">
          <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow-sm">✨ URL Shortener</h1>
          <p className="text-gray-700 mb-10 text-lg">Transform your long, messy URLs into sleek, shareable links</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-indigo-50 rounded-xl p-4 shadow-sm">
              <h3 className="text-indigo-700 font-semibold">⚡ Fast</h3>
              <p className="text-gray-600 text-sm">Instantly shorten and share your links.</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-4 shadow-sm">
              <h3 className="text-pink-700 font-semibold">🔒 Secure</h3>
              <p className="text-gray-600 text-sm">Your data is safe and protected.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 shadow-sm">
              <h3 className="text-purple-700 font-semibold">🌍 Shareable</h3>
              <p className="text-gray-600 text-sm">Use your links anywhere, anytime.</p>
            </div>
          </div>
        </div>

        <div className="px-8 pb-10">
          <UrlForm />
        </div>
        <div className="px-8 pb-10">
          <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700">
            "This URL Shortener made sharing links so much easier for my team!"
          </blockquote>
          <p className="text-right text-sm text-gray-500 mt-2">– Happy User</p>
        </div>
        
        <div className="bg-gradient-to-r from-indigo-100 to-pink-100 p-6 border-t border-gray-300">
          <p className="text-center text-gray-700 text-sm italic">
            Your links are safe, fast, and never expire 🚀
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
