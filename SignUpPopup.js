// SignUpPopup.js
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

  .hoggo-container {
    display: flex;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
  }

  .hoggo-left-side {
    width: 50%;
    background-color: #1B4A56;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .hoggo-right-side {
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hoggo-feature-box {
    background-color: #E6F4F1;
    color: #1B4A56;
    margin: 10px 0;
    padding: 15px;
    border-radius: 10px;
  }

  .hoggo-icon {
    font-size: 24px;
    margin-right: 10px;
  }

  .hoggo-button {
    display: block;
    width: 100%;
    padding: 15px;
    margin: 10px 0;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .hoggo-sign-up {
    background-color: #FACE6A;
    border: none;
    color: #1B4A56;
  }

  .hoggo-log-in {
    background-color: white;
    border: 2px solid #1B4A56;
    color: #1B4A56;
  }

  .hoggo-divider {
    text-align: center;
    margin: 20px 0;
    position: relative;
  }

  .hoggo-divider::before,
  .hoggo-divider::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 45%;
    height: 1px;
    background-color: #ccc;
  }

  .hoggo-divider::before {
    left: 0;
  }

  .hoggo-divider::after {
    right: 0;
  }

  .hoggo-logo {
    max-width: 200px;
    margin-bottom: 20px;
  }

  .hoggo-terms {
    font-size: 12px;
    color: #666;
  }

  .hoggo-terms a {
    color: #1B4A56;
  }
`;

const FeatureBox = ({ icon, title, description }) => (
  <div className="hoggo-feature-box">
    <span className="hoggo-icon">{icon}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const SignUpPopup = () => {
  return (
    <React.Fragment>
      <style>{styles}</style>
      <div className="hoggo-container">
        <div className="hoggo-left-side">
          <h2>Section 1</h2>
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
          />
        </div>
        <div className="hoggo-right-side">
          <img src="/hoggo-logo.png" alt="hoggo logo" className="hoggo-logo" />
          <h1>Unlock 7 days of unlimited access - Sign up now for free!</h1>
          <p>No credit card required</p>
          <button className="hoggo-button hoggo-sign-up">Sign Up Now</button>
          <div className="hoggo-divider">OR</div>
          <button className="hoggo-button hoggo-log-in">Log in</button>
          <p className="hoggo-terms">
            Please read our <a href="#">Privacy Policy</a> and <a href="#">Terms and Conditions</a>. 
            By accessing or using our services, you agree to our Terms of Services, and by signing-up 
            you accept our Privacy Policy.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

// Make SignUpPopup available globally
window.SignUpPopup = SignUpPopup;
