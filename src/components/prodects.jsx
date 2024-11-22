// import React from 'react';
// import AddIcon from '@mui/icons-material/Add';
// import { Box, Button, Card, Rating, Typography } from '@mui/material';

// const prodectcards = (props) => {
//     const { prodectData } =  props;        
//   return (
//     <Box className="d-flex gap-3">
//     {prodectData.map((product) => {
//       return (
//         <Card key={product.id} className="p-2">
//           <img src={product.image} alt={product.productName} />
//           <Typography variant="body2">{product.category}</Typography>
//           <Typography variant="body1">{product.productName}</Typography>
//           <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <Typography>{product.price}</Typography>
//             <Button size="small" variant="contained">
//               <AddIcon />
//               Add
//             </Button>
//           </Box>
//         </Card>
//       );
//     })}
//   </Box>
//   );
// };

// export default prodectcards;
