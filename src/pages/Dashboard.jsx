import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react'

export default function Dashboard() {
  return (
    <SimpleGrid as="section" columns={4} spacing={10} minChildWidth={250} p="10px">
      <Box bg="white" h="200px" border="1px solid">
        <Text color={{ base: 'red', md: 'blue', lg: 'orange' }} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
          Hello
        </Text>
      </Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
    </SimpleGrid>
  )
}

export async function tasksLoader() {
  const res = await fetch('http://localhost:3000/tasks')

  return res.json()
}
