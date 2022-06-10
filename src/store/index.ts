const { defineStore } = Pinia;

type StateType = {
  userName: string
}

const IndexStore = defineStore({
  id: 'index-store',
  state: (): StateType => ({
    userName: 'Jack'
  }),
  actions: {}
});

export default IndexStore;
