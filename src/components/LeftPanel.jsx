import InfoOverlay from './InfoOverlay';

export default function LeftPanel({ title }) {
    return (
        <div className="left-panel panel">
            <h2 className="left-titel">{title}</h2>
            <InfoOverlay text="Här hittar du shamanska verktyg, örter, kristaller och naturliga hälsoprodukter." />
        </div>
    )
}