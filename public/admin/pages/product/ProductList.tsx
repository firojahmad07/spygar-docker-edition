import { Fragment } from 'react';
import { Container } from '@/admin/components/container';
import {
  Toolbar,
  ToolbarActions,
} from '@/admin/partials/toolbar';


import { Products } from './blocks/Products';

const ProductList = () => {

  return (
    <Container>
      <div className="grid gap-5 lg:gap-7.5">
        <Products />
      </div>
  </Container>
  );
};

export { ProductList };
