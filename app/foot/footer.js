const Footer = () => {
    return (
        <div className="bg-blue-900 text-white py-8">
            <div className="container mx-auto px-6 text-center md:text-left">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center md:items-start">
                        <img src="logo.png" alt="IIIT Logo" className="w-12" />
                        <p className="mt-2 text-lg font-semibold">IIIT Vadodara - International Campus Diu</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Quick as</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="home" className="hover:text-blue-400">Home</a></li>
                            <li><a href="statistics" className="hover:text-blue-400">Statistics</a></li>
                            <li><a href="contact" className="hover:text-blue-400">Contact Us</a></li>
                            <li><a href="portal" className="hover:text-blue-400">Portal</a></li>
                            <li><a href="team" className="hover:text-blue-400">Our Team</a></li>
                            <li><a href="policy" className="hover:text-blue-400">Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Follow Us</h3>
                        <ul className="mt-2 flex justify-center md:justify-start space-x-4">
                            <li><a href="#" className="hover:text-blue-400">Facebook<i className="fab fa-facebook"></i></a></li>
                            <li><a href="#" className="hover:text-blue-400">Twitter<i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" className="hover:text-blue-400">LinkedIn<i className="fab fa-linkedin"></i></a></li>
                            <li><a href="#" className="hover:text-blue-400">Instagram<i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <p className="mt-6 text-sm">&copy; 2025 IIIT Vadodara - International Campus Diu. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
