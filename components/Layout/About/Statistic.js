import React from "react";
import Container from "../../UI/Container";
import Flex from "../../UI/Flex";
export default function Statistic() {
  return (
    <Container>
      <div className="">
        <div className="bg-lessLightGray py-12 rounded-lg">
          <Flex>
            <div className="flex px-6 border-r border-primary items-center gap-4 ">
              <img src="/Icon1.svg" />
              <div className="text-tartiary">
                <h2 className="text-3xl  font-bold">{"> "}200</h2>
                <h5 className="text-sm font-semibold">Number</h5>
              </div>
            </div>
            <div className="flex px-6 border-r border-primary items-center gap-4">
              <img src="/Icon1.svg" />
              <div className="text-tartiary">
                <h2 className="text-3xl  font-bold">{"> "}200</h2>
                <h5 className="text-sm font-semibold">Number</h5>
              </div>
            </div>
            <div className="flex px-6  items-center gap-4">
              <img src="/Icon1.svg" />
              <div className="text-tartiary">
                <h2 className="text-3xl  font-bold">{"> "}200</h2>
                <h5 className="text-sm font-semibold">Number</h5>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </Container>
  );
}
