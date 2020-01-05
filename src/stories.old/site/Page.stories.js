import React from 'react'

import { action } from '@storybook/addon-actions'
import { Page } from 'ui'
import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../Dummy'

export default {
  title: 'Site|Page',
}

const id = 'homepage'
const titles = [

  {
    title:'Spartacus',
    subtitle:'Stanley Kubrick, 1960',
    as:'h1',
    align:'uc',
    label:'Film',
    labelBasic:true,
    labelClassName:'s-sm c-red',
    headingClassName:'ts c-green'
  },
  {
    title:'Lolita',
    subtitle:'Stanley Kubrick, 1962',
    as:'h2',
    align:'uc',
    label:'Today\'s cinema',
    labelClassName:'b-orange'
  },
  {
    title:'Dr. Strangelove',
    subtitle:'Stanley Kubrick, 1964',
    as:'h3',
    align:'ur',
    label:'Movie time',
    labelClassName:'b-red'
  },
]

const sections = [{

}]

const helmet = {
  robots:'noindex, nofollow',
  title: 'test of the title',
  title_tag: 'this should appear in the title tag',
  canonical: 'https://home.com/description',
  meta_description: 'This is the meta description. 170 chars.',
  twitter_title: 'For twitter, a title',
  twitter_description:'',
  twitter_image: '',
  og_title: 'This is the open graph title',
  og_description: '',
  og_image:'',
  og_type:'',
  og_url:'',
}

export const Default = () =>
  <Page id={ id }>
		READ SOURCE
  </Page>

export const DefaultWithSchema = () =>
  <Page
    id={ id }
    itemType='https://schema.org/FAQPage'
    canonical='meccamico.com/blah'
    HELMET={ helmet }
  >
		FAQ/PAGE READ SOURCE
  </Page>

export const Head = () =>
  <Page id={ id }>
    <Page.Section
      head
      id='head'
      HELMET={ helmet }
    >

      <Page.Heading
        { ...titles[0] }
        className={ titles[0].align }
      />
      <p>See source code to check for meta</p>
    </Page.Section>
  </Page>

export const HeadWithSchema = () =>
  <Page
    id={ id }
    itemType='https://schema.org/FAQPage'
    HELMET={ helmet }
  >
    <Page.Section
      head
      id='head'
    >

      <Page.Heading
        { ...titles[0] }
        className={ titles[0].align }
      />
      <p>See source code to check for meta</p>
    </Page.Section>
  </Page>

export const Plural = () =>
  <Page id={ id }>
    <Page.Section
      head
      id='head'
    >

      <Page.Heading
        { ...titles[0] }
        className={ titles[0].align }
      />
    </Page.Section>
    <Page.Section
      id='a1'
    >
      <h2>Section A1</h2>
      <p>{ TEXT_XXS_ESC }</p>

    </Page.Section>
    <Page.Section
      id='a2'
    >
      <h2>Section A2</h2>
      <p>{ TEXT_XXS_ESC }</p>

    </Page.Section>
  </Page>

export const PluralCaretDown = () =>
  <Page id={ id }>
    <Page.Section
      head
      id='head'
      caretDown='a1'
    >

      <Page.Heading
        { ...titles[0] }
        className={ titles[0].align }
      />
    </Page.Section>
    <Page.Section
      id='a1'
      caretDown='a2'
    >
      <h2>Section A1</h2>
      <p>{ TEXT_XXS_ESC }</p>

    </Page.Section>
    <Page.Section
      id='a2'
    >
      <h2>Section A2</h2>
      <p dangerouslySetInnerHTML={{ __html:TEXT_XS }}></p>

    </Page.Section>
  </Page>

export const Content = () =>
  <Page id={ id }>
    <Page.Section
      head
      id='head'
      caretDown='a1'
    >

      <Page.Heading
        { ...titles[0] }
        className={ titles[0].align }
      />
    </Page.Section>
    <Page.Section
      id='a1'
    >
      <Page.Content
        dangerouslySetInnerHTML={{ __html:TEXT }}
      />

    </Page.Section>
  </Page>

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
