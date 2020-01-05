import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import { BackToButton } from '../common'
import { InnerContent } from 'ui/common'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.schema_question" */ './schema_question.scss')

const main_class = 'schema_question'
const question_class = 'question'
const answer_class = 'answer'

const SchemaQuestion = memo(({
  id,
  className,
  style,
  children
}) =>
  <div
    className={
      main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
	        }
    id={ id }
    style={ style }
    itemScope
    itemProp='mainEntity'
    itemType='https://schema.org/Question'
  >
    {children}
  </div>

)


SchemaQuestion.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const Question = memo(({
  id,
  className,
  style,
  children,
  dangerouslySetInnerHTML,
  as:Wrapper='p'
}) =>
  <Wrapper
    className={
	          question_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
	        }
    id={ id }
    style={ style }
    itemProp='name'
    dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
  >
    { children }
  </Wrapper>
)

Question.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.string,
  style:PropTypes.object,
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const Answer = memo(({
  id,
  className,
  style,
  children,
  dangerouslySetInnerHTML,
  backTo,
  backToHTML='Back to top',
}) =>
  <div
    itemScope
    itemProp='acceptedAnswer'
    itemType='https://schema.org/Answer'
    className={
	          answer_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
	        }
    id={ id }
    style={ style }
  >
    <InnerContent
      itemProp='text'
      dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
    >
      { children }
    </InnerContent>
    <div className='ul pv1'>
      { backTo &&
      <BackToButton
        to={ backTo }
        dangerouslySetInnerHTML={{ __html:backToHTML }}
      />}
    </div>

  </div>
)

Answer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  backTo: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  backToHTML:PropTypes.string,
  style:PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

SchemaQuestion.Question = Question
SchemaQuestion.Answer = Answer

export default SchemaQuestion

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

