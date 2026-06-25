import React, { useState } from 'react';

const FooterForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Visual mock for now as requested
    console.log("Waitlist submission:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '' });
    }, 3000);
  };

  return (
    <footer id="waitlist-form" className="w-full bg-primary-teal py-20 px-6 border-t border-primary-teal/50">
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

            <button 
              type="submit" 
              disabled={submitted}
              className={`mt-4 w-full px-5 py-3 rounded-full font-bold text-white transition-all duration-300 ${
                submitted ? 'bg-green-500' : 'bg-accent-coral hover:bg-opacity-90'
              }`}
            >
              {submitted ? 'JOINED!' : 'JOIN WAITLIST'}
            </button>

          </form>
        </div>

      </div>
    </footer>
  );
};

export default FooterForm;
