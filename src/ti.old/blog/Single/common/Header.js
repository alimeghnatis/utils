import React, { memo } from 'react'
import PropTypes from 'prop-types'

import C from 'ui/cssClasses'
import P from 'ui/cssPrefixes'

//import { Subtitle } from 'ui/common'
import { Heading } from 'ui/elements'
import Breadcrumb from './Breadcrumb'
import AuthorInfo from './AuthorInfo'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.blog.single" */ './header.scss')

const main_class = P.BLOG.SINGLE + 'header'

const Header = memo(({
  id,
  className='',
  subtitleClassName,
  style,
  user,
  category,
  subtitle,
  title,
  description,
  imgSrc,
  imgAlt,
}) =>
  <>
    { imgSrc &&
      <img
        src={ imgSrc }
        alt={ imgAlt }
        className='row fit'
        style={{ maxHeight:'250px' }}
      />
    }
    <header
      className={
        [
          main_class,
          className
        ].join(' ')
      }
      id={ id }
      style={ style }

    >
      <Heading
        className='mv1'
        as={ 'h1' }
        subtitle={ subtitle }
        subtitleClassName={ subtitleClassName }
        title={ title }
        label={
          <Breadcrumb
            category={ category }
            elementClassName={ 'c-dark-grey ch-off-black' }
            className='s-sm'
          />
        }
        headingClassName='sm'
        labelClassName={ 'fh'}
      />

      <div className='sub'>
        { user &&
          <AuthorInfo user={ user }/>
        }
        { description &&
          <p className='txt mv2 ul'><em>{ description }</em></p>
        }
      </div>

    </header>
  </>
)

Header.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  subtitleClassName: PropTypes.string,
  style:PropTypes.object,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  user:PropTypes.object,
  category:PropTypes.object.isRequired,
}


export default Header

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

