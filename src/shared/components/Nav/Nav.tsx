import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

// Styles
import styles from './Nav.module.scss';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['nav']}>
      <Button onClick={() => navigate('/')}>Home</Button>
      <Button onClick={() => navigate('/notes')}>Notes</Button>
    </div>
  );
};

export default memo(Nav);
