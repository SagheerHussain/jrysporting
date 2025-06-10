import React, { useRef } from "react";

const timelineData = [
  {
    date: "20th May, 2010",
    heading: "Private Party Transfer",
    text: "Normally available during weekday business hours, call for an appointment for best service - not always available especially on weekends. Both the buyer and the seller must appear in person together at the same time and the firearm must stay with us during the ten day waiting period. The CA DROS fee is $37.19 including tax and our Dealer Fee is $10 per gun, plus sales and excise tax.  A Storage Fee of $35 is added per firearm if the gun is not picked up on the 11th day following DROS processing.",
  },
  {
    date: "20th May, 2010",
    heading: "Gun Purchased From Another Dealer Transfer",
    text: "To transfer a gun from another FFL Dealer buyer must accept the following terms:",
    subText: [
      "A. Gun must be a long gun, no handguns.",
      "B. Gun must be shipped by a FFL dealer. Guns shipped from non FFL holders such as private individuals will be refused.",
      "C. CVSC charges $187.35  This price includes the CA Department of Justice DROS Fee (including tax) of $37.19, our dealer fee of $125.00, plus sales tax of $11.41 and excise tax of $13.75 on the dealer fee.  We will collect CA sales or use tax on the value of the firearm plus CA excise (CFET) if not already collected, see D below.",
      "D. CVSC must collect CA sales tax and excise tax via cash or check on the value of the gun, based on the receipt provided by the seller/shipper, unless we have a receipt showing the tax is already paid or the seller/shipper has a business presence in California. The tax is based on the value of the gun plus shipping and handling charges.  We need a separate payment preferably by check for this amount.",
      "E. Any gun received that is not CA legal will be shipped back at the buyer's expense.  Any gun transfer that is not completed due to DROS issues or gun issues, the full cost of returning the gun and all associated costs including storage will be charged to the buyer. If you accept these terms, to have a gun shipped here contact us via email to info@coyoteclays.com.   Provide us with your information, the firearm information, and the shipper/sellers name and information and email address.   We will reply and send our FFL to the shipper to facilitate the shippment. NOTE :  NO HANDGUNS Our long gun transfer form may be downloaded and used to provide the required information.",
      "If you accept these terms, to have a gun shipped here contact us via email to info@coyoteclays.com.   Provide us with your information, the firearm information, and the shipper/sellers name and information and email address.   We will reply and send our FFL to the shipper to facilitate the shippment.",
      "NOTE :  NO HANDGUNS",
      "Our long gun transfer form may be downloaded and used to provide the required information. ",
    ],
  },
  {
    date: "20th May, 2010",
    heading: "Gun Purchased at Coyote Valley Transfer",
    text: "For firearms purchased from CVSC there is a DROS fee of $37.19, plus sales and excise tax on the firearm. Purchasers must have a valid California Drivers License or a California DMV ID. Shipments to other FFL’s are possible by special arrangement (if you reside out of state for instance).",
  },
  {
    date: "20th May, 2010",
    heading: "Shippers must comply with these terms",
    text: "1. DO NOT ship without notifying us in advance via email to info@coyoteclays.com.  Do not ship via US Postal Service (USPS). They will not deliver to our location and the shipment will be refused.  We prefer to use Fedex as 1st choice, or UPS as 2nd choice. 2. Obtain a CFLC approval letter from the DOJ before shipment. For more information go to www.ag.ca.gov/firearms/cflcoverview.php There is a quick one time registration, and after that you can obtain approval numbers 24/7 online and over the phone. 3. DOJ Verification Approval Number MUST BE WRITTEN ON THE OUTSIDE OF THE SHIPPING BOX OR GUN WILL BE REFUSED.",
  },
];

const Guidelines = () => {
  // Create refs for each timeline item
  const cardRefs = useRef(timelineData.map(() => React.createRef()));

  const handleScrollToCard = (index) => {
    cardRefs.current[index]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full py-20">
      <div className="container justify-center flex-col">
        <div className="bg-white py-16 px-4 text-center max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-orange-600 mb-2">
            Long Gun Transfers
          </h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Below Are the Guidelines That We Follow
          </h2>

          <div className="w-16 h-1 bg-red-500 mx-auto mb-6" />

          <p className="text-sm text-red-600 font-bold uppercase">
            Sorry, No Transfers of Handguns
          </p>

          <p className="mt-2 text-gray-600 max-w-xl mx-auto text-sm">
            As a FFL (Federal Firearm License) Dealer, Coyote Valley Sporting
            Clays (CVSC) can help you with your Long Gun transfer needs,
            including:
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            {["Private Party", "Another Dealer", "CVSC Transfer", "Shipping"].map(
              (label, idx) => (
                <button
                  key={label}
                  onClick={() => handleScrollToCard(idx)}
                  className="bg-[#D56602] hover:bg-[#D56602]/80 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-200"
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>

        <div className="relative w-full max-w-5xl">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#818062] z-0"></div>

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                ref={cardRefs.current[index]}
                key={index}
                className="mb-16 flex justify-between items-start w-full relative z-10"
              >
                {isLeft ? (
                  <>
                    <div className="w-[48%] relative">
                      <div className="absolute right-[-1.8rem] top-2 w-4 h-4 bg-[#9c5043] rounded-full z-20"></div>
                      <div
                        className="text-white p-6 rounded-lg shadow-lg"
                        style={{
                          background: "url('/Images/texture.png')",
                          backgroundBlendMode: "multiply",
                          backgroundColor: "#D56602",
                          backgroundSize: "contain",
                        }}
                      >
                        <h1 className="text-lg mt-2">{item.heading}</h1>
                        <p className="text-sm mt-1 text-white">{item.text}</p>
                      </div>
                    </div>
                    <div className="w-[48%]"></div>
                  </>
                ) : (
                  <>
                    <div className="w-[48%]"></div>
                    <div className="w-[48%] relative">
                      <div className="absolute left-[-1.8rem] top-2 w-4 h-4 bg-[#9c5043] rounded-full z-20"></div>
                      <div
                        className="text-white p-6 rounded-lg shadow-lg"
                        style={{
                          background: "url('/Images/texture.png')",
                          backgroundBlendMode: "multiply",
                          backgroundColor: "#9c5043",
                          backgroundSize: "contain",
                        }}
                      >
                        <h3 className="text-lg mt-2">{item.heading}</h3>
                        <p className="text-sm mt-1 text-white">{item.text}</p>
                        {item.subText && (
                          <div>
                            {item.subText.map((subText, subIdx) => (
                              <p
                                key={subIdx}
                                className="text-sm mt-6 text-white"
                              >
                                {subText}
                              </p>
                            ))}
                          </div>
                        )}
                        {item.subText && (
                          <a
                            href="https://irp-cdn.multiscreensite.com/454c6b31/files/uploaded/ffl-transfer-request-form.3.pdf"
                            target="_blank"
                          >
                            <button
                              className="btn-main text-primary_bg mt-4 translate-y-[10px] w-full p-4"
                              style={{
                                color: "#fff",
                              }}
                            >
                              Download Form
                            </button>
                          </a>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
