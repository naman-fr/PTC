import Navbar from "../nav/AdminNavbar";
import Footer from "../foot/footer";

export default function Contact() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar item={"Contact Us"}/>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900">Contact Us</h2>
          <p className="text-center text-gray-600 mt-2">Have questions or need assistance? Reach out to us!</p>

          <form className="bg-white shadow-lg rounded-lg p-6 mt-6 max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">Your Name</label>
              <input type="text" id="name" name="name" className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300 text-black" placeholder="Enter your name" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium">Your Email</label>
              <input type="email" id="email" name="email" className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300 text-black" placeholder="Enter your email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium">Your Message</label>
              <textarea id="message" name="message" rows="5" className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300 text-black" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
