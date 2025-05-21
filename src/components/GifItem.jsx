import PropTypes from "prop-types"

export const GifItem = ({ title, url }) => {

    // console.log(a)
    // console.log(title)

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}


GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}