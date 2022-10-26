import Header from "../Header";
import Button from "../../UI/Button";

const Heading = () => {
  return (
    <div className="bg-[url('/bg.svg')] container mx-auto px-16  bg-no-repeat  ">
      <div className="">
        <Header />
        <div className="flex gap-8 py-24">
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-5xl w-3/5 text-linear">
              Development company
            </h4>
            <p className="text-tartiary text-[1.375rem] w-3/5">
              Forward-thinking real estate developer, owner and investor with a
              reputation
            </p>
            <div className="flex gap-6">
              <div className="text-white">
                <Button className="bg-primary px-12">Services</Button>
              </div>
              <div className="text-tartiary">
                <Button className="bg-secondary px-10">
                  About the company
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-6 px-5 items-end">
              <div>
                <img src="/Rectangle-613.png" />
              </div>
              <div>
                <img src="/Rectangle-610.png" />
              </div>
              <div>
                <img src="/Rectangle-612.png" />
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div>
                <img src="/Rectangle-608.png" />
              </div>
              <div>
                <img src="/Rectangle-609.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
