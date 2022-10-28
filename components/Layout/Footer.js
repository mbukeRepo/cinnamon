import Container from "../UI/Container";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-linear">
      <div className="py-24 text-white">
        <Container>
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <ul className="flex flex-col gap-5">
                <li className="font-bold text-xl">Buildit</li>
                <li className="">Development company, 2022</li>
              </ul>
              <p>Site design – ⏰ Alarm</p>
            </div>
            <div className="flex flex-col gap-8 justify-between">
              <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
              </ul>
              <div className="flex gap-4">
                <div>
                  <img src="/instagram.svg" />
                </div>
                <div>
                  <img src="/facebook.svg" />
                </div>
              </div>
            </div>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/Project">Project</Link>
              </li>
              <li>
                <Link href="/contacts">Contact</Link>
              </li>
            </ul>
            <div className="flex flex-col justify-between">
              <ul>
                <li>Get in touch</li>
                <li>
                  60 Manor Station St. Fairport,
                  <br /> NY 14450
                </li>
              </ul>
              <ul>
                <li>708-790-0000</li>
                <li>sales@buildit.site</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
