import React from 'react';
import {
  chakra,
  HStack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  SimpleGrid,
  Stack,
  Icon,
  Avatar,
  Text
} from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';

import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from 'react-icons/ai';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Header = props => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue('gray.50', 'gray.900');
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue('gray.800', 'white');
  const mobileNav = useDisclosure();
  const navigate = useNavigate();

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? 'sm' : undefined}
      transition="box-shadow 0.2s"
      bg={bg}
      // borderTop="6px solid"
      borderTopColor="brand.400"
      w="full"
      overflowY="hidden"
      borderBottomWidth={2}
      borderBottomColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <chakra.div h="4.5rem" mx="auto" maxW="1200px">
        <Flex
          w="full"
          h="full"
          px="6"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="flex-start">
            <Link href="/">
              <HStack spacing={5}>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </HStack>
            </Link>
          </Flex>
          <Flex>
            <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
            <Text fontSize='2xl' fontWeight={'medium'}>In love with React & Next</Text>
            </HStack>
          </Flex>
          <Flex justify="flex-end" align="center" color="gray.400">
            <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
              <Button colorScheme="brand" variant="ghost" size="sm">
                Sign in
              </Button>
              <Button colorScheme="teal" variant="outline" size="sm" onClick={() => navigate("/music")}>
                Sign up
              </Button>
            </HStack>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: '0', md: '3' }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue('gray.800', 'inherit')}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Flex>
        </Flex>
      </chakra.div>
    </chakra.header>
  );
}

export default Header;