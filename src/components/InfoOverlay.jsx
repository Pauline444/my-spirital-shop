import { Button } from "bootstrap";

export default function InfoOverlay({ text }) {
    return (
        <div className="overlay">
            <p className="overlay-text">{text}</p>
            <button className="btn btn-primary">Läs mer</button>
        </div>
    );
};
