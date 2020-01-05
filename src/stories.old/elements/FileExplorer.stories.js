import React from 'react'

import { action } from '@storybook/addon-actions'
import { FileExplorer } from 'ui'

export default {
  title: 'Elements|FileExplorer',
}

export const FileExplorerDefault = () =>
  <div className='p1'>
    <FileExplorer
      root='Root'
      rootIcon='F'
    >
      <FileExplorer.Folder name='Music'>
        <FileExplorer.File name='a-good-song.mp3'/>
        <FileExplorer.File name='mymp3.mp3'/>
        <FileExplorer.File name='highQuality.wave'/>
      </FileExplorer.Folder>
      <FileExplorer.Folder
        name='Souvenirs'
        open
      >
        <FileExplorer.File name='holidays.jpg'/>
        <FileExplorer.File name='China.png'/>
        <FileExplorer.File name='lastNight.jpg'/>
      </FileExplorer.Folder>
      <FileExplorer.Folder
        name='Images'
        open
      >
        <FileExplorer.File name='holidays.jpg'/>
        <FileExplorer.File name='China.png'/>
        <FileExplorer.File name='lastNight.jpg'/>
      </FileExplorer.Folder>

    </FileExplorer>
  </div>

