import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import styled from 'styled-components'
import { goToTop } from '../../../src'

const SContent = styled.div`
  font-size: 2em;
`

const Content = React.forwardRef(function Content({children, style}, ref) {
  return (
      <SContent style={style} ref={ref}>
        {children}
      </SContent>
  )
})

const styles = {
  container: {
    height: '500px',
    padding: '25px 85px',
  },
  label: {
    fontSize: '36px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    cursor: 'pointer',
  },
}

export default class Section extends Component {

  static propTypes = {
    backgroundColor: PropTypes.string,
    label: PropTypes.string,
    style: PropTypes.object,
    sections: PropTypes.array,
  }

  static defaultProps = {
    backgroundColor: 'white',
    label: 'Section',
    style: {},
    sections: [],
  }

  renderSectionLink = (section) => {
    return (
      <div key={section.id}>
        <a style={styles.link} href={`#${section.id}`}> {section.label} </a>
      </div>
    )
  }

  render() {
    const {backgroundColor, label, style, sections} = this.props
    const containerStyle = {...style, ...styles.container, backgroundColor}

    return (
      <Content style={containerStyle}>
        <div style={styles.label}>
          <span> {label} </span>
        </div>
        { sections.map(this.renderSectionLink) }
        <div style={styles.link} onClick={goToTop}> Top </div>
      </Content>
    )
  }
}
