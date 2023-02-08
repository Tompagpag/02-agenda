// Composant React Input

const Input = (props) => {
    const handlerChange = (e) => {
    e.preventDefault()
    props.setFirstname(e.target.value);
  }
  return (
    <div className="input">
      <label htmlFor="search" name="search">Vous pouvez effectuer une recherche ici : </label>
      <input type="text" placeholder="Votre recherche" id="search" onChange={(e) => {handlerChange(e)}}></input>
    </div>
  );
}

export default Input;
