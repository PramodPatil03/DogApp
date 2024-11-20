import React, { useState, useEffect } from "react";
import { searchImages, saveList } from "../api";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const [responseCode, setResponseCode] = useState("");
  const [dogImages, setDogImages] = useState([]);
  const [savedListName, setSavedListName] = useState("");
  const navigate = useNavigate();

  const fetchImages = async () => {
    try {
      const response = await searchImages(responseCode);
      setDogImages(response.data); // Set dog images from API response
    } catch (error) {
      alert("Error: " + error.response.data);
    }
  };

  const handleSaveList = async () => {
    const listData = {
      name: savedListName,
      creationDate: new Date(),
      responseCodes: [responseCode],
      imageUrls: dogImages.map((img) => img.imageUrl),
    };
    try {
      await saveList(listData);
      alert("List saved successfully!");
      navigate("/lists");
    } catch (error) {
      alert("Error: " + error.response.data);
    }
  };

  useEffect(() => {
    if (responseCode) fetchImages();
  }, [responseCode]);

  return (
    <div>
      <h2>Search Dog Images</h2>
      <input
        type="text"
        value={responseCode}
        onChange={(e) => setResponseCode(e.target.value)}
        placeholder="Enter Response Code"
      />
      <button onClick={fetchImages}>Search</button>

      <h3>Images</h3>
      {dogImages.map((img, index) => (
        <div key={index}>
          <img src={img.imageUrl} alt={`dog-${index}`} width="200" />
        </div>
      ))}

      <input
        type="text"
        value={savedListName}
        onChange={(e) => setSavedListName(e.target.value)}
        placeholder="List Name"
      />
      <button onClick={handleSaveList}>Save List</button>
    </div>
  );
}

export default SearchPage;
