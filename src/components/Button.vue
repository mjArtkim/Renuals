<template>
  <button class="button">
    <div class="bgs"></div>
    <div class="wraps">
      <div class="contents">
        <div class="char state-1">
          <span v-for="(char, index) in textArray" :key="index" :style="{ '--i': index }" :data-label="char">{{ char }}</span>
        </div>
        <div class="icons">
          <div></div>
        </div>
      </div>
    </div>
    <div class="outline"></div>
    <svg class="path"></svg>
    <svg class="splash"></svg>
  </button>
</template>

<script setup>
const text = 'Click';
const textArray = text.split('');
</script>

<style lang="scss" scoped>
.button {
  --white: #ffe6e6;
  --blue-100: #fdb1b1;
  --blue-200: #ff9090;
  --blue-300: #f28989;
  --blue-400: #e25526;
  --blue-500: #833d2b;
  --radius: 18px;

  border-radius: var(--radius);
  outline: none;
  cursor: pointer;
  font-size: 23px;
  font-family: Arial;
  background: transparent;
  letter-spacing: -1px;
  border: 0;
  position: relative;
  width: 220px;
  height: 80px;
  transform: rotate(355deg) skewX(-2deg);

  .bgs {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    filter: blur(1px);

    &::before,
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: calc(var(--radius) * 1.1);
      background: var(--blue-500);
    }

    &::before {
      filter: blur(5px);
      transition: all 0.3s ease;
      box-shadow:
        -7px 6px 0 0 rgba(155, 96, 75, 0.4),
        -14px 12px 0 0 rgba(155, 103, 75, 0.3),
        -21px 18px 4px 0 rgba(155, 106, 75, 0.25),
        -28px 24px 8px 0 rgba(155, 99, 75, 0.15),
        -35px 30px 12px 0 rgba(155, 80, 75, 0.12),
        -42px 36px 16px 0 rgba(155, 96, 75, 0.08),
        -56px 42px 20px 0 rgba(155, 96, 75, 0.05);
    }
  }

  .wraps {
    border-radius: inherit;
    overflow: hidden;
    height: 100%;
    transform: translate(6px, -6px);
    padding: 3px;
    background: linear-gradient(to bottom, var(--blue-100), var(--blue-400));
    position: relative;
    transition: all 0.3s ease;
  }

  .contents {
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    height: 100%;
    position: relative;
    gap: 16px;
    border-radius: calc(var(--radius) * 0.85);
    font-weight: 600;
    transition: all 0.3s ease;
    background: linear-gradient(to bottom, var(--blue-300), var(--blue-400));
    box-shadow:
      inset -2px 12px 11px -5px var(--blue-200),
      inset 1px -3px 11px 0px rgba(0, 0, 0, 0.35);

    &::before {
      content: "";
      position: absolute;
      z-index: 10;
      inset: 0;
      width: 80%;
      top: 45%;
      bottom: 35%;
      margin: auto;
      background: linear-gradient(to bottom, transparent, var(--blue-400));
      filter: brightness(1.3) blur(5px);
      opacity: 0.7;
    }
  }

  .char {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    span {
      display: block;
      color: transparent;
      position: relative;

      &::before,
      &::after {
        content: attr(data-label);
        position: absolute;
        color: var(--white);
        text-shadow: -1px 1px 2px var(--blue-500);
        left: 0;
      }

      &::before {
        opacity: 0;
        transform: translateY(-100%);
      }

      &:nth-child(5) {
        margin-left: 1px;
      }
    }

    &.state-1 {
      span {
        animation: charAppear 1.2s ease backwards calc(var(--i) * 0.03s);
        &:nth-child(5) {
          margin-right: -1px;
        }
      }
    }

    &.state-2 {
      position: absolute;
      left: 70px;

      span::after {
        opacity: 1;
      }
    }
  }

  .icons {
    animation: resetArrow 0.8s cubic-bezier(0.7, -0.5, 0.3, 1.2) forwards;
    z-index: 10;

    div,
    div::before,
    div::after {
      height: 3px;
      border-radius: 1px;
      background-color: var(--white);
    }

    div {
      position: relative;
      width: 24px;
      box-shadow: -2px 2px 5px var(--blue-400);
      transform: scale(0.9);
      background: linear-gradient(to bottom, var(--white), var(--blue-100));
      animation: swingArrow 1s ease-in-out infinite;
      animation-play-state: paused;

      &::before,
      &::after {
        content: "";
        position: absolute;
        right: 0;
        transform-origin: center right;
        width: 14px;
        border-radius: 15px;
        transition: all 0.3s ease;
      }

      &::before {
        transform: rotate(44deg);
        top: 1px;
        box-shadow: 1px -2px 3px -1px var(--blue-400);
        animation: rotateArrowLine 1s linear infinite;
        animation-play-state: paused;
      }

      &::after {
        bottom: 1px;
        transform: rotate(316deg);
        box-shadow: -2px 2px 3px 0 var(--blue-400);
        background: linear-gradient(200deg, var(--white), var(--blue-100));
        animation: rotateArrowLine2 1s linear infinite;
        animation-play-state: paused;
      }
    }
  }

  .path,
  .splash {
    position: absolute;
    pointer-events: none;
  }

  .path {
    z-index: 12;
    bottom: 0;
    left: 0;
    right: 0;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
  }

  .splash {
    top: 0;
    left: 0;
    stroke-dasharray: 60 60;
    stroke-dashoffset: 60;
    transform: translate(-15%, -33%);
    stroke: var(--blue-300);
  }

  &:hover {
    .wraps {
      transform: translate(8px, -8px);
    }

    .outline {
      opacity: 1;

      &::before {
        animation-play-state: running;
      }
    }

    .char.state-1 span::before {
      animation: charAppear 0.7s ease calc(var(--i) * 0.03s);
    }

    .char.state-1 span::after {
      opacity: 1;
      animation: charDisappear 0.7s ease calc(var(--i) * 0.03s);
    }

    .icons div,
    .icons div::before,
    .icons div::after {
      animation-play-state: running;
    }
  }

  &:active {
    .bg::before {
      filter: blur(5px);
      opacity: 0.7;
      box-shadow:
        -7px 6px 0 0 rgb(75 95 155 / 40%),
        -14px 12px 0 0 rgb(75 95 155 / 25%),
        -21px 18px 4px 0 rgb(75 95 155 / 15%);
    }

    .contents {
      box-shadow:
        inset -1px 12px 8px -5px rgba(0, 71, 137, 0.4),
        inset 0px -3px 8px 0px var(--blue-200);
    }

    .words,
    .outline {
      opacity: 0;
    }

    .wraps {
      transform: translate(3px, -3px);
    }

    .splash {
      animation: splash 0.8s cubic-bezier(0.3, 0, 0, 1) forwards 0.05s;
    }
  }

  &:focus {
    .path {
      animation: path 1.6s ease forwards 0.2s;
    }

    .icons {
      animation: arrow 1s cubic-bezier(0.7, -0.5, 0.3, 1.5) forwards;
    }

    .char.state-1 span {
      animation: charDisappear 0.5s ease forwards calc(var(--i) * 0.03s);
    }

    .char.state-2 span::after {
      animation: charAppear 1s ease backwards calc(var(--i) * 0.03s);
    }
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes charAppear {
  0% { transform: translateY(50%); opacity: 0; filter: blur(20px); }
  20% { transform: translateY(70%); opacity: 1; }
  50% { transform: translateY(-15%); opacity: 1; filter: blur(0); }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes charDisappear {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-70%); opacity: 0; }
}
</style>
