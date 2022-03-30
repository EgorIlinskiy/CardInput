import * as CounterActionCreators from './counter'
import * as CardActionCreators from './card'

export default {
    ...CounterActionCreators,
    ...CardActionCreators
}