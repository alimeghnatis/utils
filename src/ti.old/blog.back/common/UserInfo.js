import React, { memo, useContext } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import BlogContext from './Context'
import { CircleInfo } from 'ui/elements'

//if(!process.env.BACKEND) import(/* webpackChunkName: "css.article" */ './article.scss') //Not In Use

const main_class = 'user_info'

const UserInfo = memo(({
  id,
  className,
  style,
  user,
  subtitle='handle',
}) =>
{
  const {
    default_avatar,
    getAuthorLink
  } = useContext(BlogContext)
  return(
    <CircleInfo
      title={ user && (user.first_name + ' ' + user.last_name) }
      subtitle={ '@' + (user && user[subtitle]) }
      image={ user && (user.profile_picture || default_avatar) }
      imageAlt={ '@' + (user && user[subtitle]) }
      link={ user && getAuthorLink(user[subtitle]) }
      className={
        'yib ul s-sm '
		+ main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
      }
      id={ id }
      style={ style }
    />

  )
}
)

UserInfo.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  user: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    username: PropTypes.string,
    handle: PropTypes.string,
  }),
  default_avatar: PropTypes.string,
  subtitle: PropTypes.string
}


export default UserInfo

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

