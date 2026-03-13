// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { useData, useRoute } from 'vitepress'
import { watch, onMounted, nextTick } from 'vue'

export default {
  extends: DefaultTheme,
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData()
    const route = useRoute()
    
    // Giscus 配置
    // 请替换为你的实际配置
    // 参考：https://giscus.app/zh-CN 生成配置
    const giscusConfig = {
      repo: 'students209/openclaw-knowledge-base',  // 替换为你的仓库
      repoId: '',  // 从 giscus.app 获取
      category: 'Announcements',  // Discussions 分类
      categoryId: '',  // 从 giscus.app 获取
      mapping: 'pathname',
      inputPosition: 'top',
      lang: 'zh-CN',
      theme: 'preferred_color_scheme'
    }
    
    // 初始化评论
    onMounted(() => {
      // 首次加载
      if (frontmatter.value.comments !== false) {
        giscusTalk(giscusConfig, {
          selector: '.comment-container',
          fontSize: '14px'
        })
      }
    })
    
    // 路由变化时重新加载
    watch(
      () => route.path,
      () => {
        nextTick(() => {
          if (frontmatter.value.comments !== false) {
            giscusTalk(giscusConfig, {
              selector: '.comment-container',
              fontSize: '14px'
            })
          }
        })
      }
    )
  }
}