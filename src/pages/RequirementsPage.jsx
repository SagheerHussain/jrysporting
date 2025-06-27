import React from "react";
import Header from "../components/About Components/Header";
import Footer from "../components/Footer";
import requirementBanner from "/Images/shooting/Requirements/requirement-banner.webp";
import CallToAction from "../components/Shooting Components/CallToAction";
import Requirements from "../components/Shooting Components/Requirements";
import { FaFileContract, FaBirthdayCake, FaClipboardList } from "react-icons/fa";

const RequirementsPage = () => {
  const requirementData = [
    {
      icon: (
        <FaFileContract className="text-orange-500 mx-auto mb-4 text-3xl" />
      ),
      title: "Sign Liability",
      description:
        "Participants and observers must sign an Agreement and Release from Liability document available at the kiosk inside our Pro-shop.",
    },
    {
      icon: (
        <FaBirthdayCake className="text-orange-500 mx-auto mb-4 text-3xl" />
      ),
      title: "If Under 18",
      description:
        "Persons under 18 must be escorted by an adult AND have their Agreement and Release from Liability signed by a Parent, not a guardian. Contact us at 408-778-3600 if you will not be present and you are sending your child to participate with another adult, as we can arrange completion of an online waiver in certain circumstances. All parental consent will be verified by our staff.",
    },
    {
      icon: (
        <FaClipboardList className="text-orange-500 mx-auto mb-4 text-3xl" />
      ),
      title: "Range Rules",
      description:
        "All participants must know and be able to follow our Range Safety Rules. We are uncompromising in this requirement. We reserve the right to refuse service to anyone and will definitely do so when safety rules are violated.",
      button: true,
      link: "/range-rules",
      btnText: "Read Rules",
    },
  ];

  return (
    <>
      <Header title="Requirements" banner={requirementBanner} />
      <CallToAction
        title="Requirements to Shoot At Coyote Valley"
        subTitle="Shooter Safety is Our Top Priority"
        description="You must be experienced in shotgun shooting and be able to handle a shotgun safely (firearm safety) and be familiar and comply with our range rules. If you do not meet this requirement, we may permit you on the range accompanied by someone who meets this requirement, at our discretion. Otherwise, you are required to have assistance from an instructor via a private lesson appointment or an Experience  Reservation, see below."
      />
      <Requirements title="You MUST Follow These Guidelines" requirementData={requirementData} />
      <Footer />
    </>
  );
};

export default RequirementsPage;
