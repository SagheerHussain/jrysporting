import React from "react";
import Header from "../components/About Components/Header";
import Footer from "../components/Footer";
import rangeRulesBanner from "/Images/shooting/Range Rules/range-rules-banner.webp";
import RangeRules from "../components/Shooting Components/RangeRules";
import CallToAction from "../components/Shooting Components/CallToAction";

const RangeRulesPage = () => {
  return (
    <>
      <Header title="Range Rules" banner={rangeRulesBanner} />
      <CallToAction
        title="Our Range Safety Rules"
        description="CVSC strongly enforces the Range Safety Rules for the protection and
          comfort of all our guests. Calm, courteous behavior is required,
          especially when interacting with our staff. Please carefully review
          our safety requirements before your visit and make certain you
          understand them. If you do not, ask us for clarification. When on the
          range, you may observe one or more of our Range Marshalls on the
          facility. They are there to assist and answer questions, and will
          approach and correct any person who is violating safety rules. We DO
          NOT TOLERATE rule violations and we do not hesitate to remove persons
          from the range who intentionally violate or object to our safety
          rules, or correction by our staff. We reserve the right to refuse
          service to anyone, and will most definitely do so when safety rules
          are violated or when anyone becomes agitated, hostile or verbally
          agressive toward our staff or other patrons."
      />
      <RangeRules />
      <Footer />
    </>
  );
};

export default RangeRulesPage;
