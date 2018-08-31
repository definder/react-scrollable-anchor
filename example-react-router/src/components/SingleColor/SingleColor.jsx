import React, {PureComponent} from 'react'
import PageMenu from '../PageMenu/PageMenu'
import PageMenuItem from '../PageMenu/PageMenuItem/PageMenuItem'
import {goToTop} from '../../../../src'
import ColorContent from '../ColorContent/ColorContent'

import './index.css';

const colorCount = [...Array(5).keys()];

class SingleColor extends PureComponent {

  componentDidMount() {
    goToTop()
  }

  render() {
    return (
      <section className="single_color">
        <PageMenu>
          {colorCount.map((value, key) => (
            <PageMenuItem link={`/single-color#type_${key}`} key={key}>
              type - ${key}
            </PageMenuItem>
          ))}
        </PageMenu>
        {colorCount.map((value, key) => (
          <ColorContent
            className={`single_color__block type_${key}`}
            title={`Type - ${key}`}
            hash={`type_${key}`}
            key={key}
          />
        ))}
      </section>
    )
  }
}

export default SingleColor
