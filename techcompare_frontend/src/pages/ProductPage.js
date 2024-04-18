import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';

export default function ProductPage() {
    const { id } = useParams(); // Get the `id` param from the URL
    // const [product, setProduct] = useState({ id: '', productName: '', imageLink: '', price: '' });
    const [product, setProduct] = React.useState([]);

    useEffect(() => {
        // fetch all products and console.log it 
        const fetchData = async () => {
            try {
                // console.log(id)
                const response = await axios.get('http://localhost:8080/techCompare/products/search', {params:{name: id}}); // Adjust the URL based on your server
                setProduct(response.data[0]);
                // console.log(response.data)
            } catch (error) {
                console.error('Error fetching data: ', error);
                // Handle errors here based on your application's needs
            }
        };
        console.log("fetchData")
        fetchData();
    }, [id]);

    // console.log("Cur:", product.priceHistory[0].price)

  return (
    <div>
        <p>id: {product.productStringId}</p>
        <p>productName: {product.productName}</p> {/* Displaying the product name */}
        <p>price: {product.currentPrice}</p> 
        <p>category: {product.category}</p> 
        <p>model: {product.model}</p>
    </div>
  );
}