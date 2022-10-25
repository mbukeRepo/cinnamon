import Card from "../../UI/Card";
import Container from "../../UI/Container";
import List from "../../UI/List";
import Section from "../../UI/Section";
const Hero = () => {
  return (
    <div className="bg-lightGray">
      <Container>
        <div className="py-[8rem]">
          <Section>
            <h3 className="text-[2.25rem] font-bold text-linear">
              Innovative Execution
            </h3>
            <List>
              <Card>
                <img src="/Icon1.svg" className="h-[4.375rem] w-[4.375rem]" />
                <div className="w-3/5">
                  <h5 className="font-bold text-[1.5rem] text-linear">
                    Featured Listing
                  </h5>
                  <p className="text-tartiary ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
              </Card>
              <Card>
                <img src="/Icon1.svg" className="h-[4.375rem] w-[4.375rem]" />
                <div className="w-3/5">
                  <h5 className="font-bold text-[1.5rem] text-linear">
                    Featured Listing
                  </h5>
                  <p className="text-tartiary ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
              </Card>
              <Card>
                <img src="/Icon1.svg" className="h-[4.375rem] w-[4.375rem]" />
                <div className="w-3/5">
                  <h5 className="font-bold text-[1.5rem] text-linear">
                    Featured Listing
                  </h5>
                  <p className="text-tartiary ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
              </Card>
            </List>
          </Section>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
