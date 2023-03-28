import { Box, Container, Heading, Text } from '@chakra-ui/react'

export default function Dashboard() {
  const boxStyles = {
    p: '10px',
    bg: 'purple.400',
    color: 'white',
    m: '10px',
    textAlign: 'center',
    filter: 'blur(2px)',
    transition: '200ms',
    ':hover': {
      cursor: 'pointer',
      color: 'black',
      bg: 'blue.200',
      filter: 'none',
      transition: '400ms',
    },
  }

  return (
    <Container as="section" maxW="4xl" py="20px">
      <Heading my="30px" p="10px">
        Chakra UI Components
      </Heading>
      <Text ml="30px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, perferendis.</Text>
      <Text ml="30px" color="blue.300" fontWeight="bold">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, perferendis.
      </Text>

      <Box mx="auto" my="30px" p="20px" bg="orange" maxW="md">
        <Text color="white">This is a box</Text>
      </Box>

      <Box sx={boxStyles}>Hello, I'am Ian!</Box>
    </Container>
  )
}
