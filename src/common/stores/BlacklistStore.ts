import { makeAutoObservable } from "mobx";

export type User = {
  userName: string;
  firstName: string;
  secondName: string;
};

export default class BlacklistStore {
  deleteUserLoading = false;
  target = "";
  blockedUsers: User[] = [
    {
      userName: "vredina",
      firstName: "Анастасия",
      secondName: "Вредина",
    },
    {
      userName: "maxim2002",
      firstName: "Максим",
      secondName: "Горький",
    },
  ];

  users: User[] = [
    {
      userName: "vredina",
      firstName: "Анастасия",
      secondName: "Вредина",
    },
    {
      userName: "maxim2002",
      firstName: "Максим",
      secondName: "Горький",
    },
    {
      userName: "gonchar",
      firstName: "Андрей",
      secondName: "Гончаров",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addUserToBlackList = (userName: string) => {
    const user = this.users.find((user) => user.userName === userName);

    if (user) {
      this.blockedUsers = [...this.blockedUsers, user];
    }
  };

  removeUserFromBlackList = async (userName: string, target: string) => {
    this.deleteUserLoading = true;
    this.target = target;
    setTimeout(() => {
      const filteredBlackList = this.blockedUsers.filter(
        (user) => user.userName !== userName
      );

      this.blockedUsers = filteredBlackList;
      this.deleteUserLoading = false;
    }, 2000);
  };
}
