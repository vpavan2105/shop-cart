import { Box, Button, Input, Modal,Text, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, useDisclosure, ModalOverlay } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { filterSearchProducts } from '../redux/actions/actions';
import { useAppDispatch, useAppSelector } from '../redux/utils/Product_Utils';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { PRODUCTS_INITIALSTATE } from '../redux/actionTypes/actionTypes_Products';

const SearchBarHome = () => {
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch({type:PRODUCTS_INITIALSTATE})

    },[])
  
  return (
    <>
    <Box display={'flex'}
    bgColor={'#63E6BE'}
    h={'85px'}
    justifyContent={'center'} alignItems={'center'}>
    <Input type="search" h={'45px'} bgColor={'white'} p={3} variant={'unstyled'} w={'650px'} boxShadow={'md'} placeholder='search products..' onClick={()=>onOpen()} />
    {isOpen &&<SearchBarProducts onClose={onClose} isOpen={isOpen}  /> }
    </Box>
    </>
  )
}

interface SearchBarProductsProps{
    isOpen: boolean,
    onClose:() => void,

}
export const SearchBarProducts = ({onClose,isOpen}:SearchBarProductsProps) =>{
    const [value,setValue] = useState("");
    const inputRef = useRef<null|number>(null);
    const {products} = useAppSelector(state=>state.product);
    console.log(products);

    console.log(products);
    const dispatch = useAppDispatch();

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if(e.target.value == '' ){
            dispatch({type:PRODUCTS_INITIALSTATE})
            return ;
        }
        if (inputRef.current) {
            clearTimeout(inputRef.current);
        }
        inputRef.current = setTimeout(() => {
        dispatch(filterSearchProducts(value));

        }, 1000);
    }

 
    return (
        <Modal isOpen={isOpen} isCentered={false} onClose={onClose} >
        <ModalOverlay className="custom-modal-overlay" />
        <ModalContent>
        <ModalBody className="modal-body">
      <Box border={'1px solid #63E6BE'} bgColor={'aliceblue'} borderRadius={'5'} boxShadow={'md'} p={2} display={'flex'} alignItems={'center'} position="fixed" width="400px" zIndex={2}>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#63E6BE"}} size='lg' />
        <Input type="search" h={'35px'} border={'none'} ml={2} variant={'unstyled'} bgColor={'aliceblue'} value={value} w={'90%'} placeholder='search products..' onChange={handleSearchInput} />
      </Box>
      <div className="modal-item-container" style={{ paddingTop: '4rem' }}>
        {products.map(product => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Box p={2} _hover={{cursor:"pointer"}} borderBottom="1px solid #ccc">
              <p>{product.title}</p>
            </Box>
          </Link>
        ))}
      </div>
    </ModalBody>
        </ModalContent>
      </Modal>
      
    )
    
}


export  {SearchBarHome}