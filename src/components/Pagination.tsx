import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { ButtonGroup, Button, ButtonGroupProps } from '@chakra-ui/react';

const Pagination: React.FC<ButtonGroupProps> = ({ ...otherProps }) => (
  <ButtonGroup
    size="sm"
    isAttached
    variant="outline"
    {...otherProps}
  >
    <Button leftIcon={<MdChevronLeft />} colorScheme="gray" isDisabled>
      Prev
    </Button>
    <Button
      rightIcon={<MdChevronRight />}
      colorScheme="gray"
      onClick={() => window.alert('Under construction!')}
    >
      Next
    </Button>
  </ButtonGroup>
);

export default Pagination;
