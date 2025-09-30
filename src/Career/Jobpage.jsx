import { useState, useEffect } from "react";
import axios from "axios";

function Jobpage() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    department: "",
    location: "",
    experience: "",
  });
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentLocation: "",
    currentCompany: "",
    currentCTC: "",
    expectedCTC: "",
    joiningTime: "",
    totalExperience: "",
    highestQualification: "",
    fitForRole: "",
    resume: null,
    agreePolicy: false,
  });

  // Fetch jobs from API
  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/jobs");
      if (Array.isArray(response.data)) setJobs(response.data);
      else setJobs([]);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Filters
  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.department === "" || job.department === filters.department) &&
      (filters.location === "" || job.location === filters.location) &&
      (filters.experience === "" || job.experience === filters.experience)
    );
  });

  function handleFilterChange(e) {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  }

  function toggleJob(id) {
    setExpandedJobId(expandedJobId === id ? null : id);
  }

  function openApplyForm(job) {
    setSelectedJob(job);
    setShowApplyForm(true);
  }

  function closeApplyForm() {
    setShowApplyForm(false);
    setSelectedJob(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      currentLocation: "",
      currentCompany: "",
      currentCTC: "",
      expectedCTC: "",
      joiningTime: "",
      totalExperience: "",
      highestQualification: "",
      fitForRole: "",
      resume: null,
      agreePolicy: false,
    });
  }

  function handleChange(e) {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  // Submit apply form
  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.agreePolicy) {
      alert("Please agree to the EICE Technology Privacy Policy");
      return;
    }

    if (!formData.resume) {
      alert("Please upload your CV (max 4MB)");
      return;
    }

    const submitData = new FormData();
    Object.keys(formData).forEach((key) => {
      submitData.append(key, formData[key]);
    });

    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/jobs/${selectedJob.job_id || selectedJob.id}/apply`,
        submitData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.success) {
        setShowThankYou(true);
        closeApplyForm();
        // Auto close after 3 sec
        setTimeout(() => setShowThankYou(false), 3000);
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Failed to submit application");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-5xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Explore Our Open Roles</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <select
          name="department"
          value={filters.department}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="">All Departments</option>
          <option value="Product">Product</option>
          <option value="Engineering">Engineering</option>
          <option value="AI">AI</option>
        </select>

        <select
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        <select
          name="experience"
          value={filters.experience}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="">All Experience Levels</option>
          <option value="Senior">Senior</option>
          <option value="Mid/Junior">Mid/Junior</option>
        </select>
      </div>

      {/* Job List Accordion */}
      <div className="space-y-4">
        {filteredJobs.length === 0 && (
          <p className="text-center text-gray-500">No jobs found matching filters.</p>
        )}

        {filteredJobs.map((job) => (
          <div key={job.job_id || job.id} className="border rounded-md shadow-sm">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 focus:outline-none"
              onClick={() => toggleJob(job.job_id || job.id)}
              aria-expanded={expandedJobId === (job.job_id || job.id)}
            >
              <div>
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-600">
                  {job.department} | {job.location} | {job.experience}
                </p>
              </div>
              <span className="text-xl">{expandedJobId === (job.job_id || job.id) ? "-" : "+"}</span>
            </button>

            {expandedJobId === (job.job_id || job.id) && (
              <div className="px-6 py-4 border-t bg-gray-50">
                <p className="mb-2">{job.description}</p>
                {job.responsibilities && Array.isArray(job.responsibilities) && (
                  <>
                    <h4 className="font-semibold mb-1">Key responsibilities:</h4>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </>
                )}
                <button
                  onClick={() => openApplyForm(job)}
                  className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition"
                >
                  Apply Now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Apply Form Popup */}
      {showApplyForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-md shadow-lg max-w-lg w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeApplyForm}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
              aria-label="Close form"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">Apply for {selectedJob.title}</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block font-semibold mb-1">Full Name</label>
                <input name="name" type="text" required value={formData.name} onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input name="email" type="email" required value={formData.email} onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-semibold mb-1">Phone Number With Country Code</label>
                <input name="phone" type="tel" required value={formData.phone} onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              {/* Current Location */}
              <div>
                <label className="block font-semibold mb-1">Current Location</label>
                <input name="currentLocation" type="text" value={formData.currentLocation} onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              {/* Current Company */}
              <div>
                <label className="block font-semibold mb-1">Current Company</label>
                <input name="currentCompany" type="text" value={formData.currentCompany} onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              {/* Current CTC */}
              <div>
                <label className="block font-semibold mb-1">Current CTC (LPA)</label>
                <input name="currentCTC" type="number" value={formData.currentCTC} onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              {/* Expected CTC */}
              <div>
                <label className="block font-semibold mb-1">Expected CTC (LPA)</label>
                <input name="expectedCTC" type="number" value={formData.expectedCTC} onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              {/* Joining Time */}
              <div>
                <label className="block font-semibold mb-1">How Soon Can You Join Us? (Days)</label>
                <input name="joiningTime" type="number" value={formData.joiningTime} onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              {/* Total Experience */}
              <div>
                <label className="block font-semibold mb-1">Total Experience (Years)</label>
                <input name="totalExperience" type="number" value={formData.totalExperience} onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              {/* Highest Qualification */}
              <div>
                <label className="block font-semibold mb-1">Highest Qualification</label>
                <input name="highestQualification" type="text" value={formData.highestQualification} onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              {/* Fit for Role */}
              <div>
                <label className="block font-semibold mb-1">What makes you fit for this role (Short & Catchy)</label>
                <textarea name="fitForRole" value={formData.fitForRole} onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              {/* Upload CV */}
              <div>
                <label className="block font-semibold mb-1">Upload CV (Max 4MB)</label>
                <input name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleChange} />
              </div>

              {/* Privacy Policy */}
              <div className="flex items-center gap-2">
                <input type="checkbox" name="agreePolicy" checked={formData.agreePolicy} onChange={handleChange} />
                <label>I agree to the <a href="/privacy-policy" className="text-blue-500 underline">EICE Technology Privacy Policy</a></label>
              </div>

              <button type="submit" disabled={loading}
                className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600 transition">
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-md shadow-lg max-w-sm w-full p-6 text-center relative">
            <button
              onClick={() => setShowThankYou(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
            <p className="mb-4">Your application has been submitted. Our HR team will get back to you soon.</p>
            <button
              onClick={() => setShowThankYou(false)}
              className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Jobpage;
