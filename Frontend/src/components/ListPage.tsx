import React, { useState, useEffect } from "react";
import { getSavedLists, deleteList } from "../api";
import { useNavigate } from "react-router-dom";

function ListPage() {
  const [lists, setLists] = useState([]);
  const [userId, setUserId] = useState(1); // Assume userId is available (you can get it after login)
  const navigate = useNavigate();

  const fetchLists = async () => {
    try {
      const response = await getSavedLists(userId);
      setLists(response.data);
    } catch (error) {
      alert("Error: " + error.response.data);
    }
  };

  const handleDeleteList = async (listId) => {
    try {
      await deleteList(listId);
      alert("List deleted!");
      fetchLists(); // Refresh the list
    } catch (error) {
      alert("Error: " + error.response.data);
    }
  };

  useEffect(() => {
    fetchLists();
  }, [userId]);

  return (
    <div>
      <h2>Your Saved Lists</h2>
      {lists.map((list) => (
        <div key={list.id}>
          <h3>{list.name}</h3>
          <button onClick={() => handleDeleteList(list.id)}>Delete List</button>
          <button onClick={() => navigate(`/search`)}>Edit List</button> {/* You can link this to an edit form */}
        </div>
      ))}
    </div>
  );
}

export default ListPage;
