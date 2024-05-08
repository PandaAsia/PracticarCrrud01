import { useState } from "react";
import CrudForm from "../components/CrudForm";
import CrudTable from "../components/CrudTable";

const iniBD = [
  { id: 1, name: "Seiya", constelacion: "Pegaso" },
  { id: 2, name: "Shiryu", constelacion: "Dragón" },
  { id: 3, name: "Hyoga", constelacion: "Cisne" },
  { id: 4, name: "Shun", constelacion: "Andrómeda" },
  { id: 5, name: "Ikki", constelacion: "Fénix" },
];

const CrudBasic = () => {
  const [db, setDb] = useState(iniBD);
  const [datatoEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(Data);
    //ten cuidado que es array
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estas seguro de eliminar el resgitro con el ${id}?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <>
      <div>
        <h1>Esto es un Crud</h1>
        <CrudForm
          createData={createData}
          updateData={updateData}
          datatoEdit={datatoEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />
      </div>
    </>
  );
};
export default CrudBasic;
