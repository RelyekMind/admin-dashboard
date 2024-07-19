import React, { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AddProductForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [mainImage, setMainImage] = useState(null);
  const [otherImages, setOtherImages] = useState([null, null, null]); // campos para 3 otras imágenes

  const handleMainImageChange = (e) => {
    setMainImage(e.target.files[0]);
  };

  const handleOtherImageChange = (index, e) => {
    const newOtherImages = [...otherImages];
    newOtherImages[index] = e.target.files[0];
    setOtherImages(newOtherImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let mainImageUrl = '';
      if (mainImage) {
        const mainImageRef = ref(storage, `products/${mainImage.name}`);
        await uploadBytes(mainImageRef, mainImage);
        mainImageUrl = await getDownloadURL(mainImageRef);
      }

      const otherImagesUrls = [];
      for (let image of otherImages) {
        if (image) {
          const imageRef = ref(storage, `products/${image.name}`);
          await uploadBytes(imageRef, image);
          const imageUrl = await getDownloadURL(imageRef);
          otherImagesUrls.push(imageUrl);
        }
      }

      const sku = Math.floor(1000 + Math.random() * 9000).toString();

      await addDoc(collection(db, 'products'), {
        title,
        description,
        price,
        mainImage: mainImageUrl,
        otherImages: otherImagesUrls,
        sku,
        stock: 0 //stock en 0
      });

      setTitle('');
      setDescription('');
      setPrice('');
      setMainImage(null);
      setOtherImages([null, null, null]); // Resetear campos
    } catch (error) {
      console.error('Error adding product: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>Product Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-input" />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-input"></textarea>
      </div>
      <div className="form-group">
        <label>Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-input" />
      </div>
      <div className="form-group">
        <label>Main Image</label>
        <input type="file" onChange={handleMainImageChange} className="form-input" />
      </div>
      <div className="form-group">
        <label>Other Images</label>
        <input type="file" onChange={(e) => handleOtherImageChange(0, e)} className="form-input" />
        <input type="file" onChange={(e) => handleOtherImageChange(1, e)} className="form-input" />
        <input type="file" onChange={(e) => handleOtherImageChange(2, e)} className="form-input" />
      </div>
      <button type="submit" className="submit-button">Add Product</button>
    </form>
  );
};

export default AddProductForm;
