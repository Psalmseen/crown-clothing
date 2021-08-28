import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './collections-overview.style.scss'
import CollectionPreview  from '../collection-preview/collection-preview.component'
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherElementProps }) => (
        <CollectionPreview key={id} {...otherElementProps} />
      ))}
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
  });
export default connect(mapStateToProps)(CollectionsOverview)