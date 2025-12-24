import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      navigate("/");
    }
  };

  return (
    <FormControl bg="brand.800" p="4" color="white" borderRadius="10" w="320px" h="420px" boxShadow='dark-lg'  rounded='md'>
      <Flex direction="column" gap="6" align="center" h="full" justify="center">
        <h1>Faça Login</h1>
        <VStack w="full" spacing="4">
          <FormControl>
            <FormLabel fontSize="sm">Email</FormLabel>
            <Input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="white"
              color="black"
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="sm">Senha</FormLabel>
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              bg="white"
              color="black"
            />
          </FormControl>
          <Button colorScheme="brand" size="md" w="full" onClick={handleLogin}>
            Entrar
          </Button>
        </VStack>
      </Flex>
    </FormControl>
  );
};
