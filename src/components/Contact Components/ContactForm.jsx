import React from "react";

const ContactForm = () => {
  return (
    <>
      <section id="form" className="py-20">
        <div
          className="container px-8 rounded-[15px]"
          style={{
            background: "url('/Images/texture.png')",
            backgroundBlendMode: "multiply",
            backgroundColor: "#9c5043",
            backgroundSize: "contain",
          }}
        >
  
            {/* <h1 className="text-lg font-medium text-white mt-6">
              Keep Up To Date on Special Events, Promotions and news about the
              future of Coyote Valley Sporting Clays
            </h1>
            <div className="w-full min-h-[400px] rounded-lg overflow-hidden shadow-lg mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2002.9248462561063!2d-121.71603984275662!3d37.16589304742225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e269c3d40f0ad%3A0x4fa87bec5f823e37!2s1000%20San%20Bruno%20Ave%2C%20Morgan%20Hill%2C%20CA%2095037%2C%20USA!5e0!3m2!1sen!2s!4v1749555888837!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen // camelCase and no value needed
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" // camelCase
                title="Google Map"
              />
            </div> */}
            <div className="w-full flex flex-col p-6 rounded-lg">
              <div className="space-y-3 text-white font-semibold text-lg">
                <p>408-778-3600</p>
                <p>info@coyoteclays.com</p>
                <p>1000 San Bruno Ave</p>
                <p>Morgan Hill, CA 95037</p>
                <p>408-778-9171 FAX</p>
              </div>

     
            </div>
      
          <div className="form-inputs py-4">
            <h1 className="text-2xl font-medium text-white mb-6">
              RECEIVE OUR EMAIL NOTIFICATIONS
            </h1>
            <p className="text-white mb-6">
              Have a question? We are here to help. Send us a message and we’ll
              be in touch.
            </p>
            <h2 className="text-4xl font-medium text-orange-500 mb-2">
              Contact Us
            </h2>
            <form action="4">
              <input
                type="text"
                className="w-full p-2 mb-4 bg-transparent border-b-[2px] text-white placeholder:text-white focus:outline-none"
                placeholder="Name"
              />
              <input
                type="email"
                className="w-full p-2 mb-4 bg-transparent border-b-[2px] text-white placeholder:text-white focus:outline-none"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full p-2 mb-4 bg-transparent border-b-[2px] text-white placeholder:text-white focus:outline-none"
                placeholder="Phone"
              />
              <textarea
                name=""
                className="w-full p-2 mb-4 bg-transparent border-b-[2px] text-white placeholder:text-white focus:outline-none"
                id=""
                cols="30"
                placeholder="Message"
                rows="10"
              ></textarea>
              <button
                className="btn-main text-primary_bg mt-4 translate-y-[10px] w-full p-4"
                style={{ color: "#fff" }}
              >
                Get Direction
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
