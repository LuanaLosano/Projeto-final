import { Box, Heading,Icon,Text,Flex,SimpleGrid,VStack,Button,Input} from '@chakra-ui/react';
import farmacia from "../imagens/imagemHome.jpg"
import { SlLocationPin} from "react-icons/sl";
import { MdPeopleAlt } from "react-icons/md";
import { FaMapMarkerAlt, FaBoxes, FaStore, FaExclamationTriangle} from 'react-icons/fa';
import { useState } from 'react';
import { FarmaciasProximas } from '../components/Farmacias'; // ajuste o caminho se necessário




export function Home() {

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    alert(`Você pesquisou por: ${query}`);
  };

  return (

<Box>
   {/* HEADER */}
<Heading 
        display="flex"
        bgColor="#FFF"
        fontSize="4xl"  
        color="teal.500"
        height="90px"
        alignItems="center"
        px={8}
        py={2}
        borderRadius="md" 
        fontFamily="Poppins" >
          
        
          Ge
           <Icon as={SlLocationPin} boxSize="10"/>
          Med: sua rota para saúde.            

 <Flex 

     left="68%"
     position="relative"
     >

<Icon as={MdPeopleAlt}boxSize="20" />


 </Flex>
    </Heading>

 {/* Box da imagem principal*/}
  <Box bg={"black"}>          
    <Box
    bgRepeat="no-repeat" bgImage={`url(${farmacia})`} bgSize="cover"
    height="100vh"  
    width={"100%"}
    position="relative"
    overflow="hidden"
    opacity={"80%"}
    objectFit="cover"
    top={0}
    left={0}
    zIndex={0}
    >

  
</Box>



 {/* Barra de pesquisa */}
          <Box position="absolute" top="38%" left="30%" width="40%"> 


        
                <Input
                 height="80px"
                 boxShadow="md"
                 bg="white"
                 borderRadius="full"
                 px={6}
                 py={3}
                 display="flex"
                 justifyContent="center"
                 alignItems="center"
                 variant="unstyled"
                 placeholder="Pesquisar medicamento..."
                 value={query}
                 onChange={(e) => setQuery(e.target.value)}
                 fontSize="lg"/>
          

              <Button position="absolute" top="130%" bgColor="teal.500" left="43%"  onClick={handleSearch}>
                Pesquisar
              </Button>
              </Box>
         

</Box>

 {/* BOX da parte da informação  */}
 <Box bg="white" py={16} px={6}>
        <Heading textAlign="center" mb={10} fontSize="3xl" color="rcolored.400" fontWeight="bold">
          O que oferecemos?
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }}>
          <VStack>
            <Icon as={FaMapMarkerAlt} boxSize={10} color="teal.500" />
            <Text fontWeight="bold" textAlign="center" color="teal.500">Localização em tempo real</Text>
          </VStack>
          <VStack>
            <Icon as={FaBoxes} boxSize={10} color="teal.500" />
            <Text fontWeight="bold" textAlign="center" color="teal.500">Estoque sempre atualizado</Text>
          
          </VStack>
          <VStack >
            <Icon as={FaStore} boxSize={10} color="teal.500" />
            <Text fontWeight="bold" textAlign="center" color="teal.500">Farmácias mais próximas</Text>
          </VStack>
          <VStack >
            <Icon as={FaExclamationTriangle} boxSize={10} color="teal.500" />
            <Text fontWeight="bold" textAlign="center" color="teal.500">
              Alerta quando o medicamento não for encontrado
            </Text>
          </VStack>
        </SimpleGrid>

      </Box>
      <FarmaciasProximas />
  </Box>

  );

};
