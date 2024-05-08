/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CrudTableRow from "./CrudTabloRow";

const CrudTable = ({ data, deleteData, setDataToEdit }) => {
  return (
    <>
      <div>
        <h3>Tabla de Datos</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Constelacion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="3">No hay Datos</td>
              </tr>
            ) : (
              data.map((el) => (
                <CrudTableRow
                  key={el.id}
                  data={el}
                  deleteData={deleteData}
                  setDataToEdit={setDataToEdit}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default CrudTable;
