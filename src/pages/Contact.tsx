import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const NavigateHome = () => {
    navigate("/");
  };

  return (
    <div className="text-white text-5xl">
      <a className="text-sm" onClick={NavigateHome}>
        Back to Home
      </a>
      Contact us
    </div>
  );
};

export default Contact;
