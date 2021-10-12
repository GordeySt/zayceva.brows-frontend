import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../../common/stores/Store";
import BlackListBox from "../../components/settings-pages/blacklist-page/BlackListBox";
import { InfoBox } from "../../components/settings-pages/blacklist-page/InfoBox";

const BlackListPage = observer(() => {
  const {
    blacklistStore: { loadUsers, blockedUsers },
  } = useStore();

  useEffect(() => {
    if (blockedUsers.length === 0) loadUsers();
  }, [blockedUsers.length, loadUsers]);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <BlackListBox />
      <InfoBox />
    </div>
  );
});

export default BlackListPage;
