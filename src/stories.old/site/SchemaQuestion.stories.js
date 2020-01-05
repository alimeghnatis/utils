import React from 'react'

import { action } from '@storybook/addon-actions'
import { SchemaQuestion } from 'ui'
import { QA } from '../Dummy'

export default {
  title: 'Site|SchemaQuestion',
}

export const Default = () =>
  QA.map(({__html, ...e}) =>
    <SchemaQuestion>
      <SchemaQuestion.Question id={ e.anchor }>
        {e.Q}
      </SchemaQuestion.Question>
      <SchemaQuestion.Answer
        dangerouslySetInnerHTML={{__html}}
      >
      </SchemaQuestion.Answer>

    </SchemaQuestion>
  )

export const BackTo = () =>
  QA.map(({__html, ...e}) =>
    <SchemaQuestion>
      <SchemaQuestion.Question id={ e.anchor }>
        {e.Q}
      </SchemaQuestion.Question>
      <SchemaQuestion.Answer
        backTo
        dangerouslySetInnerHTML={{__html}}
      >
      </SchemaQuestion.Answer>

    </SchemaQuestion>
  )

export const BackToCustomText = () =>
  QA.map(({__html, ...e}) =>
    <SchemaQuestion>
      <SchemaQuestion.Question id={ e.anchor }>
        {e.Q}
      </SchemaQuestion.Question>
      <SchemaQuestion.Answer
        backTo
        backToHTML='Ritornare arriba'
        dangerouslySetInnerHTML={{__html}}
      >
      </SchemaQuestion.Answer>

    </SchemaQuestion>
  )

export const BackToCustomAnchor = () =>
  QA.map(({__html, ...e}) =>
    <SchemaQuestion>
      <SchemaQuestion.Question
        id={ e.anchor }
        as='h4'
      >
        {e.Q}
      </SchemaQuestion.Question>
      <SchemaQuestion.Answer
        backTo={ QA[1].anchor }
        backToHTML='Return to Q2'
        dangerouslySetInnerHTML={{__html}}
      >
      </SchemaQuestion.Answer>

    </SchemaQuestion>
  )


export const AsH2 = () =>
  QA.map(({__html, ...e}) =>
    <SchemaQuestion>
      <SchemaQuestion.Question
        id={ e.anchor }
        as='h2'
      >
        {e.Q}
      </SchemaQuestion.Question>
      <SchemaQuestion.Answer
        backTo
        backToHTML='Ritornare arriba'
        dangerouslySetInnerHTML={{__html}}
      >
      </SchemaQuestion.Answer>

    </SchemaQuestion>
  )

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
