import Flex from "../../UI/Flex";
import Button from "../../UI/Button";
import Container from "../../UI/Container";

export default function About() {
  return (
    <div className="bg-lessLightGray">
      <Container>
        <div className="pt-12 pb-36">
          <Flex>
            <div className="flex-1">
              <img src="/partners.png" />
            </div>
            <div className="flex-1 flex gap-12 flex-col">
              <h6 className="text-sm text-success font-semibold">About us</h6>
              <div className="flex flex-col gap-10">
                <h3 className="text-linear font-bold text-[2.25rem]">
                  Owner and investor with a reputation
                </h3>
                <p className="text-tartiary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                  Integer rhoncus, eros vel euismod tempor, ipsum magna
                  tristique nisi, quis ullamcorper enim magna eu orci. Sed
                  semper ex quis semper aliquet. Cras hendrerit molestie sapien
                  sed fermentum. Mauris dui tortor, viverra vel ultrices in,
                  congue sed ex.
                </p>
                <div className="text-white">
                  <Button className="bg-primary px-16">Explore</Button>
                </div>
              </div>
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
}
