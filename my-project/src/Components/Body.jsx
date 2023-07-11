import React from 'react'
import AssetCard from './AssetCard';

import 'boxicons'
import { SupBody } from './SupBody';
import { OffertCardBody } from './OffertCardBody';
import { YoutubeBody } from './YoutubeBody';
import { MusicBody } from './MusicBody';
import { Footer } from './Footer';

export const Body = () => {
    const assets = [
        {
          imageSrc: "https://picsum.photos/150/100?random",
          author: 'DANIL CHERNYAEV',
          assetName: '2D Platformer Tileset',
          rating: 4,
          price: '$7.50',
        },
        {
          imageSrc: "https://picsum.photos/g/150/100?random",
          author: 'IAN DEANE',
          assetName: 'Mesh Baker',
          rating: 3,
          price: '$79',
        },
        {
          imageSrc: "https://picsum.photos/150/100?blur",
          author: 'SEASIDE STUDIOS',
          assetName: 'All In 1 Vfx Toolkit',
          rating: 1,
          price: '$59.99',
        },
        {
          imageSrc: "https://picsum.photos/id/237/150/100",
          author: 'GAMEMASTER AUDIO',
          assetName: 'Pro Sound Collection',
          rating: 2,
          price: '$49',
        },
        {
          imageSrc: "https://picsum.photos/seed/pics/150/100",
          author: 'FREYA HOLMÉR',
          assetName: 'Shapes',
          rating: 4,
          price: '$100',
        },
        {
          imageSrc: "https://picsum.photos/150/100?grayscale",
          author: 'WILL HONG',
          assetName: 'Dynamic Bone',
          rating: 2,
          price: '$20',
        },
        { 
          imageSrc: "https://picsum.photos/150/100?random=2 ",
          author: 'FIMPOSSIBLE CREATIONS',
          assetName: 'Animation Designer',
          rating: 5,
          price: '$54.99',
        },
      ];//

  return (
      <body>
        <SupBody/>

        <div className="flex flex-wrap justify-center">
        {assets.map((asset, index) => (
            <AssetCard key={index} {...asset} />
        ))}
        </div>

        <OffertCardBody/>

        <YoutubeBody/>
        
        <div >
          <MusicBody/>
        </div>

        <Footer/>
      </body>
    )
}
