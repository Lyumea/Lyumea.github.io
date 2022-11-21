const MyGrid = (images) => {
    return(
        <div className="gird-container">
            {
                images.map((image) => {
                    <img className={image.className} src={image.src} alt={image.alt} key={image.id} />
                })
            }
        </div>
    )
}