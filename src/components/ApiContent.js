import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const ApiContent = ({ apiUrl }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!apiUrl) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl]); // Re-fetch whenever the apiUrl changes

  if (loading) {
    return <Box padding={2}>Loading...</Box>;
  }

  if (error) {
    return <Box padding={2} color="error.main">Error: {error}</Box>;
  }

  // Handle the display of your data here.
  // The structure depends on the API response.
  // For this example, we assume the API returns an object with a 'title' and 'description'.
  return (
    <Box padding={2}>
      {data ? (
        <>
          <Typography variant="h5">{data.title}</Typography>
          <Typography>{data.description}</Typography>
        </>
      ) : (
        <Typography>No data found.</Typography>
      )}
    </Box>
  );
};

export default ApiContent;
