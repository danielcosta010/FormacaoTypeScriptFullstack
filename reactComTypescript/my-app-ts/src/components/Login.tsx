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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'dan@gmail.com' && password === '1234') {
      localStorage.setItem("auth", "true")
      navigate("/dashboard");
    } else {
      alert('Erro: email ou senha iválidos')
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <FormControl bg="brand.800" p="4" color="white" borderRadius="10" w="320px" h="420px" boxShadow='dark-lg'  rounded='md'>
        <Flex direction="column" gap="6" align="center" h="full" justify="center">
          <h1>Faça Login</h1>
          <VStack w="full" spacing="4">
            <FormControl isRequired>
              <FormLabel fontSize="sm">Email</FormLabel>
              <Input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="white"
                color="black"
                required
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize="sm">Senha</FormLabel>
              <Input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                bg="white"
                color="black"
                required
              />
            </FormControl>
            <Button type="submit" colorScheme="brand" size="md" w="full">
              Entrar
            </Button>
          </VStack>
        </Flex>
      </FormControl>
    </form>
  );
};
