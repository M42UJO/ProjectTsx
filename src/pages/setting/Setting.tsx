import { useState } from "react";
import Header from "./components/Header";
import SettingList from "./components/SettingList";
import SettingEdit from "./components/SettingEdit";
export default function Setting() {
  const [activeTab, setActiveTab] = useState<string>("รายการ");

  return (
    <div >
      {/* Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content Section */}
      {activeTab === "รายการ" ? <SettingList /> : <SettingEdit />}
    </div>
  );
}
