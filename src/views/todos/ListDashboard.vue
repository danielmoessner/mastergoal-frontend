<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/t/list" text="List"></breadcrumb-link>
    </breadcrumb-navigation>
    <general-box :overflow="false">
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <overview-item name="Normal-Todos" link="/t/list/normal-todos">
          <NormalTodoSvg />
        </overview-item>
        <overview-item
          name="Never-Ending-Todos"
          link="/t/list/never-ending-todos"
        >
          <NeverEndingTodoSvg />
        </overview-item>
        <overview-item name="Repetitive-Todos" link="/t/list/repetitive-todos">
          <RepetitiveTodoSvg />
        </overview-item>
        <overview-item name="Pipeline-Todos" link="/t/list/pipeline-todos">
          <PipelineTodoSvg />
        </overview-item>
      </div>
    </general-box>
  </backend-box>
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
