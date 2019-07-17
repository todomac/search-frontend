import { connect } from 'react-redux'
import { stateValueExtractor, constants } from 'ambar-frontend/src/utils/'

import { loadTags } from '../modules/TagsReducer'
import { toggleUploadModal } from '../modules/UploadModal'
import _debug from 'debug'
const debug = _debug("app:webpack:config")


import {
  setScrolledDown,  
  setQueryFromGetParam,
  setSearchResultView
} from '../modules/SearchPage'

debug('started')

import {
  setQuery,
  search,
  cleanUpSearchResult,
  performSearchByQuery,
  performSearchBySize,
  performSearchByWhen,
  performSearchByShow,
  performSearchByTag
} from '../modules/SearchReducer'

debug('imported search functions')


import Search from 'ambar-frontend/src/components/Search'

debug('imported search components')

const mapDispatchToProps = {
  search,
  performSearchByQuery,
  performSearchBySize,
  performSearchByWhen,
  performSearchByShow,
  performSearchByTag,
  loadTags,
  setScrolledDown,
  toggleUploadModal,
  cleanUpSearchResult,
  setQueryFromGetParam,
  setQuery,
  setSearchResultView
}

const mapStateToProps = (state) => {
  return ({
    hasMore: state['searchPage'].hasMore,
    searchQuery: state['searchPage'].searchQuery,
    fetching: state['global'].fetching,
    hits: Array.from(state['searchPage'].hits.values()),
    folderHits: state['searchPage'].folderHits,
    scrolledDown: state['searchPage'].scrolledDown,
    currentPage: state['searchPage'].currentPage,
    mode: state['core'].mode,
    searchView: state['searchPage'].searchView,
    allTags: state['searchPage'].tags,
    localization: stateValueExtractor.getLocalization(state)    
  })
}

debug('mapped state to props')

export default connect(mapStateToProps, mapDispatchToProps)(Search)