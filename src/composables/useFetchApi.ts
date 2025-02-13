import { ref } from 'vue'

export function useFetchApi<ITodoModel>(url: string) {
  const response = ref<ITodoModel>()
  const isLoading = ref<boolean>(true)
  const error = ref<Error>()

  fetch(url)
    .then((value) => value.json())
    .then((jsonData) => {
      response.value = jsonData
      isLoading.value = false
    })
    .catch((e) => (error.value = e))
  return { response, isLoading, error }
}
