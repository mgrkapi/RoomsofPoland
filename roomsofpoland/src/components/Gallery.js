import React from "react";
import ImageGallery from 'react-image-gallery';
import Aruba from "../images/Aruba.jpg";
import Hawaje from "../images/Hawaje.jpg";
import Hawaje2 from "../images/Hawaje2.jpg";
import Madagaskar from "../images/Madagaskar.jpg";
import main from "../images/main.jpg";
import Sea from "../images/Sea.jpg";
import Sea2 from "../images/Sea2.jpg";


const images = [
    {
        original: Aruba,
        thumbnail: Aruba,
    },
    {
        original: Hawaje,
        thumbnail: Hawaje,
    },
    {
        original: Hawaje2,
        thumbnail: Hawaje2,
    },
    {
        original: Madagaskar,
        thumbnail: Madagaskar,
    },
    {
        original: main,
        thumbnail: main,
    },
    {
        original: Sea,
        thumbnail: Sea,
    },
    {
        original: Sea2,
        thumbnail: Sea2,
    },
];
class MyGallery extends React.Component {
    render() {
        return <ImageGallery items={images} />;
    }
}

export default MyGallery;