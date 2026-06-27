import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const FooterForm = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '',
    interest: '',
    otherInterest: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await addDoc(collection(db, 'waitlist'), {
        name: formData.name,
        email: formData.email,
        interest: formData.interest === 'Other' ? formData.otherInterest : formData.interest,
        timestamp: serverTimestamp(),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', interest: '', otherInterest: '' });
      }, 3000);
    } catch (err) {
      console.error("Firebase error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="waitlist-form" className="w-full bg-primary-teal pt-20 pb-40 px-6 border-t border-primary-teal/50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        
        {/* Left Side: Pitch */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to find<br />opportunities?
          </h2>
          <p className="text-white/90 font-medium mb-4">
            Found is launching at Penn State!
          </p>
          <p className="text-white/70 text-sm max-w-sm leading-relaxed">
            Join the waitlist to be among the first to experience the platform.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 flex justify-start md:justify-end">
          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
            
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-white text-xs font-semibold pl-2">NAME</label>
              <input 
                type="text" 
                id="name"
                required
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-full bg-cream text-dark-teal font-medium focus:outline-none focus:ring-2 focus:ring-accent-coral"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-white text-xs font-semibold pl-2">EMAIL</label>
              <input 
                type="email" 
                id="email"
                required
                placeholder="Your Email"
                className="w-full px-5 py-3 rounded-full bg-cream text-dark-teal font-medium focus:outline-none focus:ring-2 focus:ring-accent-coral"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="flex flex-col gap-1 relative">
              <label htmlFor="interest" className="text-white text-xs font-semibold pl-2">WHAT INTERESTS YOU THE MOST?</label>
              
              {/* Custom Dropdown Trigger */}
              <div 
                className={`w-full px-5 py-3 rounded-full bg-cream font-medium flex justify-between items-center cursor-pointer border-2 transition-colors ${
                  dropdownOpen ? 'border-accent-coral' : 'border-transparent'
                } ${
                  formData.interest === '' ? 'text-gray-400' : 'text-dark-teal'
                }`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>
                  {formData.interest === '' ? 'Select...' : (formData.interest === 'Other' ? 'Other: Please Specify' : formData.interest)}
                </span>
                <svg className={`w-5 h-5 text-dark-teal/50 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Hidden input to keep native form 'required' validation working */}
              <input 
                type="text" 
                required 
                value={formData.interest} 
                onChange={() => {}} 
                className="opacity-0 absolute pointer-events-none w-0 h-0 bottom-0 left-1/2" 
                tabIndex={-1}
              />

              {/* Custom Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-[105%] left-0 right-0 mt-1 bg-cream rounded-2xl shadow-xl overflow-y-auto max-h-52 z-20 border border-primary-teal/20 py-2 animate-fade-in custom-scrollbar">
                  {['Opportunities', 'Pathways', 'Mentors', 'Course Recommendations', 'Connections', 'Other'].map((option) => (
                    <div 
                      key={option}
                      className="px-5 py-2.5 text-dark-teal font-medium hover:bg-primary-teal hover:text-white cursor-pointer transition-colors"
                      onClick={() => {
                        setFormData({...formData, interest: option, otherInterest: ''});
                        setDropdownOpen(false);
                      }}
                    >
                      {option === 'Other' ? 'Other: Please Specify' : option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {formData.interest === 'Other' && (
              <div className="flex flex-col gap-1">
                <label htmlFor="otherInterest" className="text-white text-xs font-semibold pl-2">PLEASE SPECIFY</label>
                <input
                  type="text"
                  id="otherInterest"
                  required
                  placeholder="Tell us more"
                  className="w-full px-5 py-3 rounded-full bg-cream text-dark-teal font-medium focus:outline-none focus:ring-2 focus:ring-accent-coral"
                  value={formData.otherInterest}
                  onChange={(e) => setFormData({...formData, otherInterest: e.target.value})}
                />
              </div>
            )}

            {error && (
              <p className="text-red-300 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}

            <button 
              type="submit" 
              disabled={submitted || loading}
              className={`mt-4 w-full px-5 py-3 rounded-full font-bold text-white transition-all duration-300 ${
                submitted ? 'bg-green-500' : 'bg-accent-coral hover:bg-opacity-90'
              }`}
            >
              {loading ? 'JOINING...' : submitted ? 'YOU\'RE IN!' : 'JOIN WAITLIST'}
            </button>

          </form>
        </div>

      </div>
    </footer>
  );
};

export default FooterForm;
