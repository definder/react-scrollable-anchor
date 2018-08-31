import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class PageMenuItem extends PureComponent {

  render() {
    const {
      link,
      children,
    } = this.props

    return (
      <li className="page_menu_item">
        <Link to={link}>{children}</Link>
      </li>
    )
  }
}

PageMenuItem.propTypes = {
  link: PropTypes.string,
  children: PropTypes.any,
}

export default PageMenuItem
