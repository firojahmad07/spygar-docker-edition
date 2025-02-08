import { useState } from "react";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open popup
  const openPopup = () => setIsOpen(true);

  // Close popup
  const closePopup = () => setIsOpen(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Form submitted:", data);
    closePopup(); // Close popup after submission
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Open Button */}
      <button onClick={openPopup} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Open Form
      </button>

      {/* Popup Form */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-red-500 bg-opacity-50"
          onClick={closePopup} // Close when clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside form
          >
            <h2 className="text-lg font-semibold">User Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
              <div className="flex justify-end space-x-2">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closePopup}
                  className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export { PopupForm };
