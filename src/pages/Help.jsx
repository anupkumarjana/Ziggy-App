import React from "react";
import HelpClass from "../components/HelpClass";

export default function Help() {
  return (
    <div className="lg:px-32 px-4 mt-44">
      <h1>Help</h1>
      <HelpClass
        name={"Anup K Jana"}
        location={"Haldia"}
        gender={"Male"}
        age={"25"}
      />
    </div>
  );
}
