import Button from "../Buttons/Button";

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <h2 className="cta-title">Let's work together</h2>
      <Button url={"/contact-me"} text={"CONTACT ME"} type={"two"} />
    </div>
  );
};

export default CallToAction;
