import React from "react";
import Container from "../UI/Container";
import Flex from "../UI/Flex";
import Form from "../UI/Form/Form";

export default function ContactForm() {
  return (
    <div className="bg-lightGray">
      <div className="py-16">
        <Container>
          <Flex>
            <div className="flex-1 flex gap-12 flex-col">
              <div>
                <h6 className="text-sm text-success font-semibold">Contact</h6>
                <h3 className="text-linear font-bold text-[2.25rem]">
                  Get In Touch
                </h3>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex gap-4 items-center">
                  <div>
                    <img src="/contact2.svg" />
                  </div>
                  <div>
                    <h6 className="text-sm font-[500] text-linear">Tel</h6>
                    <p className="text-linear font-bold text-lg">
                      708-790-0000
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <img src="/contact1.svg" />
                  </div>
                  <div>
                    <h6 className="text-sm font-[500] text-linear">Email</h6>
                    <p className="text-linear font-bold text-lg">
                      sales@buildit.site
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <img src="/contact1.svg" />
                  </div>
                  <div>
                    <h6 className="text-sm font-[500] text-linear">Office</h6>
                    <p className="text-linear font-bold text-lg">
                      sales@buildit.site
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Form />
          </Flex>
        </Container>
      </div>
    </div>
  );
}
