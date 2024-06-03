import { h, type FunctionalComponent } from 'vue'

interface Props {
  name: string,
  title?: string | undefined
}

const VssueIcon: FunctionalComponent<Props> = (props: Props) => {
  const { name, title } = props
  return  h(
    'svg',
    {
      class: ['vssue-icon', `vssue-icon-${name}`],
      attrs: {
        'aria-hidden': 'true',
      },
    },
    [
      h('title', title),
      h('use', {
        attrs: {
          'xlink:href': `#vssue-icon-${name}`,
        },
      }),
    ]
  );
}

export default VssueIcon
