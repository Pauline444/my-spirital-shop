import InfoOverlay from "./InfoOverlay";

export default function RightPanel({ title }) {
    return (
        <div className="right-panel panel">
            <h2 className="right-titel">{title}</h2>
            <InfoOverlay text="Låt dig inspireras av våra utvalda produkter för din andliga resa." />
        </div>
    )
}