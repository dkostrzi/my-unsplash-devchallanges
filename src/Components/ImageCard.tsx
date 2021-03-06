import { ILocalImageResponse } from 'Core/Interfaces';

interface IProps {
    image: ILocalImageResponse;
}

export default function ImageCard({ image }: IProps) {
    return (
        <div className="single-image">
            <img src={image.url} alt={image.tags[0]} />
            <div className="single-image__description">
                {image.tags.length === 0 && <span>NO TAGS</span>}
                {image.tags.map((tag, i) => (
                    <span key={i} className="single-image__description-label">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
