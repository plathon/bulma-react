export function buttonStyle(props) {
  let styles = 'button'
  //button style type
  if (props.style) {
    if (props.style === 'primary') styles += ' is-primary'
    else if (props.style === 'info') styles += ' is-info'
    else if (props.style === 'success') styles += ' is-success'
    else if (props.style === 'warning') styles += ' is-warning'
    else if (props.style === 'danger') styles += ' is-danger'
  }
  //button size
  if (props.size) {
    if (props.size === 'small') styles += ' is-small'
    else if (props.size === 'medium') styles += ' is-medium'
    else if (props.size === 'large') styles += ' is-large'
  }
  //outlined
  if (props.outlined) styles += ' is-outlined'
  //loading
  if (props.loading) styles += ' is-loading'
  //disabled
  if (props.disabled) styles += ' is-disabled'
  //className
  if (props.className) styles += ` ${props.className}`

  return styles;
}
