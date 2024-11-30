import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import axios from 'axios';

const ProductCards = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        const filteredData = response.data.filter(
          (product) =>
            product.title !== "New Product" &&
            product.title !== "Giày" &&
            product.title !== "Coat" &&
            product.title !== "Itachi" &&
            product.title !== "JOSE LUIS" &&
            product.title !== "sdfsd" &&
            product.title !== "New Product AIT" &&
            product.title !== "Strapi External APIs Integration Plugin" &&
            product.title !== "product"
        );
        setProductData(filteredData);  
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', padding: 2 }}>
      {productData.map(({ id, images, category, title, price }) => (
        <Card key={id} sx={{ padding: 2, width: 200, marginTop: 10 }}>
          <img
            src={images[0]}
            alt={title}
            style={{ width: '100%', height: '150px', objectFit: 'cover' }}
          />
          <Typography variant="body2" color="textSecondary">
            {category?.name || 'Unknown Category'}
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {title}
          </Typography>
          <Rating name={`rating-${id}`} defaultValue={4} precision={0.5} readOnly />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 1,
            }}
          >
            <Typography variant="body2" color="primary">
              ${price}
            </Typography>
            <Button size="small" variant="contained" startIcon={<AddIcon />}>
              Add
            </Button>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default ProductCards;
