import {Box, Container, Heading} from "@chakra-ui/react"

function Navbar() {
    const bgColor = "#2020380"
    return(
        <Box position="fixed" w="100%" top="0" bg={bgColor} boxShadow="0 5px 4px rgba(0,0,0,.02), 0 5px 8px rgba(0,0,0,.03)">
            <Container 
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                alignItems="center"
                justifyContent="space-between"
            >
                <Heading>ToDo</Heading>
            </Container>
        </Box>
    )
}
export default Navbar;