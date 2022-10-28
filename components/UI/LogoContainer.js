import React from "react";
import Container from "./Container";
import Flex from "./Flex";

export default function LogoContainer() {
  return (
    <Container>
      <div className="">
        <div className="border-y border-tartiary py-12">
          <Flex>
            <div>
              <img src="/logo1.svg" />
            </div>
            <div>
              <img src="/logo2.svg" />
            </div>
            <div>
              <img src="/logo3.svg" />
            </div>
            <div>
              <img src="/logo4.svg" />
            </div>
            <div>
              <img src="/logo5.svg" />
            </div>
          </Flex>
        </div>
      </div>
    </Container>
  );
}
