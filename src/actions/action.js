export const GET = "GET";
export const getAll = "getAll";
export const DELETE = "DELETE";

export const getAllDirectors = () => {
  return {
    type: "getAll"
  };
};

export const deleteDirectors = id => {
  const url = `http://localhost:8080/api/directors/${id}`;
  fetch(url, {
    method: "DELETE"
  });
};

// export const addNewDirector = =>{

// }
export const addDirector = data => ({
  type: "addOne",
  data
});

export const editDirector=(id,data)=>({
    type:'editOne',
    id,
    data,
  })
