import React from 'react';
import { CollectionTile } from '../CollectionTile';
import { RemaingingCollections } from './styles';

export function HomepageCollectionsGrid({ collections }) {
  const saleCollections = collections.find(
    collection => collection.title === 'SALE'
  );
  const remaingingCollections = collections.filter(
    collection => collection.title !== 'SALE'
  );

  return (
    <div>
      {!!saleCollections && (
        <CollectionTile
          sale
          title={saleCollections.title}
          description={saleCollections.description}
          backgroundImage={
            saleCollections.image?.localFile.childImageSharp.fluid
          }
        />
      )}
      <RemaingingCollections>
        {remaingingCollections.map(collection => (
          <CollectionTile
            title={collection.title}
            description={collection.description}
            backgroundImage={collection.image?.localFile.childImageSharp.fluid}
            key={collection.shopifyId}
          />
        ))}
      </RemaingingCollections>
    </div>
  );
}
