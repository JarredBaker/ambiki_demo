<script>
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/stores/theme';

export default {
  setup() {
    const themeStore = useThemeStore();
    const { theme } = storeToRefs(themeStore);

    return {
      theme,
    }
  },

  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      masks: {
        weekdays: 'WWW',
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: "Today",
            class: 'bg-blue-500 custom-data-block',
          },
          dates: new Date(year, month, 6),
        },
      ],
    };
  },
};
</script>

<template>
  <div class="text-center section">
    <v-calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
      :is-dark="theme === 'dark-theme'"
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden spec-height">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="overflow-y-auto overflow-x-auto">
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              :class="attr.customData.class"
            >{{ attr.customData.title }}</p>
          </div>
        </div>
      </template>
    </v-calendar>
  </div>
</template>

<style lang="postcss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}

.text-xs {
  color: var(--text-primary-color);
}

.spec-height {
  min-height: 70px;
}

.vc-header {
  background-color: var(--highlight-color);
  padding: 10px 0;
}

.custom-data-block {
  background: var(--background-color-primary);
  border-radius: 10px;
}

/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 70px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 25px;
  width: 100%;
  height: 60vh;
  & .vc-header {
    background-color: var(--highlight-color);
    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    min-height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;
    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>