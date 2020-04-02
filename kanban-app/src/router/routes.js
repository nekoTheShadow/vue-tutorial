import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDetailModal from '@/components/templates/KbnTaskDetailModal.vue'

export default [{
  path: '/',
  components: KbnBoardView,
  meta: {requireAuth: true}
}, {
  path: '/login',
  components: KbnLoginView,
  meta: {requireAuth: true}
}, {
  path: '/task/:id',
  components: KbnTaskDetailModal,
  meta: {requireAuth: true}
}, {
  path: '*',
  redirect: '/'
}]