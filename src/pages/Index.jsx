import { Container, Box, VStack, HStack, Text, Button, Image, SimpleGrid, Icon, Flex, Heading, Link } from "@chakra-ui/react";
import { FaCheckCircle, FaPlayCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="white" boxShadow="md">
        <Box>
          <Text fontSize="xl" fontWeight="bold">TaxPal</Text>
        </Box>
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <Link href="#features">Features</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#pricing">Pricing</Link>
        </HStack>
        <HStack spacing={4}>
          <Button variant="link">Sign in</Button>
          <Button colorScheme="blue">Get started today</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box textAlign="center" py={20} bgGradient="linear(to-r, blue.500, purple.500)" color="white">
        <Heading as="h1" size="2xl" mb={4}>Accounting made simple for small businesses.</Heading>
        <Text fontSize="lg" mb={6}>Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.</Text>
        <HStack spacing={4} justify="center">
          <Button colorScheme="whiteAlpha" variant="solid">Get 6 months free</Button>
          <Button colorScheme="whiteAlpha" variant="outline" leftIcon={<FaPlayCircle />}>Watch video</Button>
        </HStack>
      </Box>

      {/* Trusted By Section */}
      <Box textAlign="center" py={10}>
        <Text fontSize="lg" mb={4}>Trusted by these six companies so far</Text>
        <HStack spacing={8} justify="center">
          <Image src="/images/logo1.png" alt="Company 1" boxSize="50px" />
          <Image src="/images/logo2.png" alt="Company 2" boxSize="50px" />
          <Image src="/images/logo3.png" alt="Company 3" boxSize="50px" />
          <Image src="/images/logo4.png" alt="Company 4" boxSize="50px" />
          <Image src="/images/logo5.png" alt="Company 5" boxSize="50px" />
          <Image src="/images/logo6.png" alt="Company 6" boxSize="50px" />
        </HStack>
      </Box>

      {/* Simplify Everyday Business Tasks Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={10}>Simplify everyday business tasks.</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box textAlign="center">
              <Icon as={FaCheckCircle} w={10} h={10} color="blue.500" mb={4} />
              <Heading as="h3" size="md" mb={2}>Stay on top of things with always up-to-date reporting features.</Heading>
              <Text>We keep detailed, up-to-date records so you don’t have to.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaCheckCircle} w={10} h={10} color="blue.500" mb={4} />
              <Heading as="h3" size="md" mb={2}>Never lose track of what’s in stock with accurate inventory tracking.</Heading>
              <Text>We’ll keep an eye on what’s in stock so you don’t have to.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaCheckCircle} w={10} h={10} color="blue.500" mb={4} />
              <Heading as="h3" size="md" mb={2}>Organize all of your contacts, service providers, and invoices in one place.</Heading>
              <Text>We’ll keep everything organized so you don’t have to.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Get Started Today Section */}
      <Box textAlign="center" py={20} bgGradient="linear(to-r, blue.500, purple.500)" color="white">
        <Heading as="h2" size="xl" mb={4}>Get started today</Heading>
        <Text fontSize="lg" mb={6}>It’s time to take control of your books. Buy our software so you can feel like you’re doing something productive.</Text>
        <Button colorScheme="whiteAlpha" variant="solid">Get 6 months free</Button>
      </Box>

      {/* Testimonials Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={10}>Loved by businesses worldwide.</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box textAlign="center" p={5} boxShadow="md" borderRadius="md">
              <Text fontSize="lg" mb={4}>"TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do."</Text>
              <Text fontWeight="bold">Sheryl Berge</Text>
              <Text>CEO of Lynch LLC</Text>
            </Box>
            <Box textAlign="center" p={5} boxShadow="md" borderRadius="md">
              <Text fontSize="lg" mb={4}>"The best part about TaxPal is every time I pay my employees, your software tells me how much money we have left."</Text>
              <Text fontWeight="bold">Leland Kahn</Text>
              <Text>Founder of Kahn LLC</Text>
            </Box>
            <Box textAlign="center" p={5} boxShadow="md" borderRadius="md">
              <Text fontSize="lg" mb={4}>"I have no idea how to send tax info to the EU and with TaxPal I somehow don’t have to worry about it."</Text>
              <Text fontWeight="bold">Peter Reynolds</Text>
              <Text>Founder of West Inc</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={10}>Simple pricing, for everyone.</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box textAlign="center" p={5} boxShadow="md" borderRadius="md">
              <Heading as="h3" size="lg" mb={4}>$9</Heading>
              <Text fontSize="lg" mb={4}>Starter</Text>
              <Text>Good for anyone who is self-employed and just getting started.</Text>
              <Button mt={4} colorScheme="blue">Get started</Button>
            </Box>
            <Box textAlign="center" p={5} boxShadow="md" borderRadius="md" bg="blue.500" color="white">
              <Heading as="h3" size="lg" mb={4}>$15</Heading>
              <Text fontSize="lg" mb={4}>Small business</Text>
              <Text>Perfect for small / medium sized businesses.</Text>
              <Button mt={4} colorScheme="whiteAlpha">Get started</Button>
            </Box>
            <Box textAlign="center" p={5} boxShadow="md" borderRadius="md">
              <Heading as="h3" size="lg" mb={4}>$39</Heading>
              <Text fontSize="lg" mb={4}>Enterprise</Text>
              <Text>For the biggest enterprise companies.</Text>
              <Button mt={4} colorScheme="blue">Get started</Button>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={10}>Frequently asked questions</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading as="h3" size="md" mb={4}>Does TaxPal handle VAT?</Heading>
              <Text>Well no, but if you move your company offshore you can probably ignore it.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={4}>Can I pay for my subscription via purchase order?</Heading>
              <Text>Absolutely, we are happy to take your money in all forms.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={4}>How do I apply for a job at TaxPal?</Heading>
              <Text>We only hire our customers, so buy a subscription and then let’s talk.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={4}>What was that testimonial about tax fraud all about?</Heading>
              <Text>TaxPal is just a software application, ultimately your books are your responsibility.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={4}>TaxPal sounds horrible but why do I still feel compelled to purchase?</Heading>
              <Text>This is the power of excellent marketing. We could sell you anything.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={4}>I found other companies called TaxPal, are you sure you can use this name?</Heading>
              <Text>Honestly not sure, we haven’t actually incorporated or anything.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box py={10} bg="gray.800" color="white">
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Heading as="h3" size="md" mb={4}>Features</Heading>
              <Link href="#features">Features</Link>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={4}>Testimonials</Heading>
              <Link href="#testimonials">Testimonials</Link>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={4}>Pricing</Heading>
              <Link href="#pricing">Pricing</Link>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;