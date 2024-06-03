import { h, type FunctionalComponent } from 'vue'

interface Props {
  type: string
}

const VssueButton: FunctionalComponent<Props> = (props: Props, ctx) => {
  const { type = 'default'} = props
  const { slots } = ctx
  return h(
    'button',
    {
      class: ['vssue-button', `vssue-button-${type}`],
    },
    slots
  );
}

export default VssueButton