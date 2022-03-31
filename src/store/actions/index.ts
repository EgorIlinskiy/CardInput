import * as CounterActionCreators from './counter'
import * as CardActionCreators from './card'
import * as TranslationActionCreators from './translation'

export default {
    ...CounterActionCreators,
    ...CardActionCreators,
    ...TranslationActionCreators
}