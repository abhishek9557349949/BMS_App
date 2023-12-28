import './ManagerLandingPage.css';

const ManagerLandingPage = () => {
    return(
        <div>
        <header>
        <div className="logo">Your Logo</div>
        <nav>
            <ul>
                <li>Generate Bill</li>
                <li>Manage Bill</li>
                <li>Manage Inventory</li>
                <li class="dropdown">
                    <span class="dropbtn">Account</span>
                    <div class="dropdown-content">
                        <span>Profile</span>
                        <span href="#">Settings</span>
                        <span href="#">Logout</span>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
    <section class="landing">
        <div class="landing-content">
            <h1>Welcome to Your Business Management System</h1>
            <p>Empower your business with our advanced Business Management System. From generating bills to overseeing your inventory, our platform adapts to your role—be it a manager, executive, or employee.</p>
            <span class="cta-button">Explore Features</span>
        </div>
    </section>
    <section class="features">
        <div class="feature">
            {/* <img src="feature-1.jpg" alt="Generate Bill"> */}
            <h2>Generate Bills Effortlessly</h2>
            <p>Streamline your billing process with our intuitive tools. Create and send invoices in a few clicks.</p>
        </div>
        <div class="feature">
            {/* <img src="feature-2.jpg" alt="Manage Inventory"> */}
            <h2>Manage Inventory Seamlessly</h2>
            <p>Track your inventory in real-time. Receive alerts and optimize stock levels effortlessly.</p>
        </div>
        <div class="feature">
            {/* <ima src="feature-3.jpg" alt="Check GST"> */}
            <h2>Check GST Compliance</h2>
            <p>Ensure GST compliance with our automated tools. Stay updated and avoid compliance issues.</p>
        </div>
    </section>
    </div>
    );
};
export default ManagerLandingPage;