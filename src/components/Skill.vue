<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n() 
</script>
<template>
  <div class="sk-box">
    <div>
      <h2>SKILLS</h2>
      <div>- Choose one</div>
    </div>
    <div class="sk-choo">
      <ol>
        <li>
          <div>
            <h3>DESIGN</h3>
            <button class="material-icons-round">expand_more</button>
          </div>
          <ul>
            <li>
              <img src="@/assets/img/skills/xd_i.png">
              <div>Adobe XD</div>
              <div class="sk-checkbox">
                <input type="checkbox" id="sk_check" />
                <label for="sk_check">
                  <div class="sk-tick"></div>
                </label>
              </div>
            </li>
            <li>
              <img src="@/assets/img/skills/ps_i.png">
              <div>Adobe Photoshop</div>
              <div class="sk-checkbox">
                <input type="checkbox" id="sk_check" />
                <label for="sk_check">
                  <div class="sk-tick"></div>
                </label>
              </div>
            </li>
            <li>
              <img src="@/assets/img/skills/ai_i.png">
              <div>Adobe Illustrator</div>
              <div class="sk-checkbox">
                <input type="checkbox" id="sk_check" />
                <label for="sk_check">
                  <div class="sk-tick"></div>
                </label>
              </div>
            </li>
            <li>
              <img src="@/assets/img/skills/pr_i.png">
              <div>Adobe Premiere Pro</div>
              <div class="sk-checkbox">
                <input type="checkbox" id="sk_check" />
                <label for="sk_check">
                  <div class="sk-tick"></div>
                </label>
              </div>
            </li>
            <li>
              <img src="@/assets/img/skills/ae_i.png">
              <div>Adobe After Effects</div>
              <div class="sk-checkbox">
                <input type="checkbox" id="sk_check" />
                <label for="sk_check">
                  <div class="sk-tick"></div>
                </label>
              </div>
            </li>
            <li>
              <img src="@/assets/img/skills/fg_i.png">
              <div>Figma</div>
              <div class="sk-checkbox">
                <input type="checkbox" id="sk_check" />
                <label for="sk_check">
                  <div class="sk-tick"></div>
                </label>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div>
            <h3>DEVELOPER</h3>
            <button class="material-icons-round">expand_more</button>
          </div>
          <ul>
            <li>
              <img src="@/assets/img/skills/vue_i.png">
              <div>VUE</div>
              <div class="sk-checkbox">
                <input type="checkbox" id="sk_check" />
                <label for="sk_check">
                  <div class="sk-tick"></div>
                </label>
              </div>
            </li>
            <li>
              <img src="@/assets/img/skills/html_i.png">
              <div>HTML</div>
              <div class="sk-checkbox">
                <input type="checkbox" id="sk_check" />
                <label for="sk_check">
                  <div class="sk-tick"></div>
                </label>
              </div>
            </li>
            <li>
              <img src="@/assets/img/skills/css_i.png">
              <div>CSS</div>
              <div class="sk-checkbox">
                <input type="checkbox" id="sk_check" />
                <label for="sk_check">
                  <div class="sk-tick"></div>
                </label>
              </div>
            </li>
            <li>
              <img src="@/assets/img/skills/javascript_i.png">
              <div>Javascript</div>
              <div class="sk-checkbox">
                <input type="checkbox" id="sk_check" />
                <label for="sk_check">
                  <div class="sk-tick"></div>
                </label>
              </div>
            </li>
            <li>
              <img src="@/assets/img/skills/typescript_i.png">
              <div>Typescript</div>
              <div class="sk-checkbox">
                <input type="checkbox" id="sk_check" />
                <label for="sk_check">
                  <div class="sk-tick"></div>
                </label>
              </div>
            </li>
            <li>
              <img src="@/assets/img/skills/flutter_i.png">
              <div>Flutter</div>
              <div class="sk-checkbox">
                <input type="checkbox" id="sk_check" />
                <label for="sk_check">
                  <div class="sk-tick"></div>
                </label>
              </div>
            </li>
            <li>
              <img src="@/assets/img/skills/php_i.png">
              <div>PHP</div>
              <div class="sk-checkbox">
                <input type="checkbox" id="sk_check" />
                <label for="sk_check">
                  <div class="sk-tick"></div>
                </label>
              </div>
            </li>
          </ul>
        </li>
      </ol>
    </div>
    <div class="sk-view">
      <ol>
        <li>
          <img src="@/assets/img/skills/skils_d_01.png">
        </li>
        <li>
          <img src="@/assets/img/skills/skils_d_02.png">
        </li>
        <li>
          <img src="@/assets/img/skills/skils_d_03.png">
        </li>
        <li>
          <img src="@/assets/img/skills/skils_d_04.png">
        </li>
        <li>
          <img src="@/assets/img/skills/skils_d_05.png">
        </li>
        <li>
          <img src="@/assets/img/skills/skils_d_06.png">
        </li>
        <li>
          <img src="@/assets/img/skills/skils_e_01.png">
        </li>
        <li>
          <img src="@/assets/img/skills/skils_e_02.png">
        </li>
        <li>
          <img src="@/assets/img/skills/skils_e_03.png">
        </li>
        <li>
          <img src="@/assets/img/skills/skils_e_04.png">
        </li>
        <li>
          <img src="@/assets/img/skills/skils_e_05.png">
        </li>
        <li>
          <img src="@/assets/img/skills/skils_e_06.png">
        </li>
        <li>
          <img src="@/assets/img/skills/skils_e_07.png">
        </li>
      </ol>
    </div>
  </div>
