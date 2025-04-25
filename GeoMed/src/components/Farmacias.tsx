import {Box,Heading,Text,Flex,Icon,Image,VStack} from '@chakra-ui/react';
  import { SlLocationPin } from 'react-icons/sl';
  import { FaStore } from 'react-icons/fa';
  import mapa from '../imagens/mapa.jpg'; 
 

  
  export function FarmaciasProximas() {
    return (
      <Box bg="white" py={10} px={6} height="1px" my={6}>
       
  
        <Heading
          as="h2"
          size="lg"
          mb={6}
          textAlign="center"
          fontFamily="Poppins"
          fontWeight="bold"
          color="teal.500"
          position="absolute"
          left="60%"
        >
          Farmácias próximas
        </Heading>
  
        <Flex direction={{ base: 'column', md: 'row' }} gap={10} justify="center" align="center">
          <Image
       
            src={mapa}
            alt="Mapa com localizações"
            borderRadius="md"
            maxW="550px"
          />
  
          <VStack align="start">

            <Flex align="center" gap={2}>
              <Icon as={SlLocationPin} color="teal.500" boxSize={6} />
              <Box>
                <Text fontWeight="bold" fontSize="lg" color="teal.500">Farmácia Futungo De Belas</Text>
                <Text fontSize="sm" color="gray.600" >Rua dos Militares, 123</Text>
              </Box>
            </Flex>
  
            <Flex align="center" gap={2}>
              <Icon as={FaStore} color="teal.500" boxSize={6} />
              <Box>
                <Text fontWeight="bold" fontSize="lg" color="teal.500">Farmácia EdmaZet</Text>
                <Text fontSize="sm" color="gray.600">Aberto até 18:00</Text>


                
              </Box>
            </Flex>
          </VStack>
        </Flex>
  
        
  
        <Text mt={6} fontStyle="italic" textAlign="center" fontSize="lg" maxW="600px" mx="auto" color="teal.500">
          “Consegui encontrar um remédio que precisava com urgência em segundos! Obrigado GeoMed.”
        </Text>
        <Text textAlign="center" color="teal.500" fontSize="sm">João, 28 anos</Text>
      </Box>
    );
  }
  