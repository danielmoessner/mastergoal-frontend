<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/t/list" text="List"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <GeneralBox :overflow="false">
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <OverviewItem name="Normal-Todos" link="/t/list/normal-todos">
          <NormalTodoSvg />
        </OverviewItem>
        <OverviewItem
          name="Never-Ending-Todos"
          link="/t/list/never-ending-todos"
        >
          <NeverEndingTodoSvg />
        </OverviewItem>
        <OverviewItem name="Repetitive-Todos" link="/t/list/repetitive-todos">
          <RepetitiveTodoSvg />
        </OverviewItem>
        <OverviewItem name="Pipeline-Todos" link="/t/list/pipeline-todos">
          <PipelineTodoSvg />
        </OverviewItem>
      </div>
    </GeneralBox>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import OverviewItem from "../../components/OverviewItem.vue";
import GeneralBox from "../../components/Box/General.vue";
import NeverEndingTodoSvg from "../../components/Svg/NeverEndingTodo.vue";
import RepetitiveTodoSvg from "../../components/Svg/RepetitiveTodo.vue";
import NormalTodoSvg from "../../components/Svg/NormalTodo.vue";
import PipelineTodoSvg from "../../components/Svg/PipelineTodo.vue";

export default {
  name: "TodosList",
  components: {
    GeneralBox,
    OverviewItem,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    NeverEndingTodoSvg,
    RepetitiveTodoSvg,
    NormalTodoSvg,
    PipelineTodoSvg,
  },
};
</script>
