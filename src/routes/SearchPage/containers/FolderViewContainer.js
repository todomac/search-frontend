import { connect } from 'react-redux'
import { stateValueExtractor } from 'ambar-frontend/src/utils/'
import { toggleTreeNode, toggleAll } from '../modules/FolderView'
import { search, performSearchByPathToFile } from '../modules/SearchReducer'
import { toggleImagePreview } from '../modules/ImagePreview'
import FolderView from 'ambar-frontend/src/components/Search/components/Views/FolderView'

const mapDispatchToProps = {
  search,
  performSearchByPathToFile,
  toggleTreeNode,
  toggleAll,
  toggleImagePreview
}

const mapStateToProps = (state, ownProps) => {
  return ({
    folderHits: state['searchPage'].folderHits,
    searchQuery: state['searchPage'].searchQuery,
    localization: stateValueExtractor.getLocalization(state),
    urls: stateValueExtractor.getUrls(state),    
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(FolderView)