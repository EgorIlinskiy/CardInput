import * as CardActionCreators from './card'
import * as TranslationActionCreators from './translation'

export default {
    ...CardActionCreators,
    ...TranslationActionCreators
}