import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react"
import { nanoid } from "nanoid";

const AddTodo = ({addTodo}) => {

  const toast = useToast()

  const [content, setContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault()

    if (!content) {
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })

      return
    }

    const todo = {
      id: nanoid(),
      title: content
    }

    addTodo(todo)
    setContent("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input 
          variant="filled" 
          placeholder="Please enter your task here" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <Button colorScheme="pink" px="8" type="submit">Add Todo</Button>
      </HStack>

    </form>
  )
};

export default AddTodo;
