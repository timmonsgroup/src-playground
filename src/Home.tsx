// Third party libraries
import React, { useEffect } from 'react';

// MUI imports
import {Typography} from '@mui/material';
import {ContainerWithCard} from '@timmons-group/shared-react-components';

const Home: React.FC = () => {
  // Set the page title on mount
  useEffect(() => {
    document.title = 'Utah SLAM';
  }, []);

  return (
    <>
      <ContainerWithCard>
        <Typography variant="sectionHeader" fontSize={'32px'}>SRC Playground</Typography>
        <Typography>Go play.</Typography>
      </ContainerWithCard>
    </>
  );
}

export default Home;