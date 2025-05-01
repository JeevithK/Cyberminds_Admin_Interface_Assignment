import { useState } from "react";
import Createjobpage from "../pages/Createjobpage";
import Listalljobs from "./Listalljobs";

const ParentComponent = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  return (
    <>
      <Createjobpage onJobAdded={() => setRefreshTrigger((prev) => prev + 1)} />
      <Listalljobs refreshTrigger={refreshTrigger} />
    </>
  );
};

export default ParentComponent;
