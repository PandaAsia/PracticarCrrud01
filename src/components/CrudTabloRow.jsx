/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const CrudTableRow = ({ data, deleteData, setDataToEdit }) => {
  let { name, constelacion, id } = data;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{constelacion}</td>
        <td>
          <button onClick={() => setDataToEdit(data)}>Editar</button>
          <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
};
export default CrudTableRow;
