<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/t/add" text="Add"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <GeneralBox :overflow="false">
      <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <OverviewItem name="Normal-Todo" link="/t/add/normal-todo">
          <NormalTodoSvg />
        </OverviewItem>
        <OverviewItem name="Never-Ending-Todo" link="/t/add/never-ending-todo">
          <NeverEndingTodoSvg />
        </OverviewItem>
        <OverviewItem name="Repetitive-Todo" link="/t/add/repetitive-todo">
          <RepetitiveTodoSvg />
        </OverviewItem>
        <OverviewItem name="Pipeline-Todo" link="/t/add/pipeline-todo">
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
