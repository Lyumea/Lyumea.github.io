const Graphisme = (link) => {
    return(
        <>
            {
                Object.values(link).map((lien, i) => (
                    <div key={i} className={"deuxd-container "} >
                        {Object.values(lien).map((value, i) => (
                            <img className={"deuxd-items " + value.miniature} key={i} src={value.src} alt={value.description} />
                        ))}
                     </div>   
                ))
            }
        </>
    )
};

export default Graphisme;