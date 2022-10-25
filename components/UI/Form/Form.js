import React from "react";
import Input from "./Input";
import InputGroup from "./InputGroup";
import Label from "./Label";
import Button from "../Button";
import Textarea from "./Textarea";

export default function Form() {
  return (
    <div className="bg-secondary grid grid-cols-2 gap-4 px-8 py-12">
      <InputGroup>
        <Label label="name">Name</Label>
        <Input />
      </InputGroup>
      <InputGroup>
        <Label label="email">Email</Label>
        <Input />
      </InputGroup>
      <InputGroup className="col-span-2">
        <Label label="subject">Subject</Label>
        <Input />
      </InputGroup>
      <InputGroup className="col-span-2">
        <Label label="message">Message</Label>
        <Textarea />
      </InputGroup>
      <InputGroup className="col-span-2">
        <Button className="bg-primary text-white">Send Message</Button>
      </InputGroup>
    </div>
  );
}
