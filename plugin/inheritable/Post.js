import { ContentTypes } from '../../types'
import Abstract from './Abstract'

export default {
    mixins: [
        Abstract(ContentTypes.Post)
    ]
}