</template>



<style lang="scss">
.sk-checkbox {
  * {
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
  input[type="checkbox"] {
    display: none;
    &:checked + label {
      background-color: #4158d0;
      background-image: linear-gradient(
        45deg,
        #2196f3 0%,
        #64b5f6 46%,
        #bbdefb 100%
      );
      box-shadow:
        rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
      &::before {
        width: 0;
        height: 0;
      }
      .sk-tick:before, .sk-tick:after {
        transform: translate(0);
        opacity: 1;
      }
    }
  }
  label {
    --size: 30px;
    --shadow: calc(var(--size) * 0.07) calc(var(--size) * 0.1);
    position: relative;
    display: block;
    width: var(--size);
    height: var(--size);
    margin: 0 auto;
    background-color: #fff;
    background-image: linear-gradient(
      45deg,
      #545454 0%,
      #b3b3b3 46%,
      #ffffff 100%
    );
    border-radius: 50%;
    box-shadow: 0 var(--shadow) rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition:
      0.2s ease transform,
      0.2s ease background-color,
      0.2s ease box-shadow;
    overflow: hidden;
    z-index: 1;
    &::before{  
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      width: calc(var(--size) * 0.7);
      height: calc(var(--size) * 0.7);
      margin: 0 auto;
      background-color: #fff;
      transform: translateY(-50%);
      border-radius: 50%;
      box-shadow: inset 0 var(--shadow) rgba(255, 255, 255, 0.8);
      transition:
        0.2s ease width,
        0.2s ease height;
    }
    &:hover::before{
      width: calc(var(--size) * 0.55);
      height: calc(var(--size) * 0.55);
      box-shadow: inset 0 var(--shadow) rgba(255, 255, 255, 0.5);
    }
    &:active{
      transform: scale(0.9);
    }
  }
  .sk-tick {
    position: absolute;
    top: -1px;
    right: 0;
    left: calc(var(--size) * -0.05);
    width: calc(var(--size) * 0.6);
    height: calc(var(--size) * 0.6);
    margin: 0 auto;
    margin-left: calc(var(--size) * 0.14);
    transform: rotateZ(-40deg);
    &::before, &::after {
      content: "";
      position: absolute;
      background-color: #fff;
      border-radius: 2px;
      opacity: 0;
      transition:
        0.2s ease transform,
        0.2s ease opacity;
    }
    &::before{
      left: 0;
      bottom: 0;
      width: calc(var(--size) * 0.1);
      height: calc(var(--size) * 0.3);
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.23);
      transform: translateY(calc(var(--size) * -0.68));
    }
    &::after {
      left: 0;
      bottom: 0;
      width: 100%;
      height: calc(var(--size) * 0.1);
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.23);
      transform: translateX(calc(var(--size) * 0.78));
    }
  }
}

</style>