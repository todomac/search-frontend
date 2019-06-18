import { connect } from 'react-redux'
import { stateValueExtractor } from 'ambar-frontend/src/utils/'
import {
  loadPipelineLog,
  setSettingsModalOpen,
} from '../modules/SettingsPage'

import Settings from 'ambar-frontend/src/components/Settings'

const mapDispatchToProps = {
  loadPipelineLog,
  setSettingsModalOpen,
}

const mapStateToProps = (state) => {
  return ({
    fetching: state['global'].fetching,    
    pipeline: state['settingsPage'].pipeline,
    localization: stateValueExtractor.getLocalization(state)
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)