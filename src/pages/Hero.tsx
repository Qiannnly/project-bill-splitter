import piggyBankImage from "../assets/piggyBank.png";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="h-fit space-y-9 items-center justify-center m-24 lg:flex lg:mx-80 lg:mt-40">
        <div className="lg:w-4/6 ">
          <h1 className="mb-8 text-5xl font-semibold text-center lg:text-left">
            Bsplitz
          </h1>
          <p className="text-xl text-center lg:text-left">
            Create groups, create activity,
            <br /> select split options, <br />
            add transactions, split
          </p>
          <div className="mt-10 text-center lg:text-left">
            <Button onClick={() => navigate("signup")}>Get Started</Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={piggyBankImage}
            alt="piggy-bank-icon"
            className="h-48 w-66 object-contain lg:h-52 lg:pl-20"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
