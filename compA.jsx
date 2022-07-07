import { useState } from "react";
import compB from "./compB";

const CompA = () => {
  const [message] = useState("Kusuma");
  return (
    <div>
      <compB message={message} />
    </div>
  );
};

export default CompA;
