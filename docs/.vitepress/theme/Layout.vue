<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { watch, onMounted, ref, nextTick } from 'vue'

const { isDark, frontmatter } = useData()
const commentContainer = ref(null)

// Giscus 配置
// 请在 https://giscus.app/zh-CN 生成你的配置并替换下面的值
const giscusConfig = {
  src: 'https://giscus.app/client.js',
  'data-repo': 'students209/openclaw-knowledge-base',  // 替换为你的仓库
  'data-repo-id': '',  // 从 giscus.app 获取
  'data-category': 'Announcements',  // Discussions 分类
  'data-category-id': '',  // 从 giscus.app 获取
  'data-mapping': 'pathname',
  'data-strict': '0',
  'data-reactions-enabled': '1',
  'data-emit-metadata': '0',
  'data-input-position': 'top',
  'data-theme': 'preferred_color_scheme',
  'data-lang': 'zh-CN',
  'data-loading': 'lazy',
  crossorigin: 'anonymous',
  async: true
}

// 加载 Giscus
function loadGiscus() {
  if (!commentContainer.value) return
  
  // 清空现有评论
  commentContainer.value.innerHTML = ''
  
  // 创建 script 元素
  const script = document.createElement('script')
  Object.entries(giscusConfig).forEach(([key, value]) => {
    script.setAttribute(key, value)
  })
  
  // 设置主题
  const theme = isDark.value ? 'dark' : 'light'
  script.setAttribute('data-theme', theme)
  
  commentContainer.value.appendChild(script)
}

// 监听主题变化
watch(isDark, () => {
  // 通知 Giscus 主题变化
  if (window.giscus) {
    window.giscus.setTheme(isDark.value ? 'dark' : 'light')
  }
})

// 监听路由变化
watch(
  () => window.location.pathname,
  () => {
    nextTick(() => {
      if (frontmatter.value.comments !== false) {
        loadGiscus()
      }
    })
  }
)

// 组件挂载时加载评论
onMounted(() => {
  if (frontmatter.value.comments !== false) {
    loadGiscus()
  }
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <!-- 评论区域 -->
      <div v-if="frontmatter.comments !== false" class="giscus-container">
        <h3 id="comments">评论留言</h3>
        <p class="giscus-tip">使用 GitHub 登录评论，支持 Markdown 语法</p>
        <div ref="commentContainer" class="giscus"></div>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style>
.giscus-container {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.giscus-container h3 {
  margin-bottom: 0.5rem;
}

.giscus-tip {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.giscus {
  min-height: 200px;
}
</style>