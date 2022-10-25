import React from "react";
import Button from "../../UI/Button";
import Container from "../../UI/Container";
import Flex from "../../UI/Flex";

export default function CallUs() {
  return (
    <div className="bg-lessLightGray">
      <Container>
        <div className="py-16">
          <div className="border-y border-tartiary py-12">
            <div className="flex justify-between">
              <div>
                <h3 className="text-linear font-bold text-[2.25rem]">
                  Call Us
                </h3>
              </div>
              <div className="flex gap-4">
                <div>
                  <Button className="bg-primary text-white px-24" >Call</Button>
                </div>
                <div className="text-tartiary">
                  <Button className="bg-secondary px-16">Email</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
