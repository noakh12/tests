import React from 'react';

const SignUpPopup = () => {
  return (
    <div className="flex h-screen font-['Poppins', sans-serif] bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Left side with feature boxes */}
      <div className="w-1/2 bg-[#1B4A56] p-8 relative">
        <div className="absolute top-4 left-4 text-white text-lg font-semibold">Section 1</div>
        <div className="grid grid-cols-2 gap-4 mt-12">
          <FeatureBox
            icon="🔍"
            title="Spot High Risk Vendors"
            description="Assess your vendors, partners and suppliers with one-click with hoggo's AI-powered risk profiles."
          />
          <FeatureBox
            icon="🌐"
            title="The Power of The Network"
            description="hoggo connects you directly to relevant buyers or sellers, making compliance sharing a breeze."
          />
          <FeatureBox
            icon="🔔"
            title="Automated Vendor Monitoring"
            description="hoggo monitors your vendors so you can stay ahead of threats without lifting a finger."
          />
          <FeatureBox
            icon="🛡️"
            title="Showcase Compliance"
            description="Sell faster by eliminating compliance bottlenecks and demonstrating privacy & security compliance in minutes."
          />
          <FeatureBox
            icon="📊"
            title="Synced RoPA & Sub-processors"
            description="hoggo takes sub-processors list, Records of Processing Activities (RoPA) and other requirements off your plate."
            fullWidth
          />
        </div>
      </div>
      
      {/* Right side with sign-up form */}
      <div className="w-1/2 p-8 flex flex-col justify-between">
        <div>
          <img src="/api/placeholder/200/50" alt="hoggo logo" className="mb-8" />
          <h1 className="text-3xl font-bold mb-4">Unlock 7 days of unlimited access - Sign up now for free!</h1>
          <p className="mb-8">No credit card required</p>
          <button className="w-full bg-[#FACE6A] text-[#1B4A56] py-3 rounded-lg font-bold mb-4">
            Sign Up Now
          </button>
          <div className="text-center my-4 relative">
            <hr className="my-2" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">OR</span>
          </div>
          <button className="w-full border-2 border-[#1B4A56] text-[#1B4A56] py-3 rounded-lg font-bold">
            Log in
          </button>
        </div>
        <div className="text-sm text-gray-600 mt-8">
          <p>Please read our <a href="#" className="text-[#1B4A56]">Privacy Policy</a> and <a href="#" className="text-[#1B4A56]">Terms and Conditions</a>. 
          By accessing or using our services, you agree to our Terms of Services, and by signing-up you accept our Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

const FeatureBox = ({ icon, title, description, fullWidth = false }) => (
  <div className={`bg-[#E6F4F1] p-4 rounded-lg ${fullWidth ? 'col-span-2' : ''}`}>
    <div className="flex items-center mb-2">
      <span className="mr-2 text-xl">{icon}</span>
      <h3 className="font-bold text-[#1B4A56]">{title}</h3>
    </div>
    <p className="text-sm text-[#1B4A56]">{description}</p>
  </div>
);

export default SignUpPopup;
