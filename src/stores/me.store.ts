import type { User } from '@/types'
export const useMeStore = defineStore('counter', () => {
  const me = ref<User | undefined>(undefined)

  const login = () => {
    /* 임시 데이터 */
    me.value = {
      id: 1,
      name: '뤼에르',
      description: '안녕하세요',
      email: 'user_aaaaa@cuppers.shop',
      nickname: '뤼에르 🦢',
      phone: '+82(10)1234-4321',
      thumbnail_url:
        'https://image-pastemagazine-com-public-bucket.storage.googleapis.com/wp-content/uploads/2023/02/27182000/fire_emblem_engage_main.jpg',
      created_at: '2023-01-20T11:28:58.670Z',
      updated_at: '2023-01-20T11:28:58.670Z',
      login_at: new Date().toISOString(),
      is_host: true,
    }
  }
  const logout = () => {
    me.value = undefined
  }

  return { me, login, logout }
})
