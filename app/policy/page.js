import Navbar from "../nav/AdminNavbar";
import Footer from "../foot/footer";

export default function Policy() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar item={"Policy"}/>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900">Training and Placement Cell Policies</h2>
          <p className="text-center text-gray-600 mt-2">
            The Placement and Training Cell at IIIT Vadodara is committed to providing students with the best opportunities and guidance.
          </p>

          <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
            <h3 className="text-2xl font-semibold text-blue-900">1. Eligibility Criteria</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Minimum CGPA of 7.0 (or equivalent).</li>
              <li>No active backlogs at the time of placement.</li>
              <li>Completion of all academic requirements.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mt-6">2. Code of Conduct</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Maintain professionalism in all interactions with recruiters.</li>
              <li>Do not share confidential information about the placement process.</li>
              <li>Attend all scheduled placement events and interviews on time.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
