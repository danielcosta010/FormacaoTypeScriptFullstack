import { Box, Heading, VStack, Text, Button, HStack, Grid, GridItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Home = () => {
  return (
    <VStack spacing="12" align="center" textAlign="center" w="full" maxW="4xl" mx="auto">
      {/* Hero Section */}
      <Box py="12" alignContent="center">
        <Heading as="h1" size="3xl" color="brand.500" mb="4" mt="10">
          Bem-vindo ao Dio Bank
        </Heading>
        <Text fontSize="lg" color="gray.600" maxW="lg" m='auto'>
          O banco digital da Digital Innovation One. Gerenciamento de finanças simples, rápido e seguro.
        </Text>
      </Box>

      {/* Serviços */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="6" w="full" maxW="3xl" mx="auto">
        <GridItem>
          <Box bg="brand.50" p="6" borderRadius="lg" h="full" textAlign="center">
            <Heading as="h3" size="md" color="brand.500" mb="3">
              💳 Cartão Digital
            </Heading>
            <Text color="gray.600">
              Seu cartão virtual instantaneamente com limite automático
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box bg="brand.100" p="6" borderRadius="lg" h="full" textAlign="center">
            <Heading as="h3" size="md" color="brand.600" mb="3">
              💰 Conta Corrente
            </Heading>
            <Text color="gray.600">
              Sem tarifas e com segurança de primeira. Gerencie seu dinheiro
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box bg="brand.200" p="6" borderRadius="lg" h="full" textAlign="center">
            <Heading as="h3" size="md" color="brand.700" mb="3">
              📈 Investimentos
            </Heading>
            <Text color="gray.600">
              Comece a investir com uma estratégia personalizada
            </Text>
          </Box>
        </GridItem>
      </Grid>

      {/* Features */}
      <VStack spacing="6" w="full" maxW="3xl" mx="auto" bg="gray.50" p="8" borderRadius="lg">
        <Heading as="h2" size="xl" color="brand.500" textAlign="center">
          Por que escolher o Dio Bank?
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="4" w="full">
          <Box textAlign="left">
            <Text color="brand.600" fontWeight="bold" mb="2">✓ Segurança em Primeiro Lugar</Text>
            <Text fontSize="sm" color="gray.600">Protegemos seus dados com tecnologia de ponta</Text>
          </Box>
          <Box textAlign="left">
            <Text color="brand.600" fontWeight="bold" mb="2">✓ Atendimento 24/7</Text>
            <Text fontSize="sm" color="gray.600">Sempre disponível para ajudar você</Text>
          </Box>
          <Box textAlign="left">
            <Text color="brand.600" fontWeight="bold" mb="2">✓ Zero Tarifas</Text>
            <Text fontSize="sm" color="gray.600">Sem cobranças em operações básicas</Text>
          </Box>
          <Box textAlign="left">
            <Text color="brand.600" fontWeight="bold" mb="2">✓ Integração Total</Text>
            <Text fontSize="sm" color="gray.600">Conecte com suas redes sociais e aplicativos</Text>
          </Box>
        </Grid>
      </VStack>

      {/* CTA Buttons */}
      <HStack spacing="4" mb='4'>
        <Button as={RouterLink} to="/login" colorScheme="brand" size="lg">
          Acesse sua conta
        </Button>
        <Button colorScheme="brand" size="lg" variant="outline">
          Saiba Mais
        </Button>
      </HStack>
    </VStack>
  );
};
