import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import './index.css';

class PageMenu extends PureComponent {

  render() {
    const {children} = this.props;

    return (
      <ul className="page_menu">
        {children}
      </ul>
    )
  }
}

PageMenu.propTypes = {
  children: PropTypes.any,
}

export default PageMenu
