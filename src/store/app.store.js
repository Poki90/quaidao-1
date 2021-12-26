import {runInAction, makeAutoObservable} from 'mobx';

export class AppStore {
  data = [];
  refresh = false

  constructor(data, refresh) {
    this.data = data;
    this.refresh = refresh;
    makeAutoObservable(this);
  }

  setRefresh() {
    runInAction(() => {
      this.refresh = !this.refresh;
    });

  }

  setData() {
    runInAction(() => {
      this.data = !this.data;
    });
  }

}

const appStore = new AppStore();
export default appStore;
