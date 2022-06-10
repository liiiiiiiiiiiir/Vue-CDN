const { defineComponent } = Vue;
const { RouterView } = VueRouter;

export default defineComponent({
  name: 'App',
  setup() {
    return () => <RouterView />;
  }
});
