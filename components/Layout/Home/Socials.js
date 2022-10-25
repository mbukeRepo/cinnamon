import React from "react";
import Container from "../../UI/Container";
import List from "../../UI/List";
import Section from "../../UI/Section";

export default function Socials() {
  return (
    <div className="bg-lessLightGray">
      <Container>
        <div className="pt-12 pb-36">
          <Section>
            <h6 className="text-sm text-success font-semibold">Socials</h6>
            <h3 className="text-linear font-bold text-[2.25rem]">
              On Instagram
            </h3>
            <List className="gap-4">
              <div>
                <img src="/socials1.png" />
              </div>
              <div>
                <img src="/socials1.png" />
              </div>
              <div>
                <img src="/socials1.png" />
              </div>
              <div>
                <img src="/socials1.png" />
              </div>
              <div>
                <img src="/socials1.png" />
              </div>
              <div>
                <img src="/socials1.png" />
              </div>
            </List>
          </Section>
        </div>
      </Container>
    </div>
  );
}
