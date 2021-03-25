import PropTypes from 'prop-types';

const Profile=(props) => {
    const styleDiv = { textAlign: 'center',
fontFamily:'Times New Roman Times serif '
    };
    
    return (
        <div style={styleDiv}>
          {props.handleName(props.fullName)}  
            {props.photo}
         <h1>{props.fullName}</h1>
         <h3>{props.profession}</h3>
         <span> {props.bio}</span>
        </div>
    );
}

export default Profile
Profile.defaultProps = {
    fullName: "Not defined",
    bio: "Not defined",
    profession:"Not defined"
  };
Profile.propTypes = {
fullName: PropTypes.string,
bio: PropTypes.string,
profession: PropTypes.string,
};