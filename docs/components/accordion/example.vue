<template>
  <basic-accordion>
    <basic-accordion-panel title="첫 번째">
      첫 번째 패널 내용
    </basic-accordion-panel>
    <basic-accordion-panel title="두 번째">
      <template v-for="i in 20">
        두 번째 패널 내용 {{ i }}
        <br v-if="i !== 20">
      </template>
    </basic-accordion-panel>
    <basic-accordion-panel title="세 번째">
      세 번째 패널 내용
    </basic-accordion-panel>
  </basic-accordion>
</template>

<script setup>
import BasicAccordion from './accordion.vue'
import BasicAccordionPanel from './accordion-panel.vue'
</script>
