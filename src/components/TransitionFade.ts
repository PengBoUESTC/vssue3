
import { h, type FunctionalComponent } from 'vue'

interface Props {
  group?: boolean
  tag?: string
}

const TransitionFade: FunctionalComponent<Props> = (props: Props, context) => {
  const { group = false, tag = 'div' } = props
  const { slots } = context
  return h(
    group ? 'TransitionGroup' : 'Transition',
    {
      props: {
        tag,
        name: 'fade',
        mode: 'out-in',
        appear: true,
      },
    },
    slots
  );
}

export default TransitionFade
