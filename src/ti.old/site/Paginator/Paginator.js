import React, { memo, useContext } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import { Link } from 'react-router-dom'

import { Button } from 'ui/elements'

const main_class = 'paginator'

const PaginatorContext = React.createContext({})

const ArrowButton = memo(({
  children,
  iconSide,
  pageNumber,
  ...props
}) =>{
  const { buttonClassName:className, getLink } = useContext(PaginatorContext)
  return(
    <Link to={ getLink(pageNumber) }>
      <Button
        className={ 'it ' + className }
        iconSide={ children && iconSide }
        { ...props }
      >
        { children }
      </Button>
    </Link>
  )
})

const JumpButton = memo(({
  ...props
}) =>{
  const {
    buttonClassName,
    jumpButtonClassName:className
  } = useContext(PaginatorContext)
  return(
    <Button
      className={ className || buttonClassName }
      { ...props }
      disabled
    >
    …
    </Button>
  )}
)

const PageNumberButton = memo(({
  pageNumber,
  ...props
}) =>{
  const { buttonClassName:className, getLink } = useContext(PaginatorContext)
  return(
    <Link to={ getLink(pageNumber) }>
      <Button
        className={ className }
        { ...props }
      >
        { pageNumber }
      </Button>
    </Link>
  )}
)

const SpreadPageNumberButtons = memo(({
  pageNumber,
  spread,
  variation,
  limit,
  ...props
}) =>{
  const followingPage = pageNumber + variation

  return (
    spread ?
      limit != followingPage
		&& ( variation < 0 ?
  <>
  <SpreadPageNumberButtons
      pageNumber={ followingPage }
      spread={ spread - 1 }
      limit={ limit }
      variation={ variation }
      { ...props }
    />
  <PageNumberButton
      pageNumber={ followingPage }
      { ...props }
    />
		  </>
		  :
		  <>
    <PageNumberButton
    pageNumber={ followingPage }
    { ...props }
  />
    <SpreadPageNumberButtons
    pageNumber={ followingPage }
    spread={ spread - 1 }
    limit={ limit }
    variation={ variation }
    { ...props }
  />
  </>
		)
      : (followingPage != limit) && <JumpButton/>
  )}

)


const Paginator = memo(({
  id,
  className,
  style,
  buttonClassName='s-lg b-grey bh-grey',
  jumpButtonClassName='c-white',
  currentClassName,
  paginator:{
    /* totalDocs,
       limit,
       hasNextPage,
       hasPrevPage, */
    page,
    totalPages,
    /* prevPage,
       nextPage, */
  }={},
  spread = 2,
  TEXT:T={
    PREV:'Recent',
    NEXT:'Older'
  },
  basic,
  stretch,
  getLink
}) =>

  <PaginatorContext.Provider
    value={{buttonClassName, jumpButtonClassName, getLink}}
  >
    <div
      className={
        main_class
        + ' row'
    //+ (? '':'')
    + (className ? ' ' + className : '')
      }
      id={ id }
      style={ style }
    >
      <Button.Group stretch={ stretch && 'horizontal' }>

        { page != 1 &&
        <>
          <ArrowButton
            iconSide='l'
            icon='j'
            basic={ basic }
            pageNumber={ 1 }
          >
            { T.PREV }
          </ArrowButton>

          <PageNumberButton
            pageNumber={ 1 }
            basic={ basic }
          />
          <SpreadPageNumberButtons
            variation={ -1 }
            spread={ spread }
            pageNumber={ page }
            limit={ 1 }
            basic={ basic }
          />
        </>
        }

        <PageNumberButton
          className={ currentClassName || buttonClassName }
          pageNumber={ page }
          basic={ basic }
        />

        { page != totalPages &&
        <>
          <SpreadPageNumberButtons
            variation={ 1 }
            spread={ spread }
            pageNumber={ page }
            limit={ totalPages }
            basic={ basic }
          />
          <PageNumberButton
            pageNumber={ totalPages }
            basic={ basic }
          />
          <ArrowButton
            iconSide='r'
            icon='g'
            basic={ basic }
            pageNumber={ totalPages }
          >
            { T.NEXT }
          </ArrowButton>
        </>
        }

      </Button.Group>
    </div>
  </PaginatorContext.Provider>
)

Paginator.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  style:PropTypes.object,
  basic:PropTypes.bool,
  stretch:PropTypes.bool,
  getLink:PropTypes.func.isRequired,

  paginator: PropTypes.shape({
    /* totalDocs:PropTypes.number.isRequired,
       limit:PropTypes.number.isRequired,
       hasNextPage:PropTypes.bool.isRequired,
       hasPrevPage:PropTypes.bool.isRequired, */
    page:PropTypes.number.isRequired,
    totalPages:PropTypes.number.isRequired,
    /* prevPage:PropTypes.number.isRequired,
       nextPage:PropTypes.number.isRequired, */
  }),
  spread: PropTypes.number.isRequired,
  TEXT: PropTypes.shape({
    page:PropTypes.string.isRequired,
    totalPages:PropTypes.string.isRequired,
  }).isRequired,
}

export default Paginator

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

