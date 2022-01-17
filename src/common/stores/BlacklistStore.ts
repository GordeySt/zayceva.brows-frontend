import { makeAutoObservable } from "mobx";

export type User = {
  userName: string;
  firstName: string;
  secondName: string;
};

export default class BlacklistStore {
  deleteUserLoading = false;
  loadUsersLoading = false;
  loadMoreUsersLoading = false;
  addUserToBlackListLoading = false;
  pageSize = 3;
  currentPage = 1;
  target = "";
  blockedUsers: User[] = [];
  notFoundUserMessage?: string = undefined;
  loadedUsers: User[] = [
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
      userName: "dronova",
      firstName: "Ангелина",
      secondName: "Дронова",
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

  get totalPages() {
    return Math.ceil(this.loadedUsers.length / this.pageSize);
  }

  setCurrentPage = (currentPage: number) => {
    this.currentPage = currentPage;
  };

  loadUsers = () => {
    this.loadUsersLoading = true;

    setTimeout(() => {
      this.blockedUsers = this.loadedUsers.slice(
        0,
        this.pageSize * this.currentPage
      );
      this.loadUsersLoading = false;
    }, 2000);
  };

  loadMoreUsers = () => {
    this.loadMoreUsersLoading = true;

    setTimeout(() => {
      this.blockedUsers = this.loadedUsers.slice(
        0,
        this.pageSize * this.currentPage
      );
      this.loadMoreUsersLoading = false;
    }, 2000);
  };

  addUserToBlackList = (userName: string) => {
    this.addUserToBlackListLoading = true;

    setTimeout(() => {
      const user = this.users.find((user) => user.userName === userName);

      if (user) {
        this.blockedUsers = [...this.blockedUsers, user];
        this.notFoundUserMessage = "";
      } else {
        this.notFoundUserMessage = "Пользователь не найден"
      }

      this.addUserToBlackListLoading = false;
    }, 2000)
  };

  removeUserFromBlackList = (userName: string, target: string) => {
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
