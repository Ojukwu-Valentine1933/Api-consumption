const ErroInfo = (props) => {
    return(
        <div className="alert alert-danger" role="alert">
        {props.errorMessage}
      </div>
    
    );
};
export default ErroInfo;