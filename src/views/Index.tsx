const { defineComponent } = Vue;
const { NButton } = naive;

export default defineComponent({
  name: 'Index',
  setup() {
    return () => (
      <NButton type="primary">首页</NButton>
    );
  }
});

