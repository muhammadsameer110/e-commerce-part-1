import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Autocomplete, TextField } from '@mui/material';

const ProductCards = () => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        const data = response.data.filter(
          (product) =>
            product.title !== 'New Product' &&
            product.title !== 'Giày' &&
            product.title !== 'Coat' &&
            product.title !== 'Itachi' &&
            product.title !== 'JOSE LUIS' &&
            product.title !== 'New Clothes' &&
            product.title !== 'New Product AIT' &&
            product.title !== 'Strapi External APIs Integration Plugin' &&
            product.title !== 'product'
        );
        setProductData(data);
        setFilteredData(data);
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category?.name || 'Unknown Category')),
        ];
        setCategories(uniqueCategories);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      });
  }, []);

  const handleCategoryChange = (event, value) => {
    setSelectedCategory(value);
    if (value) {
      const filtered = productData.filter(
        (item) => item.category?.name === value
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(productData);
    }
  };

  return (
    <div className="container-fluid mt-5 pb-5 pt-5">
      <div className="row">
        <div className="col-12 d-flex justify-content-right align-item-right">
          <Autocomplete
            disablePortal
            options={categories}
            value={selectedCategory}
            onChange={handleCategoryChange}
            sx={{ width: 350 }}
            renderInput={(params) => <TextField {...params} label="Filter by Category" />}
          />
        </div>
      </div>
      {isLoading ? (
        <div className="row mt-5">
          <div className="col-12 text-center">
            <CircularProgress size={40} />
          </div>
        </div>
      ) : (
        <div className="row mt-5">
          {filteredData.map(({ id, images, category, title, price }) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center" key={id}>
              <Card sx={{ padding: 3, width: 200, marginTop: 10 }}>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '150px',
                          objectFit: 'cover',
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
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
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{ padding: '8px 16px' }} // Added padding to the button
                  >
                    Add
                  </Button>
                </Box>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCards;
