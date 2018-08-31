import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import ScrollableAnchor from '../../../../src'

class ColorContent extends PureComponent {

  render() {
    const {
      className,
      title,
      hash,
    } = this.props

    return (
      <ScrollableAnchor id={hash}>
        <div className={className}>
          <h2>{title}</h2>
        </div>
      </ScrollableAnchor>
    )
  }
}

ColorContent.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  hash: PropTypes.string,
}

export default ColorContent
