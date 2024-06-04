import { Box } from "@mui/material"
import WhiteLink from "../widgets/WhiteLink"
import { repoUrl } from "../constants"

const SiteFooter = () => {
    return <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1vw 2.5vw'
    }}>
        <Box>Thanks for reading!</Box>
        <Box>© Charlie Frey 2024</Box>
        <Box>View the source code for this website <WhiteLink href={repoUrl}>here</WhiteLink></Box>
    </Box>
}

export default SiteFooter