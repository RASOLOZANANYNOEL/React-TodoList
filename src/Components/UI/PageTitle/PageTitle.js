import PropTypes from "prop-types";

const PageTitle = ({ count, title }) => {
    return (
        <h2>{count} {title}</h2>
    );
};

export default PageTitle;

//décrire les types des props si on utilise pas typescript
PageTitle.propTypes = {
    count: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

//sinon on précise une valeur par défault de title sans mettre required
/*PageTitle.defaultProps = {
    title: '',
};*/