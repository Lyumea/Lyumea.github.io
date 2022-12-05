const Print = (link) => {
    return(
        <div className="print-container">
            { Object.values(link).map((lien, i) => (
                <img key={i} className={"print " + lien.class} src={lien.src} alt={lien.desc} />
            ))}
        </div>
    )
}

export default Print;