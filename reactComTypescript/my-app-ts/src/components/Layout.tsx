import { VStack } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";

export const Layout = ({ children }: any) => {
  return (
    <VStack spacing={0} minH="100vh" >
      <Header />
      <VStack flex={1} justify="center" align="center" w="full" px={{ base: '4', md:'4'}}>
        {children}
      </VStack>
      <Footer />
    </VStack>
  );
};
