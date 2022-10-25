import React from "react";

export default function InputGroup({ children, className = "col-span-1" }) {
  return <div className={"flex gap-2 flex-col " + className}>{children}</div>;
}
