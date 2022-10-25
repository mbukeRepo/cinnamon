import Flex from "../../UI/Flex";
import Button from "../../UI/Button";
import Container from "../../UI/Container";

export default function Projects() {
  return (
    <div className="bg-lightGray">
      <Container>
        <div className="pt-12 pb-36">
          <Flex >
            <div className="flex-1 flex gap-12 flex-col">
              <h6 className="text-sm text-success font-semibold">
                Available Properties
              </h6>
              <div className="flex flex-col gap-10">
                <h3 className="text-linear font-bold text-[2.25rem]">
                  Featured Listing
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
            <div className="flex-1 flex flex-col">
              <div className="flex justify-center gap-2">
                <div className="self-end justify-self-end">
                  <img src="/projects1.png" className="p-5" />
                </div>
                <div>
                  <img src="/projects2.png" />
                </div>
              </div>
              <div className="flex justify-center gap-2">
                <div className="">
                  <img src="/projects3.png" />
                </div>
                <div className="translate-x-5 translate-y-5">
                  <img src="/projects4.png" />
                </div>
              </div>
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
}
