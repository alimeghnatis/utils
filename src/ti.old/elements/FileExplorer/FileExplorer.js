import React, { memo, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import { urljoin as _u } from 'utils'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.file_explorer" */ './file_explorer.scss')

const main_class = 'file_explorer'
const folder_class = 'folder'
const file_class = 'file'
const FileExplorerContext = React.createContext()
const CurrentFolderContext = React.createContext()

const FileExplorer = memo(({
  id,
  className,
  style,
  children,
  iconColor,
  textColor,
  rootName,
  rootIcon,
  rootPath='/',
  selectedClassName='c-teal',
}) =>{
  const [selectedFile, selectFile] = useState(undefined)

  return(

    <div
      className={
	  main_class + ' ' + C.block
		//+ (? '':'')
		+ (className ? ' ' + className : '')
		  }
      id={ id }
      style={ style }
    >
      { rootName &&
      <span
        data-icon={ rootIcon }
        className='tb tu tls c-grey root'
      >
        { rootName }
      </span>
      }
      <ul
        className={
          ' list'
        }
        id={ id }
        style={ style }
      >
        <FileExplorerContext.Provider value={{
	  selectedFile,
	  selectFile,
	  selectedClassName
        }}
        >
          <CurrentFolderContext.Provider value={{
				  currentPath:rootPath
          }}
          >
            { children }
          </CurrentFolderContext.Provider>
        </FileExplorerContext.Provider>
      </ul>
    </div>
  )}
)

FileExplorer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
  root: PropTypes.string,
  rootIcon: PropTypes.string,
  rootPath: PropTypes.string,
  selectedClassName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}

const Folder = memo(({
  id,
  className,
  style,
  children,
  iconColor,
  textColor,
  name,
  open
}) =>{
  const [isOpen, setIsOpen] = useState(open)
  const { currentPath:parentsPath } = useContext(CurrentFolderContext)
  const currentPath = [parentsPath, name].join('/').replace('//','/')

  return(
    <li
      className={
	  folder_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
	  }
      id={ id }
      style={ style }
    >
      <CurrentFolderContext.Provider value={{
				  currentPath
      }}
      >
        <span
          onClick={ () => setIsOpen(!isOpen) }
          data-icon={ isOpen ? 'Y' : 'Z' }
          className={ 'c-off-black p01' }
        >
          { name }
        </span>
        <ul className={ isOpen ? '' : 'h' }>
          { children }
        </ul>
      </CurrentFolderContext.Provider>

    </li>

  )}
)

Folder.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  open: PropTypes.bool,
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

const File = memo(({
  id,
  className,
  style,
  iconColor,
  textColor,
  name,
}) =>{
  const {
    currentPath:parentsPath
  } = useContext(CurrentFolderContext)

  const {
    selectedFile,
    selectFile,
    selectedClassName
  } = useContext(FileExplorerContext)
  const fullName = [parentsPath, name].join('/')
  const current = selectedFile == fullName

  return(
    <li
      className={
	  file_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
      }
      id={ id }
      style={ style }
    >
      <span
        data-icon={'X'}
        onClick={ current ?
          () => selectFile(undefined) :
          () => selectFile(fullName)
        }
        className={ 'p01'
						+ (current ? ' ' + selectedClassName : ' c-dark-grey')
        }
      >
        { name }
      </span>
    </li>
  )
}
)

File.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

FileExplorer.Folder = Folder
FileExplorer.File = File

export default FileExplorer

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

