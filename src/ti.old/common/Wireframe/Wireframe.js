import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.wireframe" */ './wireframe.scss')

const main_class = 'wireframe'
const text_suffix = '_text'
const img_suffix = '_img'

const TEST_TXT = {
  'xs':'Phasellussit ametfacilisis mauris.',
  'sm':'Etiampharetra auguenec diampharetra sollicitudin.',
  'md':'Maurislobortis orcidui, sedtincidunt risussuscipit sitamet. Suspendissenisl justo,vestibulum aurna eu,porta tempordolor.',
  'lg':'Nullama nisitortor. Namligula ante,convallis vitaeullamcorper eu,maximus finibusturpis. Maecenassuscipit nibhleo, idfacilisis erattempus non.Morbi utrhoncus risus.',
  'xl':'Utlibero enim,sollicitudin vitaeporttitor a,tristique actellus. Insed lacusquis odioaliquet molestienon etsem. Pellentesqueviverra feliseget fringillaimperdiet. Suspendissevenenatis erosmagna, necluctus ligulalacinia ac.Pellentesque sodalesturpis aceleifend bibendum.In hachabitasse plateadictumst.',
}

const Wireframe = {}

const Text = memo(({
  id,
  className,
  style,
  children,
  as:Element='p',
  size='md',
}) =>
  <Element
    className={
	  main_class + text_suffix
		//+ (? '':'')
		+ (className ? ' ' + className : '')
		+ ' fw'
    }
    id={ id }
    style={ style }
  >
    { children || TEST_TXT[size] }
  </Element>
)


Text.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  size: PropTypes.string,
}

const Image = memo(({
  id,
  className,
  style,
  height,
  width,
  as:Element='div',
}) =>
  <Element
    className={
	  main_class + img_suffix
		//+ (? '':'')
		+ (className ? ' ' + className : '')
		+ ' fw'
    }
    id={ id }
    style={{
      height,
      width,
      ...style
    }}
  />
)


Image.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  height: PropTypes.string,
  width: PropTypes.string,
}


Wireframe.Text = Text
Wireframe.Image = Image

export default Wireframe

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

