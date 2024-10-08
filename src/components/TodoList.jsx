import React from "react"
import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoList = ({todos, deleteTodo}) => {

  if(!todos.length) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        No Todos, Please add!
      </Badge>
    )
  }

  return (
    <VStack 
      divider={<StackDivider />} 
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      w="100%"
      borderRadius="lg"
      maxW={{base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw"}}
      alignItems="stretch"
    >
      {todos.map(todo => (
        <HStack key={todo.id}>
          <Text>{todo.title}</Text>
          <Spacer />
          <IconButton icon={<FaTrash />} isRound={true} onClick={() => deleteTodo(todo.id)}/>
        </HStack>
      ))}
    </VStack>
  )
};

export default TodoList;
