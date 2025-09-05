<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { posts } from '@/data/posts.js'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n() 
const allPosts = ref(
  [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))
)
const visiblePosts = ref([])      
const page = ref(1)              
const limit = 8                
const loading = ref(false)       
const hasMore = ref(true)       

const loadMore = () => {
  if (loading.value || !hasMore.value) return
  loading.value = true

  const start = (page.value - 1) * limit
  const end = start + limit
  const newItems = allPosts.value.slice(start, end)

  if (newItems.length > 0) {
    visiblePosts.value.push(...newItems)
    page.value++
  } else {
    hasMore.value = false
  }

  loading.value = false
}


const handleScroll = () => {
  const scrollBottom = window.innerHeight + window.scrollY
  const docHeight = document.documentElement.offsetHeight
  if (scrollBottom >= docHeight - 10) {
    loadMore()
  }
}

const isModalOpen = ref(false)
const selectedPost = ref(null)

const openModal = (post) => {
  selectedPost.value = post
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedPost.value = null
}

onMounted(() => {
  loadMore() 
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <div class="post-box">
    <h2 class="post-tit">{{ t('menu.design') }}</h2>
    <div class="post-board">
      <transition-group name="fade" tag="div" class="post-board-inner">
        <div 
          v-for="post in visiblePosts" 
          :key="post.id" 
          class="post-thumbnail"
          @click="openModal(post)"
        >
          <img :src="post.image" :alt="post.title" />
          <div class="thumbnail-title">{{ post.title }}</div>
        </div>
      </transition-group>

      <div v-if="loading" class="loading">Loading...</div>

      <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">×</button>
          <div>
            <img :src="selectedPost.image" :alt="selectedPost.title" class="modal-img" />
            <div class="mc-inner">
              <h3>{{ selectedPost.title }}</h3>
              <div>{{ selectedPost.content }}</div>
              <div>{{ selectedPost.date }}</div>
            </div>
            <div class="mc-bottom">
              <button @click="closeModal" class="close-txt">  
                <span class="top-key"></span>
                <span class="text">Close</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.post-box {
  padding: 60px 0 0;
  background-color: #333;
}
.post-board {
  max-width: 1500px;
  margin: auto;
  width: 100%;
  min-height: 120vh;
}
.post-tit {
  font-size: 3vw;
  color: #eee;
  padding: 0 100px;
  @media (max-width: 1200px) {
    font-size: 9vw;
    padding: 30px 30px 0;
  }
}
.post-board-inner {
  display: grid;
  gap: 10px;
  padding: 30px 20px;
  justify-items: center;
  @media screen and (max-width: 616px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px 10px;
    }
    @media screen and (min-width: 617px)  and (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 769px)  and (max-width: 1500px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1501px) and (max-width: 1780px) {
      grid-template-columns: repeat(4, 1fr);
    }  
    @media screen and (min-width: 1781px) {
      grid-template-columns: repeat(auto-fill, minmax(20%, auto));
    }
}
.post-thumbnail {
  --size: clamp(180px, 21vw, 350px);
  width: var(--size);
  height: var(--size);
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #ddd;
  position: relative;
  overflow: hidden;
}

.post-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail-title {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 4px;
  font-size: 14px;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
}

.loading {
  width: 100%;
  text-align: center;
  padding: 20px;
  font-size: 14px;
  color: #555;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  @media (max-width: 1200px) {
    padding: 0px 30px 0;
  }
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  max-width: 55%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  @media screen  and (max-width: 768px) {
      max-width: 100%;
    }
}
.mc-inner div {
  margin: 10px 0;
} 
.mc-bottom {
  text-align: right;
}
.modal-img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 20px;
  border: none;
  background: transparent;
  font-size: 56px;
  cursor: pointer;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  transition: all 0.2s ease;
  &:hover {
    color: hsl(0, 0%, 0%);
    text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.8);
    transform: rotate(135deg);
  }
}

.close-txt{
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 1.25em 2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  transition: all 0.3s ease-in-out;
  user-select: none;
  font-size: 13px;

  &::before {
    content: " ";
    width: 1.5625rem;
    height: 2px;
    background: black;
    top: 50%;
    left: 1.5em;
    position: absolute;
    transform: translateY(-50%);
    transform-origin: center;
    transition: background 0.3s linear, width 0.3s linear;
  }

  .text {
    font-size: 1.125em;
    line-height: 1.33333em;
    padding-left: 2em;
    display: block;
    text-align: left;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
  }

  .top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, left 0.3s ease-out;
  }

  .bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  .bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  &:hover {
    color: white;
    background: black;

    &::before {
      width: 0.9375rem;
      background: white;
    }

    .text {
      color: white;
      padding-left: 1.5em;
    }

    .top-key {
      left: -2px;
      width: 0px;
    }

    .bottom-key-1,
    .bottom-key-2 {
      right: 0;
      width: 0;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}
</style>