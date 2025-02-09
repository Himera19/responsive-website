import { onMounted, onUnmounted, reactive, ref } from 'vue'

export function useScreenInfo() {
  const widthValue = ref(window.innerWidth)
  const widthNames = reactive({
    sm: false,
    md: false,
    hg: false,
  })

  const updateWidth = () => {
    widthValue.value = window.innerWidth
    widthNames.sm = widthValue.value < 800
    widthNames.md = widthValue.value > 800 && widthValue.value < 1200
    widthNames.hg = widthValue.value > 1200
  }

  onMounted(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  return { widthNames, widthValue }
}
