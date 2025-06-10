import React from "react";

const ContactInfo = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container flex flex-col md:flex-row gap-4">
        <div className="w-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
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
          <button
            className="btn-main text-primary_bg mt-4 translate-y-[10px] w-full p-4"
            style={{ color: "#fff" }}
          >
            Get Direction
          </button>
        </div>

        {/* Right: Contact Info */}
        <div className="w-full flex flex-col justify-center p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-4xl font-medium text-orange-500 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-500 mb-6">
            Have a question? We are here to help. Send us a message and we’ll be
            in touch.
          </p>

          <div className="space-y-3 text-gray-900 font-semibold text-lg">
            <p>408-778-3600</p>
            <p>info@coyoteclays.com</p>
            <p>1000 San Bruno Ave</p>
            <p>Morgan Hill, CA 95037</p>
            <p>408-778-9171 FAX</p>
          </div>

          <button className="btn-main text-primary_bg mt-4 translate-y-[10px] w-full p-4">
            Get Direction
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
