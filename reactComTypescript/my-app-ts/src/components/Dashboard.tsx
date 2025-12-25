import {
  Box,
  Heading,
  VStack,
  Text,
  Button,
  HStack,
  Grid,
  GridItem,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Transaction {
  id: string;
  type: string;
  description: string;
  value: number;
  date: string;
}

export const Dashboard = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [balance, setBalance] = useState(5000);
  const [pixMode, setPixMode] = useState<"send" | "receive" | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: "1", type: "Depósito", description: "Depósito recebido", value: 1000, date: "2024-12-24" },
    { id: "2", type: "Transferência", description: "Pagamento conta", value: -500, date: "2024-12-23" },
    { id: "3", type: "Pix", description: "Pix enviado", value: -200, date: "2024-12-22" },
    { id: "4", type: "Saque", description: "Saque sacado", value: -300, date: "2024-12-21" },
  ]);
  const [transferValue, setTransferValue] = useState("");
  const [transferRecipient, setTransferRecipient] = useState("");
  const [pixKey, setPixKey] = useState("");
  const [pixValue, setPixValue] = useState("");
  const [depositValue, setDepositValue] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  
  const { isOpen: isTransferOpen, onOpen: onTransferOpen, onClose: onTransferClose } = useDisclosure();
  const { isOpen: isPixOpen, onOpen: onPixOpen, onClose: onPixClose } = useDisclosure();
  const { isOpen: isExtractOpen, onOpen: onExtractOpen, onClose: onExtractClose } = useDisclosure();
  const { isOpen: isDepositOpen, onOpen: onDepositOpen, onClose: onDepositClose } = useDisclosure();

  const handlePixClick = () => {
    setPixMode(null);
    onPixOpen();
  };

  const handlePixModeSelect = (mode: "send" | "receive") => {
    setPixMode(mode);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const handleTransfer = () => {
    if (transferValue && transferRecipient) {
      const value = parseFloat(transferValue);
      const newTransaction: Transaction = {
        id: String(transactions.length + 1),
        type: "Transferência",
        description: `Transferência para ${transferRecipient}`,
        value: -value,
        date: new Date().toISOString().split("T")[0],
      };
      setBalance(balance - value);
      setTransactions([newTransaction, ...transactions]);
      toast({ title: "Transferência realizada com sucesso!", status: "success" });
      onTransferClose();
      setTransferValue("");
      setTransferRecipient("");
    }
  };

  const handlePixSend = () => {
    if (pixValue && pixKey) {
      const value = parseFloat(pixValue);
      const newTransaction: Transaction = {
        id: String(transactions.length + 1),
        type: "Pix",
        description: `Pix para ${pixKey}`,
        value: -value,
        date: new Date().toISOString().split("T")[0],
      };
      setBalance(balance - value);
      setTransactions([newTransaction, ...transactions]);
      toast({ title: "Pix enviado com sucesso!", status: "success" });
      onPixClose();
      setPixValue("");
      setPixKey("");
      setPixMode(null);
    }
  };

  const handlePixReceive = () => {
    if (pixValue && pixKey) {
      const value = parseFloat(pixValue);
      const newTransaction: Transaction = {
        id: String(transactions.length + 1),
        type: "Pix",
        description: `Pix recebido de ${pixKey}`,
        value: value,
        date: new Date().toISOString().split("T")[0],
      };
      setBalance(balance + value);
      setTransactions([newTransaction, ...transactions]);
      toast({ title: "Pix recebido com sucesso!", status: "success" });
      onPixClose();
      setPixValue("");
      setPixKey("");
      setPixMode(null);
    }
  };

  const handleDeposit = () => {
    if (depositValue) {
      const value = parseFloat(depositValue);
      const newTransaction: Transaction = {
        id: String(transactions.length + 1),
        type: "Depósito",
        description: "Depósito recebido",
        value: value,
        date: new Date().toISOString().split("T")[0],
      };
      setBalance(balance + value);
      setTransactions([newTransaction, ...transactions]);
      toast({ title: "Depósito realizado com sucesso!", status: "success" });
      onDepositClose();
      setDepositValue("");
    }
  };



  return (
    <VStack spacing="8" align="stretch" w="full" maxW="5xl" mx="auto" mt='50px' py="8">
      {/* Header com Saldo */}
      <Box bg="white" p="8" borderRadius="lg" boxShadow="md">
        <HStack justify="space-between" align="center">
          <Box>
            <Text fontSize="sm" color="gray.600" mb="2">
              Seu Saldo
            </Text>
            <Heading as="h2" size="2xl" color="brand.500">
              {isBalanceVisible ? `R$ ${balance.toFixed(2)}` : "R$ ••••••"}
            </Heading>
          </Box>
          <IconButton
            isRound
            size="lg"
            bg='transparent'
            variant='unstyled'
            aria-label="Toggle balance visibility"
            onClick={() => setIsBalanceVisible(!isBalanceVisible)}
          >
            {isBalanceVisible ? <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z" stroke="#1C274C" stroke-width="1.5"></path> <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#1C274C" stroke-width="1.5"></path> </g></svg> : <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.68936 6.70456C2.52619 6.32384 2.08528 6.14747 1.70456 6.31064C1.32384 6.47381 1.14747 6.91472 1.31064 7.29544L2.68936 6.70456ZM15.5872 13.3287L15.3125 12.6308L15.5872 13.3287ZM22.6894 7.29544C22.8525 6.91472 22.6762 6.47381 22.2954 6.31064C21.9147 6.14747 21.4738 6.32384 21.3106 6.70456L22.6894 7.29544ZM19 11.1288L18.4867 10.582V10.582L19 11.1288ZM12 13.25C8.77611 13.25 6.46133 11.6446 4.9246 9.98966C4.15645 9.16243 3.59325 8.33284 3.22259 7.71014C3.03769 7.3995 2.90187 7.14232 2.8134 6.96537C2.76919 6.87696 2.73689 6.80875 2.71627 6.76411C2.70597 6.7418 2.69859 6.7254 2.69411 6.71533C2.69187 6.7103 2.69036 6.70684 2.68957 6.70503C2.68917 6.70413 2.68896 6.70363 2.68892 6.70355C2.68891 6.70351 2.68893 6.70357 2.68901 6.70374C2.68904 6.70382 2.68913 6.70403 2.68915 6.70407C2.68925 6.7043 2.68936 6.70456 2 7C1.31064 7.29544 1.31077 7.29575 1.31092 7.29609C1.31098 7.29624 1.31114 7.2966 1.31127 7.2969C1.31152 7.29749 1.31183 7.2982 1.31218 7.299C1.31287 7.30062 1.31376 7.30266 1.31483 7.30512C1.31698 7.31003 1.31988 7.31662 1.32353 7.32483C1.33083 7.34125 1.34115 7.36415 1.35453 7.39311C1.38127 7.45102 1.42026 7.5332 1.47176 7.63619C1.57469 7.84206 1.72794 8.13175 1.93366 8.47736C2.34425 9.16716 2.96855 10.0876 3.8254 11.0103C5.53867 12.8554 8.22389 14.75 12 14.75V13.25ZM15.3125 12.6308C14.3421 13.0128 13.2417 13.25 12 13.25V14.75C13.4382 14.75 14.7246 14.4742 15.8619 14.0266L15.3125 12.6308ZM22 7C21.3106 6.70456 21.3107 6.70441 21.3108 6.70427C21.3108 6.70423 21.3108 6.7041 21.3109 6.70402C21.3109 6.70388 21.311 6.70376 21.311 6.70368C21.3111 6.70352 21.3111 6.70349 21.3111 6.7036C21.311 6.7038 21.3107 6.70452 21.3101 6.70576C21.309 6.70823 21.307 6.71275 21.3041 6.71924C21.2983 6.73223 21.2889 6.75309 21.2758 6.78125C21.2495 6.83757 21.2086 6.92295 21.1526 7.03267C21.0406 7.25227 20.869 7.56831 20.6354 7.9432C20.1669 8.69516 19.4563 9.67197 18.4867 10.582L19.5133 11.6757C20.6023 10.6535 21.3917 9.56587 21.9085 8.73646C22.1676 8.32068 22.36 7.9668 22.4889 7.71415C22.5533 7.58775 22.602 7.48643 22.6353 7.41507C22.6519 7.37939 22.6647 7.35118 22.6737 7.33104C22.6782 7.32097 22.6818 7.31292 22.6844 7.30696C22.6857 7.30398 22.6867 7.30153 22.6876 7.2996C22.688 7.29864 22.6883 7.29781 22.6886 7.29712C22.6888 7.29677 22.6889 7.29646 22.689 7.29618C22.6891 7.29604 22.6892 7.29585 22.6892 7.29578C22.6893 7.29561 22.6894 7.29544 22 7ZM18.4867 10.582C17.6277 11.3882 16.5739 12.1343 15.3125 12.6308L15.8619 14.0266C17.3355 13.4466 18.5466 12.583 19.5133 11.6757L18.4867 10.582Z" fill="#1C274C"></path> <path opacity="0.5" d="M12.75 14.0001C12.75 13.5859 12.4142 13.2501 12 13.2501C11.5858 13.2501 11.25 13.5859 11.25 14.0001H12.75ZM16.2158 12.9197C15.9899 12.5725 15.5253 12.4742 15.1781 12.7001C14.831 12.926 14.7326 13.3906 14.9586 13.7378L16.2158 12.9197ZM9.04145 13.7378C9.26736 13.3906 9.16904 12.926 8.82185 12.7001C8.47466 12.4742 8.01008 12.5725 7.78417 12.9197L9.04145 13.7378ZM6.37136 15.091C6.14545 15.4382 6.24377 15.9028 6.59096 16.1287C6.93815 16.3546 7.40273 16.2563 7.62864 15.9091L6.37136 15.091ZM19.5303 10.5986C19.2374 10.3057 18.7626 10.3057 18.4697 10.5986C18.1768 10.8915 18.1768 11.3663 18.4697 11.6592L19.5303 10.5986ZM19.9697 13.1592C20.2626 13.4521 20.7374 13.4521 21.0303 13.1592C21.3232 12.8663 21.3232 12.3915 21.0303 12.0986L19.9697 13.1592ZM11.25 16.5001C11.25 16.9143 11.5858 17.2501 12 17.2501C12.4142 17.2501 12.75 16.9143 12.75 16.5001H11.25ZM16.3714 15.9091C16.5973 16.2563 17.0619 16.3546 17.409 16.1287C17.7562 15.9028 17.8545 15.4382 17.6286 15.091L16.3714 15.9091ZM5.53033 11.6592C5.82322 11.3663 5.82322 10.8915 5.53033 10.5986C5.23744 10.3057 4.76256 10.3057 4.46967 10.5986L5.53033 11.6592ZM2.96967 12.0986C2.67678 12.3915 2.67678 12.8663 2.96967 13.1592C3.26256 13.4521 3.73744 13.4521 4.03033 13.1592L2.96967 12.0986ZM7.78417 12.9197L6.37136 15.091L7.62864 15.9091L9.04145 13.7378L7.78417 12.9197ZM18.4697 11.6592L19.9697 13.1592L21.0303 12.0986L19.5303 10.5986L18.4697 11.6592ZM11.25 14.0001V16.5001H12.75V14.0001H11.25ZM14.9586 13.7378L16.3714 15.9091L17.6286 15.091L16.2158 12.9197L14.9586 13.7378ZM4.46967 10.5986L2.96967 12.0986L4.03033 13.1592L5.53033 11.6592L4.46967 10.5986Z" fill="#1C274C"></path> </g></svg>}
          </IconButton>
        </HStack>
      </Box>

      {/* Menu de Ações */}
      <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap="4" w="full">
        <GridItem>
          <Box
            bg="brand.50"
            p="6"
            borderRadius="lg"
            textAlign="center"
            cursor="pointer"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
            onClick={onTransferOpen}
            h="full"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Heading as="h3" size="md" color="brand.500" mb="3">
              💸 Transferência
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Enviar dinheiro
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            bg="brand.100"
            p="6"
            borderRadius="lg"
            textAlign="center"
            cursor="pointer"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
            onClick={handlePixClick}
            h="full"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Heading as="h3" size="md" color="brand.600" mb="3" display="flex" alignItems="center" justifyContent="center" gap="2">
              <svg fill="#7c3aed" width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z"></path>
                  <path d="m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z"></path>
                </g>
              </svg>
              Pix
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Enviar ou receber
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            bg="brand.200"
            p="6"
            borderRadius="lg"
            textAlign="center"
            cursor="pointer"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
            h="full"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Heading as="h3" size="md" color="brand.700" mb="3">
              📈 Investimentos
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Investir dinheiro
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            bg="brand.300"
            p="6"
            borderRadius="lg"
            textAlign="center"
            cursor="pointer"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
            onClick={onExtractOpen}
            h="full"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Heading as="h3" size="md" color="white" mb="3">
              📋 Extrato
            </Heading>
            <Text fontSize="sm" color="gray.100">
              Ver transações
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            bg="brand.400"
            p="6"
            borderRadius="lg"
            textAlign="center"
            cursor="pointer"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
            onClick={onDepositOpen}
            h="full"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Heading as="h3" size="md" color="white" mb="3">
              💰 Depósito
            </Heading>
            <Text fontSize="sm" color="gray.100">
              Depositar dinheiro
            </Text>
          </Box>
        </GridItem>
      </Grid>

      {/* Últimas Transações */}
      <Box bg="white" p="8" borderRadius="lg" boxShadow="md">
        <Heading as="h3" size="lg" color="brand.500" mb="6">
          Últimas Transações
        </Heading>
        <VStack spacing="4" align="stretch">
          {transactions.slice(0, 5).map((transaction) => (
            <HStack
              key={transaction.id}
              justify="space-between"
              p="4"
              borderBottom="1px solid"
              borderColor="gray.200"
            >
              <Box>
                <Text fontWeight="bold" color="gray.800">
                  {transaction.type}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {transaction.description}
                </Text>
              </Box>
              <Box textAlign="right">
                <Text
                  fontWeight="bold"
                  color={transaction.value > 0 ? "green.500" : "red.500"}
                >
                  {transaction.value > 0 ? "+" : ""}
                  R$ {Math.abs(transaction.value).toFixed(2)}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {transaction.date}
                </Text>
              </Box>
            </HStack>
          ))}
        </VStack>
      </Box>

      {/* Botão Logout */}
      <Button colorScheme="red" size="lg" w="full" onClick={handleLogout}>
        Sair da Conta
      </Button>

      {/* Modal Transferência */}
      <Modal isOpen={isTransferOpen} onClose={onTransferClose}>
        <ModalOverlay backdropFilter='auto' backdropBlur='3px'/>
        <ModalContent maxW={{ base: "90%", sm: "md", md: 'lg'}}>
          <ModalHeader color="brand.500">Fazer Transferência</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing="4">
              <FormControl>
                <FormLabel>CPF/CNPJ do Beneficiário</FormLabel>
                <Input
                  placeholder="000.000.000-00"
                  value={transferRecipient}
                  onChange={(e) => setTransferRecipient(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Valor</FormLabel>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={transferValue}
                  onChange={(e) => setTransferValue(e.target.value)}
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onTransferClose}>
              Cancelar
            </Button>
            <Button colorScheme="brand" onClick={handleTransfer}>
              Transferir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal Pix */}
      <Modal isOpen={isPixOpen} onClose={onPixClose}>
        <ModalOverlay backdropFilter='auto' backdropBlur='3px'/>
        <ModalContent maxW={{ base: "90%", sm: "md", md: 'lg'}}>
          <ModalHeader color="brand.500">
            {pixMode === null ? "Pix" : pixMode === "send" ? "Enviar Pix" : "Receber Pix"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {pixMode === null ? (
              <VStack spacing="4">
                <Text>O que você deseja fazer?</Text>
                <Button
                  w="full"
                  colorScheme="brand"
                  onClick={() => handlePixModeSelect("send")}
                >
                  Enviar Pix
                </Button>
                <Button
                  w="full"
                  colorScheme="brand"
                  variant="outline"
                  onClick={() => handlePixModeSelect("receive")}
                >
                  Receber Pix
                </Button>
              </VStack>
            ) : (
              <VStack spacing="4">
                <FormControl>
                  <FormLabel>
                    {pixMode === "send" ? "Chave Pix (destino)" : "Chave Pix (remetente)"}
                  </FormLabel>
                  <Input
                    placeholder="email@example.com ou CPF"
                    value={pixKey}
                    onChange={(e) => setPixKey(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Valor</FormLabel>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={pixValue}
                    onChange={(e) => setPixValue(e.target.value)}
                  />
                </FormControl>
              </VStack>
            )}
          </ModalBody>
          <ModalFooter>
            {pixMode !== null && (
              <Button variant="ghost" mr={3} onClick={() => setPixMode(null)}>
                Voltar
              </Button>
            )}
            {pixMode === null && (
              <Button variant="ghost" mr={3} onClick={onPixClose}>
                Cancelar
              </Button>
            )}
            {pixMode === "send" && (
              <Button colorScheme="brand" onClick={handlePixSend}>
                Enviar Pix
              </Button>
            )}
            {pixMode === "receive" && (
              <Button colorScheme="brand" onClick={handlePixReceive}>
                Confirmar Recebimento
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal Extrato */}
      <Modal isOpen={isExtractOpen} onClose={onExtractClose} size="lg">
        <ModalOverlay backdropFilter='auto' backdropBlur='3px'/>
        <ModalContent maxW={{ base: "90%", sm: "md", md: 'lg'}}>
          <ModalHeader color="brand.500">Extrato Completo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing="3" align="stretch">
              {transactions.map((transaction) => (
                <HStack key={transaction.id} justify="space-between" p="3" borderBottom="1px solid" borderColor="gray.200">
                  <Box>
                    <Text fontWeight="bold">{transaction.type}</Text>
                    <Text fontSize="sm" color="gray.600">{transaction.description}</Text>
                  </Box>
                  <Box textAlign="right">
                    <Text fontWeight="bold" color={transaction.value > 0 ? "green.500" : "red.500"}>
                      {transaction.value > 0 ? "+" : ""}R$ {Math.abs(transaction.value).toFixed(2)}
                    </Text>
                    <Text fontSize="sm" color="gray.600">{transaction.date}</Text>
                  </Box>
                </HStack>
              ))}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brand" onClick={onExtractClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal Depósito */}
      <Modal isOpen={isDepositOpen} onClose={onDepositClose}>
        <ModalOverlay backdropFilter='auto' backdropBlur='3px'/>
        <ModalContent maxW={{ base: "90%", sm: "md", md: 'lg'}} >
          <ModalHeader color="brand.500">Fazer Depósito</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing="4">
              <FormControl>
                <FormLabel>Valor do Depósito</FormLabel>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={depositValue}
                  onChange={(e) => setDepositValue(e.target.value)}
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onDepositClose}>
              Cancelar
            </Button>
            <Button colorScheme="brand" onClick={handleDeposit}>
              Depositar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </VStack>
  );
};
