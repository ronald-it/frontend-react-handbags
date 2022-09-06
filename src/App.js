import React from 'react';
import './App.css';
import Button from './components/Button'
import handyBag from './assets/bag_1.png'
import stylishBag from './assets/bag_2.png'
import simpleBag from './assets/bag_3.png'
import trendyBag from './assets/bag_4.png'
import Product from "./components/Product";
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"
import Tile from "./components/Tile";

function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>
                <Button
                    disableToggle={false}
                    buttonText="to the collection"
                >
                </Button>
                <Button
                    disableToggle={false}
                    buttonText="shop all bags"
                >
                </Button>
                <Button
                    disableToggle={true}
                    buttonText="pre-orders"
                >
                </Button>
            </nav>
            <main>
                <Product
                imageSrc={handyBag}
                imageAlt="The handy bag"
                bagName="The handy bag"
                price="€400,-"
                >
                </Product>
                <Product
                    imageSrc={stylishBag}
                    imageAlt="The stylish bag"
                    bagName="The stylish bag"
                    price="€250,-"
                >
                </Product>
                <Product
                    imageSrc={simpleBag}
                    imageAlt="The simple bag"
                    bagName="The simple bag"
                    price="€300,-"
                >
                </Product>
                <Product
                    imageSrc={trendyBag}
                    imageAlt="The trendy bag"
                    bagName="The trendy bag"
                    price="€150,-"
                >
                </Product>
            </main>
            <footer>
                <Tile
                    tileTitle="The brand"
                    tileText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et ipsum vitae ante egestas pharetra. Aliquam mauris risus, varius ac magna eu, pulvinar faucibus odio. Donec consequat lobortis augue, in varius tortor placerat quis. In imperdiet diam at libero eleifend."
                >
                </Tile>
                <Tile
                    imageSrc={brand}
                    imageAlt="The brand"
                >
                </Tile>
                <Tile
                    imageSrc={ourStory}
                    imageAlt="Our story"
                >
                </Tile>
                <Tile
                    tileTitle="Our story"
                    tileText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et ipsum vitae ante egestas pharetra. Aliquam mauris risus, varius ac magna eu, pulvinar faucibus odio. Donec consequat lobortis augue, in varius tortor placerat quis. In imperdiet diam at libero eleifend."
                >
                </Tile>
            </footer>
        </>
    );
}

export default App;



