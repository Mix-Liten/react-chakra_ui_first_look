import { UnlockIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, Button, Flex, Heading, HStack, Spacer, Text, useToast } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  const toast = useToast()

  const showToast = () => {
    const title = 'Logged out'
    if (!toast.isActive(title)) {
      toast({
        title,
        id: title,
        description: 'Successfully logged out',
        duration: 5 * 1e3,
        isClosable: true,
        status: 'success',
        position: 'top',
        icon: <UnlockIcon />,
      })
    }
  }

  return (
    <Flex as="nav" p="10px" alignItems="center" mb="40px" gap="10px">
      <Heading as="h1">Brief Tasks</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Avatar src="/img/yoshi.png" name="yoshi" bg="purple.400">
          <AvatarBadge w="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>yoshi@mail.com</Text>
        <Button colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  )
}
