import React from "react";
import Container from "../../UI/Container";
import Section from "../../UI/Section";
import List from "../../UI/List";

export default function Team() {
  const teams = [
    { name: "Name Surname", position: "Worker", img: "/team1.png" },
    { name: "Name Surname", position: "Worker", img: "/team2.png" },
    { name: "Name Surname", position: "Worker", img: "/team3.png" },
    { name: "Name Surname", position: "Worker", img: "/team1.png" },
    { name: "Name Surname", position: "Worker", img: "/team2.png" },
    { name: "Name Surname", position: "Worker", img: "/team3.png" },
    { name: "Name Surname", position: "Worker", img: "/team1.png" },
    { name: "Name Surname", position: "Worker", img: "/team2.png" },
    { name: "Name Surname", position: "Worker", img: "/team3.png" },
  ];
  return (
    <div className="bg-lessLightGray">
      <Container>
        <div className="py-16">
          <Section>
            <div className="flex flex-col gap-4 items-center">
              <h6 className="text-sm text-success font-semibold">Our team</h6>
              <h3 className="text-linear font-bold text-[2.25rem]">
                Let's meet
              </h3>
            </div>
            <List className="gap-8">
              {teams.map(({ name, position, img }, idx) => (
                <div className="flex flex-col" key={idx}>
                  <img src={img} />
                  <div className="p-6 rounded-b-lg shadow-xl shadow-[#9bc2ff40] bg-gradient-to-b from-[#C6DBFF] to-[#E1EBFA]">
                    <h4 className="text-linear font-semibold">{name}</h4>
                    <p className="text-tartiary">{position}</p>
                  </div>
                </div>
              ))}
            </List>
          </Section>
        </div>
      </Container>
    </div>
  );
}
