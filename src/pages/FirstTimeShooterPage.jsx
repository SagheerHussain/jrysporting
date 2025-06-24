import React from "react";
import Header from "../components/About Components/Header";
import Footer from "../components/Footer";
import requirementBanner from "/Images/shooting/Requirements/requirement-banner.webp";
import CallToAction from "../components/Shooting Components/CallToAction";
import Requirements from "../components/Shooting Components/Requirements";

const FirstTimeShooterPage = () => {
  const requirementData = [
    {
      count: 1,
      title: "Schedule Safety Instruction",
      description:
        "Persons NOT experienced with the safe handling of a shotgun or accompanied by an experienced and qualified mentor, you must make an appointment for safety instruction. You MUST choose either Option 2 or 3 to the right.",
    },
    {
      count: 2,
      title: "Schedule a Private Lesson",
      description:
        "For 1-2 first time shooters, please make an appointment for a Private Lesson.",
      button: true,
      btnText: "Private",
    },
    {
      count: 3,
      title: "OR Schedule a Group Lesson",
      description:
        "For groups of three or more first time shooters, please book an “Experience Package”.",
      button: true,
      btnText: "Experience",
    },
  ];

  return (
    <>
      <Header title="First Time Shooters" banner={requirementBanner} />
      <CallToAction
        title="First Time Shooters At Coyote Valley"
        subTitle="Shooter Safety is Our Top Priority"
        description="You must be experienced in shotgun shooting  and be able to handle a shotgun safely (firearm safety) and be familiar and comply with our range rules.   If you do not meet this requirement, we may permit you on the range accompanied by someone who meets this requirement, at our discretion.  Otherwise, you are required to have assistance from an instructor via a private lesson appointment or an Experience Package Reservation, see links below."
      />
      <Requirements
        title="First Time Shooters Follow These Steps"
        requirementData={requirementData}
      />
      <Footer />
    </>
  );
};

export default FirstTimeShooterPage;
