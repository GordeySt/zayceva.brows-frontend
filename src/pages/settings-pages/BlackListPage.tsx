import BlackListBox from "../../components/settings-pages/blacklist-page/BlackListBox";
import { InfoBox } from "../../components/settings-pages/blacklist-page/InfoBox";

const BlackListPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <BlackListBox />
      <InfoBox />
    </div>
  );
};

export default BlackListPage;
