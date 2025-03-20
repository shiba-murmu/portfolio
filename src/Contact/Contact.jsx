import React from 'react'

function Contact() {
  return (
    <>
        <div className="max-w-6xl mx-auto pt-10">
          <h2 className="text-3xl text-white font-thin mb-4">Contact Me</h2>
          <hr className="border-white w-76 mb-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4 rounded-lg">
              <h4 className="text-lg text-gray-700 mb-2">Get in Touch</h4>
              <p className="text-gray-600 mb-4">
                If you have any questions, or just want to chat, feel free to
                reach out to me. I'd love to hear from you.
              </p>
              <p className="text-gray-600 mb-2">
                Email: <a className="text-blue-600" href="mailto:shibasishmishra11@gmail.com">shibasishmishra11@gmail.com</a>
              </p>
              <p className="text-gray-600 mb-2">
                Phone: <a className="text-blue-600" href="tel:+91 70043 33390">+91 70043 33390</a>
              </p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h4 className="text-lg text-gray-700 mb-2">Location</h4>
              <p className="text-gray-600">
                Currently living in <a className="text-blue-600" href="https://www.google.com/maps/place/Bhubaneswar,+Odisha">Bhubaneswar, Odisha</a>
              </p>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default Contact