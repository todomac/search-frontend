import { connect } from 'react-redux'
import { stateValueExtractor, constants } from 'ambar-frontend/src/utils/'

import { loadTags } from 'ambar-frontend/src/routes/SearchPage/modules/TagsReducer'
import { toggleUploadModal } from 'ambar-frontend/src/routes/SearchPage/modules/UploadModal'

import {
  setScrolledDown,  
  setQueryFromGetParam,
  setSearchResultView
} from 'ambar-frontend/src/routes/SearchPage/modules/SearchPage'

import { withRouter } from 'react-router-dom'

import {
  setQuery,
  search,
  cleanUpSearchResult,
  performSearchByQuery,
  performSearchBySize,
  performSearchByWhen,
  performSearchByShow,
  performSearchByTag
} from 'ambar-frontend/src/routes/SearchPage/modules/SearchReducer'


import Search from 'ambar-frontend/src/components/Search'

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))