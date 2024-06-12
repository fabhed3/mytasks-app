import { useState } from "react";
import {
  Container,
  Heading,
  Input,
  Button,
  VStack,
  HStack,
  Checkbox,
  IconButton,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="2xl" mb={6}>
          Todo App!
        </Heading>
        <HStack w="100%">
          <Input
            placeholder="Add a new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={addTodo} colorScheme="teal">
            Add
          </Button>
        </HStack>
        <VStack w="100%" spacing={3} mt={6}>
          {todos.map((todo, index) => (
            <HStack
              key={index}
              w="100%"
              p={3}
              borderWidth="1px"
              borderRadius="md"
              justifyContent="space-between"
              bg={todo.completed ? "green.100" : "white"}
            >
              <Checkbox
                isChecked={todo.completed}
                onChange={() => toggleTodo(index)}
              >
                <Text as={todo.completed ? "s" : ""}>{todo.text}</Text>
              </Checkbox>
              <IconButton
                aria-label="Delete todo"
                icon={<FaTrash />}
                onClick={() => deleteTodo(index)}
                colorScheme="red"
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
      <Flex as="footer" width="100%" py={4} justifyContent="center" alignItems="center" bg="gray.200" mt={10}>
        <Text fontSize="sm">© 2023 Todo App!</Text>
      </Flex>
    </Container>
  );
};

export default Index;
