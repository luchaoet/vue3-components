import type {
  ComponentInternalInstance,
  CSSProperties,
  Ref,
  VNode,
  PropType,
} from 'vue'

interface Store {
  table: Array<Object>,
  initialState: Object,
  data: Array<Object>,
  columns: Array<Object>,
  insetColumns: Function
}

export type {
  Store
}
