import { connect } from 'react-redux'
import { stateValueExtractor } from 'ambar-frontend/src/utils/'
import { search, performSearchByPathToFile, performSearchByTag, performSearchByNamedEntity } from '../modules/SearchReducer'
import StatisticsView from 'ambar-frontend/src/components/Search/components/Views/StatisticsView'

const mapDispatchToProps = {
  search,
  performSearchByPathToFile,
  performSearchByTag,
  performSearchByNamedEntity
}

const mapStateToProps = (state, ownProps) => {
  return ({
    stats: state['searchPage'].stats,
    searchQuery: state['searchPage'].searchQuery,
    localization: stateValueExtractor.getLocalization(state)
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsView)