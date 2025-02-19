import { useState } from "react";

const useNavigateTab = () => {
  const [activeTab, setActiveTab] = useState("details");

  return { activeTab, setActiveTab };
};

export default useNavigateTab;
