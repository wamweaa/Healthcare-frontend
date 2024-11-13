// DepartmentCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function DepartmentCard({ department }) {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {department.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DepartmentCard;
