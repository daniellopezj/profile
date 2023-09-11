<template>
  <div class="about-experience__container">
    <h2>👩‍💻Experiencia</h2>
    <div class="about-experience__content">
      <div
        class="about-experience__experience"
        v-for="(experience, index) in Experiences"
        :key="index"
      >
        <span class="about-experience__dates">
          {{ experience.startDate }} - {{ experience.endDate }}
        </span>
        <div class="about-experience__header">
          <h3>{{ experience.title }}</h3>
          <span class="">
            {{ experience.company }}
          </span>
        </div>
        <span class="about-experience__description">
          {{ experience.description }}
        </span>
        <ul v-for="(task, i) in experience.task" :key="i">
          <li class="about-experience__item-list">
            <v-icon
              class="about-experience__icon-tag"
              color="second"
              :icon="mdiTag"
              size="18"
            ></v-icon>
            <span>{{ task }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Experiences } from '@/data/Personal.data';
import { mdiTag } from '@mdi/js';
</script>

<style scoped lang="scss">
.about-experience {
  &__experience {
    border-bottom: 1px solid gray;
    margin: 1rem 0;
  }

  &__dates {
    opacity: 0.75;
    font-style: italic;
  }

  &__description {
    opacity: 0.65;
    font-size: 0.9rem;
  }

  &__header {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    span {
      opacity: 0.75;
      font-style: italic;
    }
  }
  &__item-list {
    margin: 0.4rem 0;
    opacity: 0.85;
    span {
      margin-left: 8px;
      font-size: 0.9rem;
    }
  }
  &__icon-tag {
    transform: rotate(135deg);
  }
}
</style>
