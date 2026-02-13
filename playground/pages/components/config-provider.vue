<script setup lang="ts">
import BasicDemo from '~/components/basic-demos/config-provider/demo.vue'

const sourceDemo = '/Users/yanyu/workspace/gitea/antdv-next/antdv-next/playground/src/pages/components/config-provider/demo/direction.vue'
</script>

<template>
  <a-space
    direction="vertical"
    :size="16"
    style="width: 100%;"
  >
    <a-breadcrumb :items="[{ title: 'Components' }, { title: 'config-provider' }]" />

    <a-card title="Config Provider">
      <div class="source-demo">
        {{ sourceDemo }}
      </div>

      <div class="demo-wrap">
        <BasicDemo />
      </div>
    </a-card>
  </a-space>
</template>

<style scoped>
.source-demo {
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  margin-bottom: 12px;
  word-break: break-all;
}

.demo-wrap {
  min-height: 84px;
}
</style>
