import {PropTypes} from 'react'

export const PageType = PropTypes.oneOf(['home', 'admin']).isRequired

export const StringType = PropTypes.string.isRequired

export const ObjectType = PropTypes.object.isRequired