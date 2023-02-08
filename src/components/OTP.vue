<template>
  <div ref="otpCont" class="otpCont">
    <input
      type="text"
      class="digit-box"
      v-for="(el, ind) in digits"
      :key="el + ind"
      v-model="digits[ind]"
      :autofocus="ind === 0"
      :placeholder="ind + 1"
      maxlength="1"
      @keydown="handleKeyDown($event, ind)"
      :class="{bounce: digits[ind] !== null}"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const props = defineProps({
  default: String,

  digitCount: {
    type: Number,
    required: true,
  },
});

const digits = reactive([]);

if (props.default && props.default.length === props.digitCount) {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = props.default.charAt(i);
  }
} else {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = null;
  }
}

const otpCont = ref(null);

const handleKeyDown = function (event, index) {
  if (
    event.key !== "Tab" &&
    event.key !== "ArrowRight" &&
    event.key !== "ArrowLeft"
  ) {
    event.preventDefault();
  }

  if (event.key === "Backspace") {
    digits[index] = null;

    if (index != 0) {
      otpCont.value.children[index - 1].focus();
    }

    return;
  }

  if (new RegExp("^([0-9])$").test(event.key)) {
    digits[index] = event.key;

    if (index != props.digitCount - 1) {
      otpCont.value.children[index + 1].focus();
    }
  }
};
</script>
<style scoped>
.otpCont{
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    margin-top: 42px;
}
.digit-box {
  height: 4rem;
  width: 63px;
  border: 1px solid var(--vt-c-gray);
  display: inline-block;
  border-radius: 5px;
  margin: 5px;
  padding: 15px;
  font-size: 25px;
}

.digit-box:focus {
    border: 1px solid var(--vt-c-volite);
}

.bounce {
  animation: pulse .3s ease-in-out alternate;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
}
</style>
